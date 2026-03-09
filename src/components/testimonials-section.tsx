import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Гонщик-любитель, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Через MotoX Club нашёл трассу в 20 минутах от дома и команду для совместных выездов. Теперь катаемся каждые выходные!",
  },
  {
    name: "Марина Соколова",
    role: "Мотокросс-энтузиаст, Санкт-Петербург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Здесь реально помогают новичкам. Подсказали с выбором мотоцикла, экипировкой и первой трассой. Сообщество огонь!",
  },
  {
    name: "Дмитрий Захаров",
    role: "Профессиональный гонщик, Екатеринбург",
    avatar: "/placeholder-user.jpg",
    content:
      "Отличная площадка для продвижения себя. Нашёл спонсора через сообщество и теперь выступаю в региональном чемпионате.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят участники</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории гонщиков и энтузиастов из нашего сообщества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}