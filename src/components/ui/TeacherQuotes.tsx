'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Quote } from 'lucide-react'

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
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {locale === 'ru' ? 'Слова мудрости' : 'Words of Wisdom'}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-amber-300 dark:text-amber-600 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 italic font-[var(--font-cormorant)] text-base leading-relaxed mb-6">
              &ldquo;{teacher.quote[locale] || teacher.quote.en}&rdquo;
            </p>
            <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-800 pt-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl shrink-0">
                {teacher.emoji}
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {teacher.name[locale] || teacher.name.en}
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
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
