import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Живые гонки и события",
    description: "Следи за актуальными соревнованиями, анонсами и результатами мотокросс-чемпионатов в реальном времени.",
    icon: "zap",
    badge: "Живое",
  },
  {
    title: "Клубы и команды",
    description: "Находи единомышленников, вступай в команды и организуй совместные выезды на трассы по всей стране.",
    icon: "link",
    badge: "Сообщество",
  },
  {
    title: "Карта трасс",
    description: "Интерактивная база трасс, треков и мест для катания — с отзывами, уровнями сложности и фото.",
    icon: "globe",
    badge: "Навигация",
  },
  {
    title: "Советы и техника",
    description: "Гайды по технике езды, настройке мотоцикла и подготовке к соревнованиям от опытных гонщиков.",
    icon: "brain",
    badge: "Обучение",
  },
  {
    title: "Безопасность на трассе",
    description: "Советы по защитной экипировке, правилам безопасного катания и оказанию первой помощи.",
    icon: "lock",
    badge: "Безопасность",
  },
  {
    title: "Цели и достижения",
    description: "Отслеживай личный прогресс, ставь цели и получай признание от сообщества за свои результаты.",
    icon: "target",
    badge: "Прогресс",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для мотокросс-энтузиастов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Объединяем гонщиков, любителей и профи — на одной платформе для тех, кто живёт мото
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}