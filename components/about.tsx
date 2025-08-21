import { Users, Award, BookOpen, Globe } from "lucide-react"

export function About() {
  const stats = [
    {
      icon: Users,
      number: "Expert",
      label: "Surgical Specialists",
      description: "Board-certified bariatric, plastic, and ENT surgeons",
    },
    {
      icon: Award,
      number: "New",
      label: "Modern Facility",
      description: "Latest surgical technology and equipment",
    },
    {
      icon: BookOpen,
      number: "Professional",
      label: "Hospital Staff",
      description: "Ongoing training to expand skills",
    },
    {
      icon: Globe,
      number: "Quality",
      label: "Patient Care",
      description: "Specialized focus on three surgical specialties",
    },
  ]

  return (
    <section id="about" className="py-20 bg-vaal-gray">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Specialized Surgical Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vaal Hospital is a newly established, state-of-the-art medical facility specializing in bariatric,
                plastic, and ENT surgery. Our focused approach allows us to provide exceptional expertise, advanced
                techniques, and superior patient outcomes in these specialized surgical areas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By concentrating on these three surgical specialties, we ensure that our medical team, equipment, and
                facilities are optimized to deliver the highest standard of care. Our surgeons are specifically trained
                and experienced in the latest techniques across all three specialties.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="p-3 bg-white rounded-lg w-fit mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-vaal-gold" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/vaal-team.jpeg"
                alt="Vaal Hospital Medical Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Specialized</div>
              <div className="text-lg font-semibold text-gray-900">Surgical Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
