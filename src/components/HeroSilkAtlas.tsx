'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const heroQuotes: Record<string, string[]> = {
  en: [
    'Peace comes from within. Do not seek it without.',
    'The mind is everything. What you think you become.',
    'Health is the greatest gift, contentment the greatest wealth.',
    'You are what you think. All that you are arises from your thoughts.',
    'The only way to find true peace is to let go of attachment.',
    'Hatred does not cease by hatred, but only by love.',
    'All that we are is the result of what we have thought.',
    'Better than a thousand hollow words is one word that brings peace.',
  ],
  ru: [
    'Мир приходит изнутри. Не ищи его снаружи.',
    'Ум — это всё. Чем ты думаешь, тем ты становишься.',
    'Здоровье — величайший дар, довольство — величайшее богатство.',
    'Ты — то, что ты думаешь. Всё, чем ты являешься, возникает из твоих мыслей.',
    'Единственный способ обрести истинный покой — отпустить привязанности.',
    'Ненависть не прекращается ненавистью, а лишь любовью.',
    'Всё, чем мы являемся, — это результат того, о чём мы думали.',
    'Лучше одно слово, приносящее покой, чем тысяча пустых слов.',
  ],
  hi: [
    'शांति भीतर से आती है। इसे बाहर मत खोजो।',
    'मन ही सब कुछ है। जो तुम सोचते हो, वही बन जाते हो।',
    'स्वास्थ्य सबसे बड़ा उपहार है, संतोष सबसे बड़ा धन है।',
    'तुम वही हो जो तुम सोचते हो। तुम्हारे विचारों से तुम्हारा अस्तित्व बनता है।',
    'सच्ची शांति पाने का एकमात्र तरीका है आसक्ति छोड़ना।',
  ],
  zh: [
    '平静来自内心。不要向外寻找。',
    '心是一切。你所想的，你就会成为。',
    '健康是最大的礼物，满足是最大的财富。',
    '你就是你所想的。你的一切都源于你的思想。',
    '找到真正平静的唯一方法是放下执着。',
  ],
  ja: [
    '平和は内面から来る。外に求めるな。',
    '心がすべて。考えることが、あなたの存在になる。',
    '健康は最大の贈り物、満足は最大の富。',
    'あなたはあなたの考えそのもの。すべては思考から生まれる。',
    '真の平和を見つける唯一の方法は執着を手放すこと。',
  ],
  es: [
    'La paz viene de dentro. No la busques fuera.',
    'La mente lo es todo. Lo que piensas, eso te conviertes.',
    'La salud es el mayor regalo, la satisfacción la mayor riqueza.',
    'Eres lo que piensas. Todo lo que eres surge de tus pensamientos.',
    'El único camino hacia la verdadera paz es soltar el apego.',
    'El odio no cesa con el odio, sino con el amor.',
    'Todo lo que somos es resultado de lo que hemos pensado.',
    'Mejor una sola palabra que traiga paz que mil palabras vacías.',
  ],
  fr: [
    'La paix vient de l\'intérieur. Ne la cherche pas à l\'extérieur.',
    'L\'esprit est tout. Ce que tu penses, tu le deviens.',
    'La santé est le plus grand don, le contentement la plus grande richesse.',
    'Tu es ce que tu penses. Tout ce que tu es provient de tes pensées.',
    'La seule façon de trouver la vraie paix est de lâcher l\'attachement.',
    'La haine ne cesse que par l\'amour.',
    'Tout ce que nous sommes est le résultat de ce que nous avons pensé.',
    'Mieux vaut un seul mot apportant la paix que mille mots creux.',
  ],
  de: [
    'Frieden kommt von innen. Suche ihn nicht draußen.',
    'Der Geist ist alles. Was du denkst, das wirst du.',
    'Gesundheit ist das größte Geschenk, Zufriedenheit der größte Reichtum.',
    'Du bist, was du denkst. Alles, was du bist, entsteht aus deinen Gedanken.',
    'Der einzige Weg, wahren Frieden zu finden, ist loszulassen.',
    'Hass hört sich nur durch Liebe, nicht durch Hass.',
    'Alles, was wir sind, ist das Ergebnis dessen, was wir gedacht haben.',
    'Besser ein einziges Wort, das Frieden bringt, als tausend leere Worte.',
  ],
  pt: [
    'A paz vem de dentro. Não a procure fora.',
    'A mente é tudo. O que você pensa, você se torna.',
    'A saúde é a maior dádiva, a contentamento a maior riqueza.',
    'Você é o que pensa. Tudo o que você é surge dos seus pensamentos.',
    'A única maneira de encontrar a verdadeira paz é soltar o apego.',
    'O ódio não cessa pelo ódio, mas apenas pelo amor.',
    'Tudo o que somos é resultado do que pensamos.',
    'Melhor uma só palavra que traga paz do que mil palavras vazias.',
  ],
  th: [
    'สันติภาพมาจากภายใน อย่าไปหามันข้างนอก',
    'จิตใจคือทุกสิ่ง สิ่งที่คุณคิด คุณจะเป็นเช่นนั้น',
    'สุขภาพคือของขวัญที่ยิ่งใหญ่ที่สุด ความพึงพอใจคือความมั่งคั่งที่ยิ่งใหญ่ที่สุด',
    'คุณคือสิ่งที่คุณคิด ทุกสิ่งที่คุณเป็นเกิดจากความคิดของคุณ',
    'วิธีเดียวที่จะพบสันติภาพที่แท้จริงคือปล่อยวาง',
    'ความเกลียดชังไม่ยุติด้วยความเกลียดชัง แต่ยุติด้วยความรัก',
    'ทุกสิ่งที่เราเป็นคือผลลัพธ์ของสิ่งที่เราคิด',
    'คำเดียวที่นำสันติภาพยังดีกว่าคำพันคำที่ว่างเปล่า',
  ],
  vi: [
    'Hòa bình đến từ bên trong. Đừng tìm nó bên ngoài.',
    'Tâm là tất cả. Bạn nghĩ gì, bạn sẽ thành nấy.',
    'Sức khỏe là món quà lớn nhất, sự hài lòng là tài sản lớn nhất.',
    'Bạn là những gì bạn nghĩ. Tất cả những gì bạn là đều bắt nguồn từ suy nghĩ.',
    'Cách duy nhất để tìm thấy hòa bình thực sự là buông bỏ.',
    'Oán hận không chấm dứt bởi oán hận, mà chỉ bởi tình yêu.',
    'Tất cả những gì chúng ta là đều là kết quả của những gì chúng ta đã nghĩ.',
    'Một lời mang lại hòa bình còn hơn ngàn lời vô nghĩa.',
  ],
  ko: [
    '평화는 안에서 온다. 밖에서 찾지 마라.',
    '마음이 모든 것이다. 네가 생각하는 것이 네가 된다.',
    '건강이 가장 큰 선물이고, 만족이 가장 큰 부이다.',
    '너는 네가 생각하는 것이다. 네가 무엇이든 모두 생각에서 비롯된다.',
    '진정한 평화를 찾는 유일한 방법은 집착을 놓는 것이다.',
    '증오는 증오로는 사라지지 않는다. 오직 사랑으로만 사라진다.',
    '우리가 모두 무엇이든 그것은 우리가 생각한 결과이다.',
    '천 마디 빈 말보다 평화를 주는 한 마디가 낫다.',
  ],
  id: [
    'Kedamaian datang dari dalam. Jangan mencarinya di luar.',
    'Pikiran adalah segalanya. Apa yang kamu pikirkan, itulah kamu.',
    'Kesehatan adalah hadiah terbesar, kepuasan adalah kekayaan terbesar.',
    'Kamu adalah apa yang kamu pikirkan. Semua yang kamu adalah berasal dari pikiranmu.',
    'Satu-satunya cara menemukan kedamaian sejati adalah melepaskan keterikatan.',
    'Kebencian tidak berakhir dengan kebencian, melainkan dengan cinta.',
    'Semua yang kita adalah hasil dari apa yang telah kita pikirkan.',
    'Lebih baik satu kata yang membawa kedamaian daripada ribuan kata kosong.',
  ],
  ms: [
    'Kedamaian datang dari dalam. Jangan mencarinya di luar.',
    'Fikiran adalah segalanya. Apa yang kamu fikirkan, itulah kamu.',
    'Kesihatan adalah hadiah terbesar, kepuasan adalah kekayaan terbesar.',
    'Kamu adalah apa yang kamu fikirkan. Semua yang kamu adalah berasal dari fikiranmu.',
    'Satu-satunya cara menemukan kedamaian sejati adalah melepaskan keterikatan.',
    'Kebencian tidak berakhir dengan kebencian, melainkan dengan cinta.',
    'Semua yang kita adalah hasil dari apa yang telah kita fikirkan.',
    'Lebih baik satu kata yang membawa kedamaian daripada ribuan kata kosong.',
  ],
  si: [
    'සාමය ඇත්තේ ඇතුළතය. එය පිටත සොයන්න එපා.',
    'සිත සියල්ලයි. ඔබ සිතන දෙය ඔබ වෙනවා.',
    'සෞඛ්‍යය ලොව විශාලතම තෑග්ගයි, සතුට ලොව විශාලතම ධනයයි.',
    'ඔබ ඔබ සිතන දේයි. ඔබ වන සියල්ල ඔබේ සිතුවිලි වලින් පැමිණේ.',
    'සැබෑ සාමය සොයා ගැනීමට ඇති එකම ක්‍රමය බැඳීම් අත් හැරීමයි.',
    'ද්වේශය ද්වේශයෙන් නැවතී නැත, ඒ නැවතේ ආදරයෙන් පමණි.',
    'අපි සියල්ලෝම අපි සිතූ දේවල ප්‍රතිඵලයක්.',
    'සාමය ගෙන එන වචනයක් හොඳයි හිස් වචන දහසකට.',
  ],
  ne: [
    'शान्ति भित्रबाट आउँछ। यसलाई बाहिर न खोज्नुहोस्।',
    'मन सबै कुरा हो। तपाईंले के सोच्नुहुन्छ, त्यही बन्नुहुन्छ।',
    'स्वास्थ्य सबैभन्दा ठूलो उपहार हो, सन्तोष सबैभन्दा ठूलो सम्पत्ति हो।',
    'तपाईं त्यही हुनुहुन्छ जुन तपाईंले सोच्नुहुन्छ। तपाईं जे हुनुहुन्छ त्यो तपाईंका विचारबाट आउँछ।',
    'साँचो शान्ति पाउने एकमात्र तरिका आसक्ति छोड्नु हो।',
    'घृणाले घृणाबाट रोकिँदैन, यो प्रेमले मात्र रोकिन्छ।',
    'हामी जे छौं त्यो हामीले भनेका कुराको परिणाम हो।',
    'हजारौँ खाली शब्दभन्दा शान्ति ल्याउने एउटा शब्द राम्रो हुन्छ।',
  ],
  my: [
    'ငြိမ်သက်ခြင်းသည် အတွင်းမှ လာသည်။ အပြင်ဘက်မရှာပါနဲ့။',
    'စိတ်သည် အရာရာဖြစ်သည်။ သင်ဘာစဉ်းစားသည်ဖြစ်စေ သင်ထိုအတိုင်းဖြစ်လာမည်။',
    'ကျန်းမာရေးသည် အကြီးမားဆုံးလက်ဆောင်ဖြစ်ပြီး ကျေနပ်မှုသည် အကြီးမားဆုံး ဥစ္စာဖြစ်သည်။',
    'သင်သည် သင်စဉ်းစားသည့်အရာဖြစ်သည်။ သင်ဖြစ်သမျှသည် သင့်အတွေးအမြင်မှ ပေါ်လာခြင်းဖြစ်သည်။',
    'တကယ့်ငြိမ်သက်ခြင်းကို ရှာဖွေနည်း တစ်ခုတည်းမှာ စွဲလမ်းမှုကို လွှတ်ပေးရခြင်းဖြစ်သည်။',
    'မုန်းတီးခြင်းသည် မုန်းတီးခြင်းဖြင့် ရပ်တန့်မသွားပါ။ ချစ်ခြင်းဖြင့်သာ ရပ်တန့်သွားပါသည်။',
    'ကျွန်ုပ်တို့ ဘာဖြစ်ဖြစ် ကျွန်ုပ်တို့ စဉ်းစားခဲ့သည့်အရာ၏ ရလဒ်ဖြစ်သည်။',
    'ငြိမ်သက်ခြင်းယူဆောင်လာသော စကားတစ်လုံးသည် ဟာလာဟွန်းစကား ထောင်ပေါင်းများစွာထက် ပိုကောင်းပါသည်။',
  ],
  bo: [
    'ཞི་བ་ནང་ནས་ཡོང་། ཕྱི་རོལ་དུ་འཚོལ་མི་དགོས།',
    'སེམས་ནི་ཡོངས་རྫོགས་རེད། ཁྱེད་ཀྱིས་བསམ་པ་དེ་ཁྱེད་ཀྱིས་འགྱུར།',
    'བདེ་ཐང་ནི་ལེགས་སྐྱེས་ཆེ་ཤོས་རེད། ཡིད་ཚིམ་ནི་ནོར་སྐྱེན་ཆེ་ཤོས་རེད།',
    'ཁྱེད་ཀྱིས་བསམ་པ་དེ་ཁྱེད་རེད། ཁྱེད་ཀྱིས་ཡོད་ཚད་ནི་ཁྱེད་ཀྱིས་བསམ་བློ་ལས་བྱུང་།',
    'ཞི་བ་ངོ་མ་འཚོལ་ཐབས་གཅིག་པུ་ནི་ཞེན་ཆགས་བཏང་བ་རེད།',
    'ཞེ་སྡང་ནི་ཞེ་སྡང་གིས་མཚམས་མི་འཇོག བརྩེ་བ་ཡིས་མ་གཏོགས་མཚམས་མི་འཇོག',
    'ང་ཚོ་ཡོངས་ནི་ང་ཚོའི་བསམ་བློའི་འབྲས་བུ་རེད།',
    'ཞི་བ་སྦྱིན་པའི་ཚིག་གཅིག་ནི་ཚིག་སྟོང་སྟོང་ལས་ལེགས།',
  ],
}

