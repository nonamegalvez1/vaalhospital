import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Professional Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our medical team for professional consultations, referrals, or collaboration opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-vaal-navy" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Av. Jalisco 2427 Col Madero
                  <br />
                  22040, Tijuana BC
                  <br />
                  Mexico
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-vaal-navy" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Front Desk: +52 664 208 3892
                  <br />
                  Administration & Programming: +52 664 803 1002
                  <br />
                  Emergency Services: 24/7
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-vaal-navy" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  General Information: info@vaalhospital.com
                  <br />
                  Professional Inquiries: info@vaalhospital.com
                  <br />
                  Referrals: info@vaalhospital.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-vaal-navy" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 4:00 PM
                  <br />
                  Saturday & Sunday: Closed
                  <br />
                  Emergency Services: 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Professional Inquiry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Medical Institution" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Please describe your inquiry or referral details..." className="min-h-[120px]" />
              <Button className="w-full bg-vaal-navy hover:bg-vaal-navy/90">Send Professional Inquiry</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
