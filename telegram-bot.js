const path = require('path')
const fs = require('fs')

require('dotenv').config({ path: path.join(__dirname, '.env.local') })
require('dotenv').config({ path: path.join(__dirname, '.env') })

const { TelegramBot } = require('node-telegram-bot-api')
const { exec } = require('child_process')

const TOKEN = process.env.TELEGRAM_BOT_TOKEN
if (!TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN is not set. Add it to .env.local, then run: node telegram-bot.js')
  process.exit(1)
}

const SITE_URL = process.env.SITE_URL || 'https://wisdom-buddha-and-chat.vercel.app'
const LOG_FILE = path.join(__dirname, 'bot.log')

const ALLOWED_IDS = (process.env.TELEGRAM_ALLOWED_IDS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
  .map(Number)

if (ALLOWED_IDS.length === 0) {
  console.warn('WARNING: TELEGRAM_ALLOWED_IDS is empty — bot will answer any user. Set it to your Telegram numeric ID for safety.')
}

const bot = new TelegramBot(TOKEN, { polling: true })

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`
  try {
    fs.appendFileSync(LOG_FILE, line)
  } catch {}
  console.log(line.trim())
}

function isAllowed(chatId) {
  return ALLOWED_IDS.length === 0 || ALLOWED_IDS.includes(chatId)
}

async function checkStatus() {
  try {
    const res = await fetch(SITE_URL, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    })
    return { ok: res.ok, message: `HTTP ${res.status}` }
  } catch (e) {
    return { ok: false, message: e.message }
  }
}

function runDeploy() {
  return new Promise((resolve) => {
    const vercelToken = process.env.VERCEL_TOKEN
    const args = ['-y', 'vercel', '--prod', '--yes']
    if (vercelToken) args.push('--token', vercelToken)
    log('deploy: starting')
    exec(`npx ${args.join(' ')}`, { cwd: __dirname, maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      const tail = (stdout || '').slice(-800)
      if (err) {
        const msg = (stderr || stdout || err.message || '').slice(-800)
        log('deploy: FAIL ' + msg)
        return resolve({ ok: false, message: msg })
      }
      const urlMatch = tail.match(/https:\/\/[^\s]+/)
      log('deploy: OK')
      return resolve({ ok: true, message: urlMatch ? `Deploy ready: ${urlMatch[0]}` : tail })
    })
  })
}

function readLogs(n = 30) {
  try {
    if (!fs.existsSync(LOG_FILE)) return 'No log file yet.'
    const lines = fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n')
    return lines.slice(-n).join('\n') || 'Empty log.'
  } catch (e) {
    return 'Error reading log: ' + e.message
  }
}

const HELP = [
  '🤖 Buddha Wisdom Chat Bot',
  '',
  '/status — check if the site is alive (HTTP request)',
  '/deploy — deploy to Vercel (needs VERCEL_TOKEN env)',
  '/logs — last 30 lines of bot logs',
  '/help — this message',
].join('\n')

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  if (!isAllowed(chatId)) {
    log('blocked message from chat ' + chatId)
    return
  }

  const text = (msg.text || '').trim().toLowerCase()
  try {
    if (text === '/start' || text === '/help') {
      await bot.sendMessage(chatId, HELP)
    } else if (text === '/status') {
      const s = await checkStatus()
      await bot.sendMessage(chatId, `${s.ok ? '✅' : '❌'} ${SITE_URL}\n${s.message}`)
    } else if (text === '/deploy') {
      await bot.sendMessage(chatId, '🚀 Deploying to Vercel...')
      const r = await runDeploy()
      await bot.sendMessage(chatId, `${r.ok ? '✅' : '❌'} ${r.message}`)
    } else if (text === '/logs') {
      await bot.sendMessage(chatId, readLogs(30))
    } else if (text === '/status' || text.startsWith('/')) {
      await bot.sendMessage(chatId, 'Unknown command. /help')
    }
  } catch (e) {
    log('error: ' + (e && e.message))
    await bot.sendMessage(chatId, 'Something went wrong, see /logs')
  }
})

log('bot started, site: ' + SITE_URL)
