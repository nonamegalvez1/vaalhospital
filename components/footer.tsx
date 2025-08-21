import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-vaal-navy text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/vaal-logo.png"
              alt="Vaal Hospital"
              width={200}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">A transformative, dignified, and human experience</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Bariatric Surgery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Plastic Surgery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ENT Surgery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Post-Operative Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us for Facility Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Av. Jalisco 2427 Col Madero</li>
              <li>22040, Tijuana BC, Mexico</li>
              <li>+52 664 208 3892</li>
              <li>info@vaalhospital.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Vaal Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
