import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Facilities() {
  const facilities = [
    {
      title: "Operating Rooms",
      description: "State-of-the-art operating rooms equipped with the latest surgical technology and advanced tools",
      image: "/images/surgeon-procedure.jpeg",
      features: [
        "Laparoscopic Equipment",
        "HD Imaging",
        "Advanced Monitoring",
        "Sterile Environment",
        "Advanced Tools",
      ],
    },
    {
      title: "Patient Corridors",
      description: "Modern, clean patient corridors with numbered rooms and professional healthcare environment",
      image: "/images/hospital-corridor.jpeg",
      features: ["Private Rooms", "24/7 Monitoring", "Climate Control", "Emergency Systems"],
    },
    {
      title: "Reception & Lobby",
      description: "Professional reception area with modern amenities and comfortable patient experience",
      image: "/images/reception-area.jpeg",
      features: ["Professional Staff", "Modern Design", "Patient Information", "Comfortable Seating"],
    },
    {
      title: "Medical Team Areas",
      description:
        "Dedicated spaces for our professional medical team to collaborate and provide excellent patient care",
      image: "/images/vaal-team.jpeg",
      features: ["Team Collaboration", "Professional Staff", "Quality Care", "Specialized Training"],
    },
    {
      title: "Hospital Exterior",
      description: "Modern medical facility with contemporary architecture and professional healthcare environment",
      image: "/images/hospital-exterior.jpeg",
      features: ["Modern Architecture", "Professional Environment", "Accessible Design", "Quality Construction"],
    },
    {
      title: "Patient Suites",
      description:
        "Individual patient suites designed for comfort and privacy, each equipped with private bathroom, smart TV, and space for one companion",
      image: "/images/surgeon-procedure.jpeg",
      features: [
        "Private Bathroom",
        "Smart TV",
        "Companion Space",
        "Individual Suite",
        "Modern Amenities",
        "Patient Comfort",
      ],
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hospital features cutting-edge medical facilities designed to provide the highest standard of care for
            our patients and support for our medical professionals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
