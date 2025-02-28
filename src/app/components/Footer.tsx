import { Hammer } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1C1E26] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">IZOTECH</span>
            </Link>
            <p className="text-gray-400">
              Transform your space with our professional renovation services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/home-renovation"
                  className="text-gray-400 hover:text-white"
                >
                  Home Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-design"
                  className="text-gray-400 hover:text-white"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-solutions"
                  className="text-gray-400 hover:text-white"
                >
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultation"
                  className="text-gray-400 hover:text-white"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Renovation Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@renovation.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Renovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
