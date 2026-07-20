'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PromoBanner from '@/components/ui/PromoBanner'

const teachings = [
  {
    id: 'four-truths',
    emoji: '☸️',
    title: { en: 'Four Noble Truths', ru: 'Четыре благородные истины' },
    points: {
      en: ['Dukkha — Life involves suffering', 'Samudaya — Suffering has a cause (craving)', 'Nirodha — Suffering can end', 'Magga — The Eightfold Path leads to the end'],
      ru: ['Дуккха — Жизнь включает страдание', 'Самудайя — У страдания есть причина (жажда)', 'Ниродха — Страдание может закончиться', 'Магга — Восьмеричный путь ведёт к концу'],
    },
  },
  {
    id: 'eightfold-path',
    emoji: '🛤️',
    title: { en: 'Noble Eightfold Path', ru: 'Благородный Восьмеричный путь' },
    points: {
      en: ['Right View', 'Right Intention', 'Right Speech', 'Right Action', 'Right Livelihood', 'Right Effort', 'Right Mindfulness', 'Right Concentration'],
      ru: ['Правильный взгляд', 'Правильное намерение', 'Правильная речь', 'Правильное действие', 'Правильный образ жизни', 'Правильное усилие', 'Правильная осознанность', 'Правильная концентрация'],
    },
  },
  {
    id: 'anatman',
    emoji: '🪷',
    title: { en: 'Anattā (Non-Self)', ru: 'Анатман (Не-Я)' },
    points: {
      en: ['No permanent self exists', 'Everything is impermanent', 'Attachment causes suffering', 'Realize non-self to be free'],
      ru: ['Постоянного «я» не существует', 'Всё непостоянно', 'Прикрепление вызывает страдание', 'Осознание не-Я ведёт к свободе'],
    },
  },
  {
    id: 'karma',
    emoji: '🔄',
    title: { en: 'Karma', ru: 'Карма' },
    points: {
      en: ['Actions have consequences', 'Intention matters most', 'Good actions lead to happiness', 'We shape our own future'],
      ru: ['Действия имеют последствия', 'Намерение важнее всего', 'Добрые действия ведут к счастью', 'Мы формируем своё будущее'],
    },
  },
  {
    id: 'nirvana',
    emoji: '✨',
    title: { en: 'Nirvana', ru: 'Нирвана' },
    points: {
      en: ['The cessation of suffering', 'Freedom from the cycle of rebirth', 'Ultimate peace and liberation', 'Attained through the Eightfold Path'],
      ru: ['Прекращение страдания', 'Освобождение из цикла перерождений', 'Высший покой и освобождение', 'Достижимо через Восьмеричный путь'],
    },
  },
  {
    id: 'three-marks',
    emoji: '🔺',
    title: { en: 'Three Marks of Existence', ru: 'Три печати бытия' },
    points: {
      en: ['Anicca — Everything is impermanent', 'Dukkha — Suffering is inherent in existence', 'Anattā — There is no permanent self'],
      ru: ['Аничча — Всё непостоянно', 'Дуккха — Страдание присуще бытию', 'Анатман — Нет постоянного «я»'],
    },
  },
  {
    id: 'dependent-arising',
    emoji: '🔗',
    title: { en: 'Dependent Origination', ru: 'Взаимозависимое возникновение' },
    points: {
      en: ['All phenomena arise in dependence on conditions', 'When conditions cease, phenomena cease', 'Understanding this breaks the chain of suffering', 'The 12 links explain the cycle of existence'],
      ru: ['Все явления возникают в зависимости от условий', 'Когда условия прекращаются, явления прекращаются', 'Понимание этого разрывает цепь страдания', '12 звеньев объясняют цикл бытия'],
    },
  },
  {
    id: 'metta',
    emoji: '💜',
    title: { en: 'Mettā (Loving-Kindness)', ru: 'Метта (Бескорыстная любовь)' },
    points: {
      en: ['Love without attachment or expectation', 'Extend kindness to all beings equally', 'Start with yourself, then expand outward', 'The Metta Sutta is the foundational text'],
      ru: ['Любовь без привязанности и ожиданий', 'Распространяйте доброту на всех существ одинаково', 'Начните с себя, затем расширяйтесь наружу', 'Метта Сутта — основополагающий текст'],
    },
  },
]

