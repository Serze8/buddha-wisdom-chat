'use client'

import { useLanguage } from '@/contexts/LanguageContext'

interface Teacher {
  id: string
  name: Record<string, string>
  tradition: Record<string, string>
  quote: Record<string, string>
  emoji: string
}

const teachers: Teacher[] = [
  {
    id: 'tnh',
    name: { ru: 'Тхить Нят Хань', en: 'Thich Nhat Hanh', hi: 'थिच न्हाट हान', es: 'Thich Nhat Hanh', fr: 'Thich Nhat Hanh', de: 'Thich Nhat Hanh', zh: '一行禅师', ja: 'ティック・ナット・ハン' },
    tradition: { ru: 'Традиция Линь Цзи (Вьетнам)', en: 'Linh Thi Tradition (Vietnam)', hi: 'लिन थि परंपरा (वियतनाम)', es: 'Tradición Linh Thi (Vietnam)', fr: 'Tradition Linh Thi (Vietnam)', de: 'Linh Thi Tradition (Vietnam)', zh: '临济宗（越南）', ja: 'リンチ正宗（ベトナム）' },
    quote: { ru: 'Глубоко взгляни в то, что перед тобой, и увидишь, что оно передаёт тебе лучи мудрости и сострадания.', en: 'Look deeply into what is before you, and you will see it is transmitting rays of wisdom and compassion.', hi: 'जो तुम्हारे सामने है उसमें गहराई से देखो, और तुम देखोगे कि वह ज्ञान और करुणा की किरणें भेज रहा है।', es: 'Mira profundamente lo que tienes delante y verás que irradia rayos de sabiduría y compasión.', fr: 'Regarde profondément ce qui est devant toi, et tu verras qu\'il émet des rayons de sagesse et de compassion.', de: 'Blicke tief in das, was vor dir liegt, und du wirst sehen, dass es Strahlen von Weisheit und Mitgefühl aussendet.', zh: '深深地观照你面前的事物，你会发现它正在传递智慧与慈悲的光芒。', ja: '目の前にあるものに深く目を向ければ、智慧と慈悲の光が放たれていることが見えるでしょう。' },
    emoji: '🪷',
  },
  {
    id: 'dalai',
    name: { ru: 'Далай-лама', en: 'Dalai Lama', hi: 'दलाई लामा', es: 'Dalai Lama', fr: 'Dalaï Lama', de: 'Dalai Lama', zh: '达赖喇嘛', ja: 'ダライ・ラマ' },
    tradition: { ru: 'Тибетский буддизм', en: 'Tibetan Buddhism', hi: 'तिब्बती बौद्ध धर्म', es: 'Budismo tibetano', fr: 'Bouddhisme tibétain', de: 'Tibetischer Buddhismus', zh: '藏传佛教', ja: 'チベット仏教' },
    quote: { ru: 'Если ты хочешь, чтобы другие были счастливы, практикуй сострадание. Если ты хочешь быть счастливым, практикуй сострадание.', en: 'If you want others to be happy, practice compassion. If you want to be happy, practice compassion.', hi: 'यदि आप चाहते हैं कि दूसरे सुखी हों, तो करुणा का अभ्यास करें। यदि आप सुखी होना चाहते हैं, तो करुणा का अभ्यास करें।', es: 'Si quieres que otros sean felices, practica la compasión. Si quieres ser feliz, practica la compasión.', fr: 'Si tu veux que les autres soient heureux, pratique la compassion. Si tu veux être heureux, pratique la compassion.', de: 'Wenn du willst, dass andere glücklich sind, übe Mitgefühl. Wenn du glücklich sein willst, übe Mitgefühl.', zh: '如果你想让他人快乐，修习慈悲。如果你想让自己快乐，修习慈悲。', ja: '他人を幸せにしたいなら、慈悲を実践しなさい。自分が幸せになりたいなら、慈悲を実践しなさい。' },
    emoji: '🙏',
  },
  {
    id: 'ajahn',
    name: { ru: 'Аджан Ча', en: 'Ajahn Chah', hi: 'अजान चाह', es: 'Ajahn Chah', fr: 'Ajahn Chah', de: 'Ajahn Chah', zh: '阿姜查', ja: 'アージャン・チャー' },
    tradition: { ru: 'Традиция Тхеравада (Таиланд)', en: 'Theravada Tradition (Thailand)', hi: 'थेरवाद परंपरा (थाईलैंड)', es: 'Tradición Theravada (Tailandia)', fr: 'Tradition Théravada (Thaïlande)', de: 'Theravada Tradition (Thailand)', zh: '上座部佛教（泰国）', ja: 'テーラワーダ正宗（タイ）' },
    quote: { ru: 'Мудрость — это видеть вещи такими, какие они есть, а сострадание — это действовать с пониманием того, что все существа страдают.', en: 'Wisdom is seeing things as they are, and compassion is acting with the understanding that all beings suffer.', hi: 'ज्ञान वस्तुओं को वैसा ही देखना है जैसी वे हैं, और करुणा इस समझ के साथ कार्य करना है कि सभी प्राणी दुखी हैं।', es: 'La sabiduría es ver las cosas como son, y la compasión es actuar con el entendimiento de que todos los seres sufren.', fr: 'La sagesse, c\'est voir les choses telles qu\'elles sont, et la compassion, c\'est agir en comprenant que tous les êtres souffrent.', de: 'Weisheit ist, die Dinge so zu sehen, wie sie sind, und Mitgefühl ist, mit dem Verständnis zu handeln, dass alle Wesen leiden.', zh: '智慧是如实地看见事物，慈悲是带着对一切众生皆苦的理解去行动。', ja: '智慧とは事物をありのままに見ることであり、慈悲とはすべての衆生が苦しむことを理解して行動することです。' },
    emoji: '🌿',
  },
]

export default function TeacherQuotes() {
  const { locale } = useLanguage()

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="golden-divider mb-8" />
        <h2 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient">
          {locale === 'ru' ? 'Слова мудрости' : 'Words of Wisdom'}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="group golden-card rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
              <span className="text-xl">{teacher.emoji}</span>
            </div>

            <p className="font-[var(--font-cormorant)] text-lg leading-relaxed mb-6 italic" style={{ color: 'rgba(253, 230, 138, 0.6)' }}>
              &ldquo;{teacher.quote[locale] || teacher.quote.en}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(245, 158, 11, 0.1)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                {teacher.emoji}
              </div>
              <div>
                <p className="font-medium text-amber-100/80 text-sm">
                  {teacher.name[locale] || teacher.name.en}
                </p>
                <p className="text-xs text-amber-500/50">
                  {teacher.tradition[locale] || teacher.tradition.en}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