const thesisToday: Record<string, { title: string; text: string }> = {
  en: { title: 'Anattā — Non-Self', text: 'One of the Three Marks of Existence. There is no permanent, unchanging self in anything — neither in humans nor in the world.' },
  ru: { title: 'Анатман — Не-Я', text: 'Одна из трёх фундаментальных характеристик бытия. Ни в человеке, ни во всём мире нет никакой постоянной, вечной и неизменной субстанции.' },
  hi: { title: 'अनात्मा — अ-मैं', text: 'अस्तित्व के तीन चिह्नों में से एक। किसी भी चीज़ में कोई स्थायी, अपरिवर्तनशील आत्मा नहीं है।' },
  zh: { title: '无我 — Anattā', text: '存在的三个特征之一。任何事物中都没有永恒不变的自我——无论是在人身上还是在世界中。' },
  ja: { title: '無我 — Anattā', text: '存在の三つの特徴の一つ。何もものに永遠に変化しない自己はない。' },
  es: { title: 'Anattā — No-Yo', text: 'Una de las Tres Marcas de la Existencia. No hay un yo permanente e inmutable en nada — ni en los humanos ni en el mundo.' },
  fr: { title: 'Anattā — Non-Soi', text: 'L\'une des Trois Marques de l\'Existence. Il n\'y a pas de moi permanent et immuable — ni chez les humains, ni dans le monde.' },
  de: { title: 'Anattā — Nicht-Selbst', text: 'Eines der Drei Merkmale der Existenz. Es gibt kein permanentes, unveränderliches Selbst — weder in Menschen noch in der Welt.' },
  pt: { title: 'Anattā — Não-Eu', text: 'Uma das Três Marcas da Existência. Não há um eu permanente e imutável em nada — nem nos humanos, nem no mundo.' },
  th: { title: 'อนัตตา — ไม่มีตัวตน', text: 'หนึ่งในลักษณะสามของสภาวะ มีตัวตนที่คงที่และไม่เปลี่ยนแปลงในสิ่งใดเลย ไม่ว่าจะในมนุษย์หรือในโลก' },
  vi: { title: 'Vô Ngã — Anattā', text: 'Một trong Ba Pháp Ấn của hữu vi. Không có cái ngã thường hằng bất biến trong bất cứ điều gì — dù là con người hay thế giới.' },
  ko: { title: '무아 — Anattā', text: '존재의 세 특성 중 하나. 어떤 것에도 영원히 변하지 않는 자아는 없다 — 인간이나 세계 모두 마찬가지다.' },
  id: { title: 'Anattā — Tanpa-Diri', text: 'Salah satu dari Tiga Ciri Kehidupan. Tidak ada diri yang permanen dan tidak berubah dalam sesuatu pun — baik dalam manusia maupun dunia.' },
  ms: { title: 'Anattā — Tanpa-Diri', text: 'Salah satu daripada Tiga Ciri Kewujudan. Tiada diri yang kekal dan tidak berubah dalam apa-apa pun — sama ada dalam manusia atau dunia.' },
  si: { title: 'අනාත්ම — නොමැතිකම', text: 'අස්තිත්වයේ ලක්ෂණ තුනෙන් එකකි. කිසිවක ස්ථිර හා නොවෙනස් ආත්මයක් නැත — මිනිසුන් හෝ ලොව තුළ නොවේ.' },
  ne: { title: 'अनात्मा — न-म', text: 'अस्तित्वका तीन चिह्नमध्ये एक। कुनै पनि कुरामा स्थायी, अपरिवर्तनशील आत्मा छैन — न मानिसहरूमा, न संसारमा।' },
  my: { title: 'အနတ္တ — မရှိခြင်း', text: 'ဖြစ်ခြင်း၏လက္ခဏာသုံးမျိုးထဲမှတစ်ခု။ ဘာတစ်ခုမှာမဆို အမြဲတမ်းပြောင်းလဲမည့်ကိုယ်ပိုင်မရှိပါ။' },
  bo: { title: 'ནང་དོན་མེད་པ — Anattā', text: 'འཇིག་རྟེན་གྱི་མཚན་ཉིད་གསུམ་གྱི་གྲས་གཅིག གང་ལ་ཡང་རྟག་ཏུ་འགྱུར་བ་མེད་པའི་རང་ངོས་མེད།' },
}

