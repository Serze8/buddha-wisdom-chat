import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'audio', 'metta');

const mettaData = [
  { lang: 'ru', voice: 'ru-RU-DmitryNeural', text: 'Пусть я буду счастлив. Пусть я буду в покое. Пусть все существа будут счастливы.' },
  { lang: 'en', voice: 'en-US-GuyNeural', text: 'May I be happy. May I be peaceful. May all beings be happy.' },
  { lang: 'hi', voice: 'hi-IN-MadhurNeural', text: 'मैं सुखी होऊँ। मैं शांत होऊँ। सभी प्राणी सुखी हों।' },
  { lang: 'es', voice: 'es-ES-AlvaroNeural', text: 'Que yo sea feliz. Que yo esté en paz. Que todos los seres sean felices.' },
  { lang: 'fr', voice: 'fr-FR-HenriNeural', text: 'Que je soit heureux. Que je sois en paix. Que tous les êtres soient heureux.' },
  { lang: 'de', voice: 'de-DE-ConradNeural', text: 'Möge ich glücklich sein. Möge ich in Frieden sein. Mögen alle Wesen glücklich sein.' },
  { lang: 'zh', voice: 'zh-CN-YunxiNeural', text: '愿我快乐。愿我平静。愿一切众生快乐。' },
  { lang: 'ja', voice: 'ja-JP-KeitaNeural', text: '私が幸せでありますように。私が平和でありますように。すべての生きとし生けるものが幸せでありますように。' },
  { lang: 'pt', voice: 'pt-BR-AntonioNeural', text: 'Que eu seja feliz. Que eu esteja em paz. Que todos os seres sejam felizes.' },
  { lang: 'th', voice: 'th-TH-PremwadeeNeural', text: 'ขอให้ข้าพเจ้ามีความสุข ขอให้ข้าพเจ้ามีความสงบ ขอให้สัตว์ทั้งปวงมีความสุข' },
  { lang: 'vi', voice: 'vi-VN-NamMinhNeural', text: 'Nguyện cho con được hạnh phúc. Nguyện cho con được an bình. Nguyện cho tất cả chúng sinh được hạnh phúc.' },
  { lang: 'ko', voice: 'ko-KR-InJoonNeural', text: '제가 행복하길 바랍니다. 제가 평화롭길 바랍니다. 모든 중생이 행복하길 바랍니다.' },
  { lang: 'id', voice: 'id-ID-ArdiNeural', text: 'Semoga saya bahagia. Semoga saya damai. Semoga semua makhluk bahagia.' },
  { lang: 'ms', voice: 'ms-MY-OsmanNeural', text: 'Semoga saya gembira. Semoga saya aman. Semoga semua makhluk gembira.' },
  { lang: 'si', voice: 'si-LK-SameeraNeural', text: 'මම සතුටින් සිටිමි. මම සාමකාමීව සිටිමි. සියලු සත්ත්වයෝ සතුටින් සිටිත්වා.' },
  { lang: 'my', voice: 'my-MM-TurnerNeural', text: 'ငါ ပျော်ရွှင်ပါစေ။ ငါ ငြိမ်ချမ်းပါစေ။ သတ္တဝါအားလုံး ပျော်ရွှင်ကြပါစေ။' },
  { lang: 'ne', voice: 'ne-NP-SagarNeural', text: 'म सुखी होऊँ। म शान्त होऊँ। सबै प्राणी सुखी होऊन्।' },
  { lang: 'bo', voice: 'bo-CN-TashiNeural', text: 'བདེ་བ་འཐོབ་པར་གྱུར་ཅིག ཞི་བ་འཐོབ་པར་གྱུར་ཅིག སེམས་ཅན་ཐམས་ཅད་བདེ་བ་འཐོབ་པར་གྱུར་ཅིག' },
];

function validateMP3(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const buf = fs.readFileSync(filePath);
  if (buf.length < 1024) return false; // too small to be real audio
  // Check MP3 frame sync (FF FB, FF F3, FF F2) or ID3 tag
  const isMP3Frame = buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0;
  const isID3 = buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33;
  return isMP3Frame || isID3;
}

function validateAll() {
  console.log('=== Validation ===');
  let valid = 0, missing = 0, invalid = 0;
  for (const item of mettaData) {
    const filePath = path.join(outDir, `${item.lang}.mp3`);
    if (!fs.existsSync(filePath)) {
      console.log(`  ${item.lang}: MISSING`);
      missing++;
    } else if (!validateMP3(filePath)) {
      console.log(`  ${item.lang}: INVALID (corrupt)`);
      invalid++;
    } else {
      const size = fs.statSync(filePath).size;
      console.log(`  ${item.lang}: OK (${(size / 1024).toFixed(0)} KB)`);
      valid++;
    }
  }
  console.log(`\nResult: ${valid} valid, ${missing} missing, ${invalid} invalid\n`);
  return { valid, missing, invalid };
}

async function generateOne(item) {
  const tmpDir = path.join(outDir, `_tmp_${item.lang}`);
  fs.mkdirSync(tmpDir, { recursive: true });
  const tts = new MsEdgeTTS();
  await tts.setMetadata(item.voice, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  await tts.toFile(tmpDir, item.text, { rate: '-25%', pitch: '-5Hz' });
  await tts.close();
  const src = path.join(tmpDir, 'audio.mp3');
  const dest = path.join(outDir, `${item.lang}.mp3`);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    fs.rmSync(tmpDir, { recursive: true });
    return true;
  }
  return false;
}

async function generate() {
  fs.mkdirSync(outDir, { recursive: true });

  // Step 1: Validate existing files
  const status = validateAll();

  // Step 2: Determine what needs generation
  const todo = mettaData.filter(item => {
    const fp = path.join(outDir, `${item.lang}.mp3`);
    return !validateMP3(fp);
  });

  if (todo.length === 0) {
    console.log('All files valid. Nothing to generate.');
    return;
  }

  console.log(`Generating ${todo.length} files...`);
  let generated = 0;

  for (const item of todo) {
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      console.log(`  ${item.lang}: attempt ${attempt}...`);
      try {
        success = await generateOne(item);
        if (success) {
          const fp = path.join(outDir, `${item.lang}.mp3`);
          if (validateMP3(fp)) {
            const size = fs.statSync(fp).size;
            console.log(`    ✓ ${(size / 1024).toFixed(0)} KB — validated`);
            generated++;
          } else {
            console.log(`    ✗ Generated file failed validation, retrying...`);
            fs.unlinkSync(fp);
            success = false;
          }
          break;
        }
      } catch (e) {
        console.log(`    retry: ${e.message.substring(0, 60)}`);
        await new Promise(r => setTimeout(r, 2000));
      }
    }
    if (!success) console.log(`    ✗ FAILED after 3 attempts`);
    await new Promise(r => setTimeout(r, 500));
  }

  // Step 3: Final validation
  console.log('\n=== Final validation ===');
  const final = validateAll();
  console.log(`Generated: ${generated} new files`);
  console.log(`Total valid: ${final.valid}/18`);
}

generate().catch(console.error);
