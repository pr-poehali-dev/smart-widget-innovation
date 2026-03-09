import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как вступить в сообщество MotoX Club?",
      answer:
        "Всё просто — зарегистрируйся на сайте, заполни профиль и укажи свой уровень катания. После этого ты сразу получишь доступ ко всем разделам: трассам, событиям и чату сообщества.",
    },
    {
      question: "Нужен ли опыт для участия?",
      answer:
        "Нет! У нас рады как абсолютным новичкам, так и опытным гонщикам. Для начинающих есть специальный раздел с базовыми гайдами и ментором, который поможет сделать первые шаги.",
    },
    {
      question: "Как найти трассу рядом с собой?",
      answer:
        "В разделе «Карта трасс» можно найти все известные треки и места для катания с фильтрами по городу, уровню сложности и типу покрытия. Каждая трасса имеет отзывы участников.",
    },
    {
      question: "Можно ли организовать собственное событие?",
      answer:
        "Да! Любой участник сообщества может создать анонс выезда, тренировки или соревнования. Укажи дату, место и требования — и приглашай других.",
    },
    {
      question: "Как сообщество помогает новичкам с выбором мотоцикла?",
      answer:
        "В клубе есть раздел с подборками и советами по выбору первого байка. Также можно задать вопрос напрямую опытным участникам — они всегда помогут с рекомендацией под твой бюджет и цели.",
    },
    {
      question: "Проводятся ли оффлайн-встречи и мероприятия?",
      answer:
        "Да, регулярно! Совместные выезды, тренировочные дни, любительские соревнования и сезонные фестивали — всё это анонсируется в разделе событий. Присоединяйся!",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о сообществе, участии и мероприятиях MotoX Club.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}