export default function HeroSilkAtlas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { locale } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationId: number

    const COLUMN_COUNT = Math.min(Math.max(Math.floor(width / 45), 15), 35)
    const FONT_SIZE = Math.min(Math.max(width / 70, 10), 18)
    const BASE_SPEED = 0.4

    interface Column {
      x: number
      y: number
      speed: number
      chars: string[]
      headIndex: number
    }

    const allQuotes = heroQuotes[locale] || heroQuotes.en
    const allChars = allQuotes.flatMap(q => [...q, ' '])

    const shuffled = [...allChars]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const columns: Column[] = []
    for (let i = 0; i < COLUMN_COUNT; i++) {
      const colLength = 12 + Math.floor(Math.random() * 18)
      const chars: string[] = []
      for (let j = 0; j < colLength; j++) {
        chars.push(shuffled[(i + j * 7) % shuffled.length] || ' ')
      }
      columns.push({
        x: (i + 0.5) * (width / COLUMN_COUNT),
        y: -Math.random() * height * 0.8 - 50,
        speed: BASE_SPEED * (0.6 + Math.random() * 0.8),
        chars,
        headIndex: Math.floor(Math.random() * colLength),
      })
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    let lastTime = 0
    const TARGET_FPS = 30
    const FRAME_INTERVAL = 1000 / TARGET_FPS

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw)

      if (timestamp - lastTime < FRAME_INTERVAL) return
      lastTime = timestamp

      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = '#0F0E0A'
      ctx.fillRect(0, 0, width, height)

      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      columns.forEach((col) => {
        col.y += col.speed

        if (col.y > height + 50) {
          col.y = -col.chars.length * FONT_SIZE * 1.2 - 50
          for (let i = col.chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [col.chars[i], col.chars[j]] = [col.chars[j], col.chars[i]]
          }
          col.speed = BASE_SPEED * (0.6 + Math.random() * 0.8)
          col.headIndex = 0
        }

        const yStart = col.y
        for (let i = 0; i < col.chars.length; i++) {
          const char = col.chars[i]
          const yPos = yStart + i * FONT_SIZE * 1.2

          if (yPos < -FONT_SIZE || yPos > height + FONT_SIZE) continue

          const distFromHead = col.headIndex - i
          let opacity: number

          if (i <= col.headIndex && i > col.headIndex - 4) {
            opacity = 0.9
          } else if (distFromHead > 0 && distFromHead < 12) {
            opacity = Math.max(0.08, 0.7 * (1 - distFromHead / 12))
          } else if (distFromHead >= 12) {
            opacity = 0.05 + Math.random() * 0.03
          } else {
            opacity = 0.15
          }

          const hue = 40
          const sat = 60 + 15 * Math.sin(i * 0.3 + timestamp * 0.001)
          const light = 25 + 30 * Math.max(0, 1 - distFromHead / col.chars.length)

          ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`
          ctx.font = `${FONT_SIZE}px 'Inter', monospace`
          ctx.fillText(char, col.x, yPos)
        }

        col.headIndex += 0.12
        if (col.headIndex > col.chars.length + 3) {
          const newChar = shuffled[Math.floor(Math.random() * shuffled.length)] || ' '
          col.chars.push(newChar)
          if (col.chars.length > 22) col.chars.shift()
          col.headIndex = 0
          col.speed = BASE_SPEED * (0.6 + Math.random() * 0.8)
        }
      })
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMounted, locale])

  if (!isMounted) return null

  const thesis = thesisToday[locale] || thesisToday.en

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '90vh' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 158, 11, 0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <div className="mb-8 opacity-80">
          <svg viewBox="0 0 120 160" className="w-20 h-28 md:w-28 md:h-36 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.15))' }}>
            <defs>
              <linearGradient id="stupaGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f5d78e" />
                <stop offset="100%" stopColor="#c9a84c" />
              </linearGradient>
            </defs>
            <rect x="35" y="130" width="50" height="12" rx="3" fill="url(#stupaGold)" opacity="0.7" />
            <rect x="40" y="118" width="40" height="12" rx="3" fill="url(#stupaGold)" opacity="0.7" />
            <ellipse cx="60" cy="100" rx="30" ry="22" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="1" />
            <rect x="53" y="68" width="14" height="32" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="0.8" />
            <circle cx="60" cy="58" r="11" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="1" />
            <circle cx="60" cy="58" r="3.5" fill="#b38b3a" />
            <path d="M47 54 Q60 42 73 54" stroke="#f5d78e" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </div>

        <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-golden-gradient" style={{ textShadow: '0 2px 40px rgba(245, 158, 11, 0.15)' }}>
          {locale === 'ru' ? 'Мудрость Будды' : "Buddha's Wisdom"}
        </h1>

        <p className="text-amber-200/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
          {locale === 'ru'
            ? 'Исследуйте учения Будды через диалог с ИИ'
            : 'Explore the teachings of the Buddha through AI-powered conversations'}
        </p>

        <Link
          href="/chat"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 btn-glow"
          style={{
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fde68a',
            boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          <MessageCircle className="w-5 h-5" />
          {locale === 'ru' ? 'Начать чат' : 'Start Chat'}
        </Link>
      </div>

      <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 flex flex-col md:flex-row justify-between gap-3 pointer-events-none z-20">
        <div className="golden-card rounded-xl p-4 max-w-xs pointer-events-auto">
          <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">
            {locale === 'ru' ? 'Тезис дня' : 'Thesis of the Day'}
          </span>
          <p className="text-amber-100/70 font-[var(--font-cormorant)] text-sm mt-1 leading-relaxed">
            {thesis.title}
          </p>
        </div>
        <div className="golden-card rounded-xl p-4 max-w-xs pointer-events-auto">
          <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">
            {locale === 'ru' ? 'Слова мудрости' : 'Words of Wisdom'}
          </span>
          <p className="text-amber-100/70 font-[var(--font-cormorant)] text-sm mt-1 leading-relaxed italic">
            {(heroQuotes[locale] || heroQuotes.en)[0]}
          </p>
        </div>
      </div>
    </section>
  )
}