export default function TeachingsPageClient() {
  const { t, locale } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.teachings}
      </h1>

      <div className="space-y-6">
        {teachings.map((teaching) => (
          <div key={teaching.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{teaching.emoji}</span>
              <h2 className="font-[var(--font-cormorant)] text-2xl font-bold text-gray-900 dark:text-gray-100">
                {(teaching.title as any)[locale] || teaching.title.en}
              </h2>
            </div>
            <ul className="space-y-2">
              {((teaching.points as any)[locale] || teaching.points.en).map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-amber-500 mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <PromoBanner page="teachings" />
      </div>

      {/* Video Section */}
      <section className="mt-16">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-100 text-center mb-8">
          {locale === 'ru' ? 'Видео' : 'Videos'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Short (vertical) */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              {locale === 'ru' ? 'Шортс' : 'Short'}
            </h3>
            <div className="relative mx-auto" style={{ maxWidth: 320 }}>
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src="https://www.youtube.com/embed/P04rX4-1TNo"
                  title="Dharmachakra — Short"
                  className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Full-screen (16:9) */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              {locale === 'ru' ? 'Полноэкранный' : 'Full Video'}
            </h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/P04rX4-1TNo"
                title="Dharmachakra — Full Video"
                className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Video Description — 18 languages */}
        <VideoDescription />

        {/* Transcript */}
        <TranscriptSection />
      </section>
    </div>
  )
}

const transcriptData = [
  { time: '0:00', ru: 'Прежде чем начать — короткое уточнение.', en: 'Before we begin — a short clarification.', pt: 'Antes de começar — um breve esclarecimento.' },
  { time: '0:04', ru: 'Во-первых, этот канал посвящён философскому подходу к вопросу.', en: 'First. This channel is devoted to a philosophical approach to the question.', pt: 'Primeiro. Este canal é dedicado a uma abordagem filosófica da questão.' },
  { time: '0:08', ru: 'Во-вторых, мы рассматриваем буддийскую традицию как способ понимания реальности, а не как обсуждение различных религиозных взглядов.', en: 'Second. We consider the Buddhist tradition as a path for understanding reality, and only then discuss different religious views.', pt: 'Segundo. Consideramos a tradição budista como um caminho de compreensão da realidade.' },
  { time: '0:12', ru: 'Нас интересует суть идей, их смысл, и главное — путь освобождения.', en: 'Our interest is the essence of ideas, their meaning, and most importantly — the path to liberation.', pt: 'Nos interessam a essência das ideias, o seu significado e, acima de tudo, o caminho da libertação.' },
  { time: '0:16', ru: 'Теперь — по теме.', en: 'Now — to the main topic.', pt: 'Agora — o tema principal.' },
  { time: '0:20', ru: 'Колесо Дхармы, или Дхармачакра — один из самых древних символов буддизма.', en: 'The Wheel of Dharma, or Dharmachakra, is one of the most ancient symbols of Buddhism.', pt: 'A Roda do Dharma, ou Dharmachakra, é um dos símbolos mais antigos do budismo.' },
  { time: '0:24', ru: 'На санскрите «Дхармачакра» означает «колесо учения».', en: "In Sanskrit, 'Dharmachakra' means 'the wheel of teaching'.", pt: "Em sânscrito, Dharmachakra significa 'roda do ensinamento'." },
  { time: '0:28', ru: 'Этот символ связывают с первым наставлением Будды после пробуждения. Оно было дано в Сарнатхе.', en: 'This symbol is connected with the first teaching of the Buddha after awakening. It took place in Sarnath.', pt: 'Este símbolo está ligado ao primeiro ensinamento do Buda após o despertar, em Sarnath.' },
  { time: '0:32', ru: 'Там были изложены Четыре благородные истины и Благородный восьмеричный путь.', en: 'There the Buddha explained the Four Noble Truths and the Noble Eightfold Path.', pt: 'Lá foram expostas as Quatro Nobres Verdades e o Nobre Caminho Óctuplo.' },
  { time: '0:36', ru: 'Это событие называют «первым поворотом Колеса Дхармы».', en: "This event is called 'the first turning of the Wheel of Dharma'.", pt: "Esse evento é chamado de 'primeira rotação da Roda do Dharma'." },
  { time: '0:40', ru: 'Проще говоря, «поворот» означает, что учение было впервые ясно изложено.', en: "In simple terms, the 'turning' means that the teaching was clearly expressed for the first time.", pt: 'Em termos simples, significa que o ensinamento foi expresso claramente pela primeira vez.' },
  { time: '0:44', ru: 'То, что было пережито лично, стало объяснено первым слушателям.', en: 'What was personally realized was explained to the first disciples.', pt: 'O que foi realizado pessoalmente foi explicado aos primeiros discípulos.' },
  { time: '0:48', ru: 'Колесо — не магический знак и не оберег. Это символ пути освобождения. Схема, указывающая на выход из страдания.', en: 'The wheel is not a magical sign or an amulet. It is a symbol of the path to liberation — a scheme pointing to the end of suffering.', pt: 'A roda não é um símbolo mágico nem um amuleto. É um símbolo do caminho da libertação.' },
  { time: '0:56', ru: 'У колеса три части.', en: 'The wheel has three parts.', pt: 'A roda tem três partes.' },
  { time: '1:00', ru: 'Центр — ступица. Она символизирует устойчивость ума. Без внутренней устойчивости путь невозможен.', en: 'The center — the hub — symbolizes stability of the mind and inner support. Without inner stability the path is impossible.', pt: 'O centro simboliza estabilidade da mente. Sem estabilidade interior o caminho é impossível.' },
  { time: '1:08', ru: 'Восемь спиц — это Благородный восьмеричный путь: правильное понимание, правильное намерение, правильная речь, правильное действие, правильный образ жизни, правильное усилие, правильная осознанность, правильное сосредоточение.', en: 'The eight spokes represent the Noble Eightfold Path: right understanding, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.', pt: 'As oito hastes representam o Nobre Caminho Óctuplo. Compreensão correta. Intenção correta. Fala correta. Ação correta. Modo de vida correto. Esforço correto. Atenção plena correta. Concentração correta.' },
  { time: '1:20', ru: 'Это не заповеди. Это система развития.', en: 'These are not commandments. They are a system of development.', pt: 'Não são mandamentos, mas um sistema de desenvolvimento.' },
  { time: '1:24', ru: 'Обод соединяет всё вместе. Он символизирует целостность и дисциплину практики.', en: 'The rim unites everything. It symbolizes integrity and discipline of practice.', pt: 'O aro une tudo e simboliza integridade da prática.' },
  { time: '1:28', ru: 'Важно различать. Колесо Дхармы — не «колесо жизни». И в нём нет образа страдания.', en: "The Wheel of Dharma is not the 'wheel of life' and does not represent suffering.", pt: 'A Roda do Dharma não é a roda da vida.' },
  { time: '1:36', ru: 'В буддийской традиции есть другой символ, изображающий сансару — круговорот существования.', en: 'In Buddhist tradition there is another symbol showing samsara — the cycle of existence.', pt: 'No budismo existe outro símbolo que representa o samsara.' },
  { time: '1:40', ru: 'Дхармачакра указывает не на замкнутый круг, а на выход из него.', en: 'The Dharmachakra points not to a closed circle but to a way out of it.', pt: 'A Dharmachakra aponta para a saída do ciclo.' },
  { time: '1:44', ru: 'Когда человек понимает причину страдания и видит путь его прекращения — Колесо начинает вращаться внутри него самого.', en: 'When a person understands the cause of suffering and sees the path to its end — the wheel begins to turn within them.', pt: 'Quando alguém compreende a causa do sofrimento e vê o caminho para o seu fim — a roda começa a girar dentro dele.' },
  { time: '1:48', ru: 'Колесо Дхармы — это не символ веры. Это модель понимания и путь освобождения.', en: 'The Wheel of Dharma is not only a symbol of faith. It is a model of understanding and a path of liberation.', pt: 'A Roda do Dharma não é apenas símbolo de fé. É um modelo de compreensão e caminho de libertação.' },
  { time: '1:56', ru: 'Поэтому этот образ остаётся центральным в буддийской традиции до сих пор.', en: 'That is why this symbol remains central in Buddhist tradition even today.', pt: 'Por isso continua sendo um símbolo central no budismo.' },
]

const transcriptLangs = [
  { code: 'ru', label: '🇷🇺 Русский' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'pt', label: '🇵🇹 Português' },
] as const

const videoDescriptions: Record<string, { title: string; desc: string; points: string[] }> = {
  ru: {
    title: 'Колесо Дхармы (Дхармачакра)',
    desc: 'Один из древнейших символов буддизма, связанный с первым наставлением Будды после пробуждения в Сарнатхе. Дхармачакра символизирует путь освобождения из страдания через Четыре благородные истины и Благородный восьмеричный путь.',
    points: ['Колесо Дхармы — один из древнейших символов буддизма', 'Связан с первым наставлением Будды в Сарнатхе', 'Центр (ступица) — устойчивость ума', 'Восемь спиц — Восьмеричный путь', 'Обод — целостность практики', 'Дхармачакра — не «колесо жизни», а указание на выход из страдания'],
  },
  en: {
    title: 'Dharmachakra — The Wheel of Dharma',
    desc: 'One of the most ancient symbols of Buddhism, connected with the Buddha\'s first teaching after awakening in Sarnath. The Dharmachakra symbolizes the path to liberation from suffering through the Four Noble Truths and the Noble Eightfold Path.',
    points: ['One of the oldest symbols of Buddhism', 'Connected to the Buddha\'s first teaching in Sarnath', 'Hub — stability of the mind', 'Eight spokes — the Eightfold Path', 'Rim — integrity of practice', 'Points to the way out of suffering, not the cycle of existence'],
  },
  es: {
    title: 'Dharmachakra — La Rueda del Dharma',
    desc: 'Uno de los símbolos más antiguos del budismo, relacionado con el primer enseñanza del Buda tras su despertar en Sarnath. La Dharmachakra simboliza el camino hacia la liberación del sufrimiento a través de las Cuatro Nobles Verdades y el Noble Óctuple Camino.',
    points: ['Uno de los símbolos más antiguos del budismo', 'Vinculado a la primera enseñanza del Buda en Sarnath', 'Centro — estabilidad de la mente', 'Ocho radios — el Óctuple Camino', 'Borde — integridad de la práctica', 'Señala la salida del sufrimiento, no el ciclo de existencia'],
  },
  pt: {
    title: 'Dharmachakra — A Roda do Dharma',
    desc: 'Um dos símbolos mais antigos do budismo, ligado ao primeiro ensinamento do Buda após o despertar em Sarnath. A Dharmachakra simboliza o caminho para a libertação do sofrimento através das Quatro Nobres Verdades e do Nobre Caminho Óctuplo.',
    points: ['Um dos símbolos mais antigos do budismo', 'Ligado ao primeiro ensinamento do Buda em Sarnath', 'Centro — estabilidade da mente', 'Oito raios — o Nobre Caminho Óctuplo', 'Aro — integridade da prática', 'Aponta para a saída do sofrimento, não para o ciclo de existência'],
  },
  fr: {
    title: 'Dharmachakra — La Roue du Dharma',
    desc: 'L\'un des symboles les plus anciens du bouddhisme, lié au premier enseignement du Bouddha après son éveil à Sarnath. La Dharmachakra symbolise le chemin vers la libération de la souffrance à travers les Quatre Nobles Vérités et le Noble Octuple Sentier.',
    points: ['L\'un des symboles les plus anciens du bouddhisme', 'Lié au premier enseignement du Bouddha à Sarnath', 'Moyeu — stabilité de l\'esprit', 'Huit rayons — le Noble Octuple Sentier', 'Jante — intégrité de la pratique', 'Indique la sortie de la souffrance, pas le cycle de l\'existence'],
  },
  de: {
    title: 'Dharmachakra — Das Rad des Dharma',
    desc: 'Eines der ältesten Symbole des Buddhismus, verbunden mit der ersten Lehre des Buddha nach seiner Erleuchtung in Sarnath. Das Dharmachakra symbolisiert den Weg zur Befreiung vom Leiden durch die Vier Edlen Wahrheiten und den Edlen Achtfachen Pfad.',
    points: ['Eines der ältesten Symbole des Buddhismus', 'Verbunden mit der ersten Lehre des Buddha in Sarnath', 'Nabe — Stabilität des Geistes', 'Acht Speichen — der Achtfache Pfad', 'Felgen — Integrität der Praxis', 'Zeigt den Weg aus dem Leiden, nicht den Kreislauf des Daseins'],
  },
  hi: {
    title: 'धर्मचक्र — धर्म का चक्र',
    desc: 'बौद्ध धर्म के सबसे प्राचीन प्रतीकों में से एक, जो सारनाथ में बुद्ध के जागरण के बाद पहले उपदेश से जुड़ा है। धर्मचक्र चार आर्य सत्य और आर्य अष्टांग मार्ग के माध्यम से दुःख से मुक्ति के मार्ग का प्रतीक है।',
    points: ['बौद्ध धर्म के सबसे प्राचीन प्रतीकों में से एक', 'सारनाथ में बुद्ध के पहले उपदेश से जुड़ा', 'केंद्र — मन की स्थिरता', 'आठ तीलियाँ — अष्टांग मार्ग', 'परिधि — साधना की संपूर्णता', 'दुःख से बाहर निकलने का मार्ग दर्शाता है'],
  },
  zh: {
    title: '法轮 — 达摩法轮',
    desc: '佛教最古老的象征之一，与佛陀在萨尔纳特觉醒后的首次教导有关。法轮象征着通过四圣谛和八正道从苦难中解脱的道路。',
    points: ['佛教最古老的象征之一', '与佛陀在萨尔纳特的首次教导有关', '中心 — 心的稳定', '八根辐条 — 八正道', '轮圈 — 修行的整体性', '指向从苦难中解脱，而非生死轮回'],
  },
  ja: {
    title: 'ダルマチャクラ — 法の輪',
    desc: '仏教で最も古い象徴の一つ。サールナートでの悟り後の最初の説法に関連しています。ダルマチャクラは、四つの聖なる真理と noble 八正道を通じて苦しみから解放される道を象徴します。',
    points: ['仏教で最も古い象徴の一つ', 'サールナートでの最初の説法に関連', '中心 — 心の安定', '八本の輻 — noble 八正道', '輪 — 修行の完全性', '苦しみからの脱出を指し、生死の輪廻ではない'],
  },
  ko: {
    title: '다르마차크라 — 법륜',
    desc: '붓다가 사르나트에서 깨달음 후 처음으로 전한 가르침과 연결된 불교의 가장 오래된 상징 중 하나입니다. 사성제와 팔정도를 통해 고통에서 벗어나는 길을 상징합니다.',
    points: ['불교의 가장 오래된 상징 중 하나', '사르나트에서의 첫 번째 가르침과 연결', '중심 — 마음의 안정', '여덟 개의 살 — 팔정도', '테두리 — 수행의 완전성', '고통에서의 탈출을 가리키며 윤회가 아님'],
  },
  th: {
    title: 'ธัมมจักร — ธรรมจักร',
    desc: 'สัญลักษณ์ที่เก่าแก่ที่สุดของพระพุทธศาสนา เกี่ยวข้องกับคำสอนแรกของพระพุทธเจ้าหลังการรู้แจ้งที่สารнат ธัมมจักรเป็นสัญลักษณ์ของเส้นทางสู่การหลุดพ้นจากทุกข์ผ่านจตุราริยสัจจ์และมรรคแปด',
    points: ['สัญลักษณ์ที่เก่าแก่ที่สุดของพุทธศาสนา', 'เกี่ยวข้องกับคำสอนแรกที่สารнат', 'ศูนย์กลาง — ความมั่นคงของจิต', 'ซี่แปด — มรรคแปด', 'ขอบวง — ความสมบูรณ์ของการปฏิบัติ', 'ชี้ทางออกจากทุกข์ ไม่ใช่วัฏจักร'],
  },
  vi: {
    title: 'Pháp Luân — Dharmachakra',
    desc: 'Một trong những biểu tượng cổ xưa nhất của Phật giáo, gắn liền với bài giảng đầu tiên của Đức Phật sau khi giác ngộ tại Sarnath. Pháp Luân tượng trưng cho con đường giải thoát khỏi khổ đau qua Tứ Diệu Đế và Bát Chánh Đạo.',
    points: ['Một trong những biểu tượng cổ xưa nhất của Phật giáo', 'Gắn liền với bài giảng đầu tiên tại Sarnath', 'Trung tâm — sự ổn định của tâm', 'Tám nan hoa — Bát Chánh Đạo', 'Vành — tính toàn diện của thực hành', 'Chỉ ra con đường thoát khỏi khổ đau, không phải luân hồi'],
  },
  id: {
    title: 'Dharmachakra — Roda Dharma',
    desc: 'Salah satu simbol tertua Buddha, terkait dengan ajaran pertama Buddha setelah pencerahan di Sarnath. Dharmachakra melambangkan jalan menuju kebebasan dari penderitaan melalui Empat Kebenaran Mulia dan Jalan Mulia Berlapan.',
    points: ['Salah satu simbol tertama Buddha', 'Terkait ajaran pertama di Sarnath', 'Pusat — stabilitas pikiran', 'Delapan ruas — Jalan Berlapan', 'Bingkai — integritas praktik', 'Menunjukkan jalan keluar dari penderitaan, bukan siklus keberadaan'],
  },
  ms: {
    title: 'Dharmachakra — Roda Dharma',
    desc: 'Salah satu simbol tertua Buddha, berkaitan dengan ajaran pertama Buddha selepas pencerahan di Sarnath. Dharmachakra melambangkan jalan menuju kebebasan daripada penderitaan melalui Empat Kebenaran Mulia dan Lapan Jalan Mulia.',
    points: ['Salah satu simbol tertua Buddha', 'Berkaitan ajaran pertama di Sarnath', 'Pusat — kestabilan minda', 'Lapan ruas — Lapan Jalan Mulia', 'Bingkai — integriti amalan', 'Menunjukkan jalan keluar dari penderitaan, bukan siklus kewujudan'],
  },
  si: {
    title: 'ධර්මචක්‍ර — ධර්ම චක්‍රය',
    desc: 'බුද්ධාගමේ පැරණිතම සංකේතවලින් එකක් වන ධර්මචක්‍රය, සාරනාත්හි බුදුන් වහන්සේගේ ප්‍රථම දේශනාව සමඟ සම්බන්ධ වේ. චතුරාර්ය සත්‍ය සහ ආර්ය අෂ්ටාංගික මාර්ගය හරහා දුකින් මිදීමේ මාර්ගය නියෝජනය කරයි.',
    points: ['බුද්ධාගමේ පැරණිතම සංකේතවලින් එකක්', 'සාරනාත්හි ප්‍රථම දේශනාව සමඟ සම්බන්ධ', 'මධ්‍යය — සිතේ ස්ථාවරත්වය', 'අට කූරු — අෂ්ටාංගික මාර්ගය', 'වළල — ප්‍රායෝගිකත්වයේ සම්පූර්ණතාවය', 'දුකින් මිදීමේ මාර්ගය පෙන්වයි'],
  },
  my: {
    title: 'ဓမ္မစကြာ — ဓမ္မစကြာ',
    desc: 'ဗုဒ္ဓဘာသာ၏ အရှေးအကျဆုံး သင်္ကတများထဲမှ တစ်ခုဖြစ်သည်။ ဗုဒ္ဓ၏ စတင်တွန်းအားပေးခြင်း ပြီးနောက် ပထမဆုံး သွန်သင်ချက်နှင့် ဆက်စပ်သည်။ စတုတ္ထအရာတရားနှင့် အဋ္ဌငါးလမ်းဖြင့် ဒုက္ခမှ လွတ်မြောက်ရေးလမ်းကြောင်းကို ကိုယ်စားပြုသည်။',
    points: ['ဗုဒ္ဓဘာသာ၏ အရှေးအကျဆုံး သင်္ကတများထဲမှ တစ်ခု', 'စာနတ်တွင် ပထမဆုံး သွန်သင်ချက်နှင့် ဆက်စပ်', 'ဗဟို — စိတ်၏ တည်ငြိမ်မှု', 'အင်တုံ — အဋ္ဌငါးလမ်း', 'ဘေးပတ်လည် — အားထုတ်မှု၏ စုံလင်မှု', 'ဒုက္ခမှ ထွက်ပေါက်ကို ညွှန်ပြသည်'],
  },
  ne: {
    title: 'धर्मचक्र — धर्मको चक्र',
    desc: 'बौद्ध धर्मको सबैभन्दा पुरानो प्रतीकहरूमध्ये एक, सारनाथमा बुद्धको जागरणपछिको पहिलो उपदेशसँग जोडिएको। धर्मचक्रले चार आर्य सत्य र आर्य अष्टांग मार्ग मार्फत दुःखबाट मुक्तिको बाटो प्रतीक गर्दछ।',
    points: ['बौद्ध धर्मको सबैभन्दा पुरानो प्रतीकहरूमध्ये एक', 'सारनाथमा पहिलो उपदेशसँग जोडिएको', 'केन्द्र — मनको स्थिरता', 'आठ तील — अष्टांग मार्ग', 'बाहिरी घेरा — साधनाको सम्पूर्णता', 'दुःखबाट बाहिर निकल्ने बाटो देखाउँछ'],
  },
  bo: {
    title: 'ཆོས་ཀྱི་འཁོར་ལོ།',
    desc: 'སངས་རྒྱས་ཆོས་ཀྱི་མཛེས་རྒྱན་གྱི་གནའ་རྙིང་ཤོས་ཀ�ི་གྲུབ་མཚན་ཡིན། ས་རྣཊླའི་བཅོམ་ལྡན་འདས་ཀྱི་རྫོགས་ཆེན་བྱུང་བའི་རྗེས་ཀ�ི་སྟོན་པ་དང་འབྲེལ་བ་ཡོད།',
    points: ['སངས་རྒྱས་ཆོས་ཀྱི་གནའ་རྙིང་ཤོས་ཀྱི་གྲུབ་མཚན།', 'ས་རྣཊླའི་སྟོན་པ་དང་འབྲེལ་བ།', 'དཀྱིལ་འཁོར — ཡིད་ཀྱི་གནས་སྐབས།', 'མདའ་བརྒྱད — མཐའ་རྒྱས་ཀྱི་ལམ།', 'སྦུག — སྒོམ་གནད་ཀྱི་ཚངས་ཉམས།', 'སྡུག་བསྔལ་ནས་ཐར་པའི་ལམ་སྟོན།'],
  },
}

function VideoDescription() {
  const { locale } = useLanguage()
  const desc = videoDescriptions[locale] || videoDescriptions.en
  const langs = Object.keys(videoDescriptions)

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {desc.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{desc.desc}</p>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
        {desc.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">•</span>
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        {langs.length} languages available — switch language ↗
      </p>
    </div>
  )
}
  const [tab, setTab] = useState<'ru' | 'en' | 'pt'>('ru')

  return (
    <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/30 p-6">
      <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">
        Video Transcript
      </h3>

      <div className="flex gap-2 mb-5 flex-wrap">
        {transcriptLangs.map((l) => (
          <button
            key={l.code}
            onClick={() => setTab(l.code)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              tab === l.code
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {transcriptData.map((row, i) => (
          <p key={i}>
            <strong className="text-amber-700 dark:text-amber-300">{row.time}</strong>{' '}
            {row[tab]}
          </p>
        ))}
      </div>
    </div>
  )
}
