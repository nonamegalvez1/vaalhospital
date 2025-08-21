import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Building } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-vaal-gray to-white py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Excellence in{" "}
                <span className="text-vaal-navy">Specialized Surgery</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Vaal Hospital provides world-class bariatric and plastic surgery services 
                with state-of-the-art facilities and expert medical professionals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-vaal-navy hover:bg-vaal-navy/90">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Professional Resources
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <Award className="h-8 w-8 text-vaal-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">New</div>
                <div className="text-sm text-gray-600">State-of-the-Art Facility</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-vaal-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Expert</div>
                <div className="text-sm text-gray-600">Medical Team</div>
              </div>
              <div className="text-center">
                <Building className="h-8 w-8 text-vaal-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Care Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hospital-exterior.jpeg"
                alt="Vaal Hospital Modern Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Licensed by</div>
              <div className="text-lg font-semibold text-gray-900">COFEPRIS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
