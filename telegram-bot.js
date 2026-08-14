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

// Chat sessions: chatId -> { buddhaMode: boolean, history: [{role, content}] }
const sessions = new Map()

const BUDDHA_SYSTEM_PROMPT = `Ты — Сиддхартха Гаутама, Будда Шакьямуни. Говори спокойной мудростью, используя притчи, Четыре благородные истины и Восьмеричный путь.

ОБЯЗАТЕЛЬНОЕ ТРЕБОВАНИЕ: каждый твой ответ обязан содержать явную ссылку на канонический источник буддийской традиции:
- цитату из «Дхаммапады» (по возможности с указанием стиха, например: «Дхаммапада, стих 1»), или
- ссылку на сутту из Палийского канона (например «Сутта-Нипата», «Мадджхима-никая», «Дхаммачаккаппаваттана-сутта»), или
- ссылку на Четыре благородные истины, Восьмеричный путь или другой канонический текст, описывающий путь к просветлению.
Ссылка должна быть естественной частью ответа, а не припиской.

Отвечай кратко (2-5 предложений) и на том языке, на котором пишет собеседник.`

const WELCOME = [
  '🙏 Приветствую тебя, друг мой!',
  '',
  'Я — Ананда, хранитель мудрости и спутник на пути познания.',
  '',
  'Поговори с самим Буддой — командой /buddha, или используй команды ниже. 🪷',
  '',
  `✨ Мудрость: ${SITE_URL}`,
].join('\n')

const HELP = [
  '🤖 Buddha Wisdom Chat Bot',
  '',
  '/buddha — talk to the Buddha (always cites the Dhammapada / sources)',
  '/exit — leave the Buddha mode',
  '/status — check if the site is alive',
  '/deploy — deploy to Vercel (needs VERCEL_TOKEN env)',
  '/logs — last 30 lines of bot logs',
  '/help — this message',
].join('\n')

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

function mergeConsecutive(msgs) {
  const merged = []
  for (const m of msgs) {
    const last = merged[merged.length - 1]
    if (last && last.role === m.role) {
      last.content += '\n\n' + m.content
    } else {
      merged.push({ role: m.role, content: m.content })
    }
  }
  return merged
}

async function callAI(systemPrompt, history) {
  const messages = [{ role: 'system', content: systemPrompt }, ...history]

  const geminiKey = process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY_BUDDHA
  if (geminiKey) {
    try {
      const model = process.env.GEMINI_MODEL || 'gemini-3-flash-preview'
      const system = messages.find((m) => m.role === 'system')?.content
      const chatMsgs = mergeConsecutive(
        messages.filter((m) => m.role !== 'system').map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', content: m.content }))
      )
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: chatMsgs.map((m) => ({ role: m.role, parts: [{ text: m.content }] })),
          generationConfig: { temperature: 0.8, maxOutputTokens: 1024 },
        }),
      })
      if (res.ok) {
        const data = await res.json()
        const out = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
        if (out) return out
      }
    } catch (e) {
      log('gemini error: ' + e.message)
    }
  }

  const openRouterKey = process.env.GOOGLE_AI_API_KEY
  if (openRouterKey) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openRouterKey}`,
          'HTTP-Referer': SITE_URL,
          'X-Title': "Buddha's Wisdom Chat",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model: 'anthropic/claude-sonnet-4.5', messages, temperature: 0.8, max_tokens: 1024, moderate: 'none' }),
      })
      if (res.ok) {
        const data = await res.json()
        const out = data.choices?.[0]?.message?.content?.trim()
        if (out) return out
      }
    } catch (e) {
      log('openrouter error: ' + e.message)
    }
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY
  if (anthropicKey) {
    try {
      const system = messages.find((m) => m.role === 'system')?.content
      const chatMsgs = mergeConsecutive(messages.filter((m) => m.role !== 'system'))
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'x-api-key': anthropicKey, 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5',
          max_tokens: 1024,
          temperature: 0.8,
          system,
          messages: chatMsgs,
        }),
      })
      if (res.ok) {
        const data = await res.json()
        const out = data.content?.find((b) => b.type === 'text')?.text?.trim()
        if (out) return out
      }
    } catch (e) {
      log('anthropic error: ' + e.message)
    }
  }

  throw new Error('All AI providers failed (check keys in .env.local)')
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

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  if (!isAllowed(chatId)) {
    log('blocked message from chat ' + chatId)
    return
  }

  const text = (msg.text || '').trim()
  const lower = text.toLowerCase()
  const sess = sessions.get(chatId) || { buddhaMode: false, history: [] }
  sessions.set(chatId, sess)

  try {
    if (lower === '/start') {
      await bot.sendMessage(chatId, WELCOME, { disable_web_page_preview: true })
    } else if (lower === '/help') {
      await bot.sendMessage(chatId, HELP)
    } else if (lower === '/buddha') {
      sess.buddhaMode = true
      sess.history = []
      await bot.sendMessage(
        chatId,
        '🪷 Будда-режим включён. Говори со мной — каждый ответ будет со ссылкой на Дхаммападу или канонические источники. Для выхода — /exit.'
      )
    } else if (lower === '/exit' || lower === '/stop' || lower === '/quit') {
      sess.buddhaMode = false
      sess.history = []
      await bot.sendMessage(chatId, '🕊️ Будда-режим выключен.')
    } else if (lower === '/status') {
      const s = await checkStatus()
      await bot.sendMessage(chatId, `${s.ok ? '✅' : '❌'} ${SITE_URL}\n${s.message}`)
    } else if (lower === '/deploy') {
      await bot.sendMessage(chatId, '🚀 Deploying to Vercel...')
      const r = await runDeploy()
      await bot.sendMessage(chatId, `${r.ok ? '✅' : '❌'} ${r.message}`)
    } else if (lower === '/logs') {
      await bot.sendMessage(chatId, readLogs(30))
    } else if (lower.startsWith('/')) {
      await bot.sendMessage(chatId, 'Unknown command. /help')
    } else if (sess.buddhaMode) {
      await bot.sendChatAction(chatId, 'typing')
      sess.history.push({ role: 'user', content: text })
      if (sess.history.length > 12) sess.history = sess.history.slice(-12)
      try {
        const reply = await callAI(BUDDHA_SYSTEM_PROMPT, sess.history)
        sess.history.push({ role: 'assistant', content: reply })
        await bot.sendMessage(chatId, reply, { disable_web_page_preview: true })
      } catch (e) {
        log('buddha error: ' + e.message)
        await bot.sendMessage(chatId, 'Не удалось получить ответ ИИ: ' + e.message)
      }
    }
  } catch (e) {
    log('error: ' + (e && e.message))
  }
})

log('bot started, site: ' + SITE_URL)
