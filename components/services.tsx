import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Scissors, Ear } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Bariatric Surgery",
      description:
        "Comprehensive weight loss surgery programs that transform lives with dignity and compassion. Our experienced bariatric surgeons provide personalized care throughout your journey to better health.",
      specialties: [
        "Gastric Bypass",
        "Sleeve Gastrectomy",
        "Gastric Band",
        "Revision Surgery",
        "Pre & Post-operative Care",
      ],
      image: "/images/surgeon-procedure.jpeg",
    },
    {
      icon: Scissors,
      title: "Plastic Surgery",
      description:
        "Advanced cosmetic and reconstructive procedures that restore confidence and enhance well-being. Our board-certified plastic surgeons combine surgical excellence with compassionate, individualized care.",
      specialties: [
        "Reconstructive Surgery",
        "Cosmetic Procedures",
        "Post-Bariatric Body Contouring",
        "Breast Surgery",
        "Facial Surgery",
      ],
      image: "/images/hospital-corridor.jpeg",
    },
    {
      icon: Ear,
      title: "ENT Surgery",
      description:
        "Specialized ear, nose, and throat procedures that improve quality of life with dignity and respect. Our ENT surgeons provide expert care in a supportive, patient-centered environment.",
      specialties: [
        "Rhinoplasty",
        "Septoplasty",
        "Sinus Surgery",
        "Tonsillectomy",
        "Thyroid Surgery",
        "Head & Neck Surgery",
      ],
      image: "/images/reception-area.jpeg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Specialized Surgical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Vaal Hospital, we specialize in bariatric, plastic, and ENT surgery, providing each patient with a
            transformative, dignified, and human experience through expert care and compassionate support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-vaal-gray rounded-lg">
                    <service.icon className="h-6 w-6 text-vaal-navy" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Our specialized focus allows us to provide exceptional expertise and outcomes while ensuring every patient
            receives compassionate, individualized care that honors their dignity and humanity.
          </p>
        </div>
      </div>
    </section>
  )
}
