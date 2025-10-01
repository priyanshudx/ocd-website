import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[var(--yellow-primary)]">O</span>bsessed <span className="text-[var(--yellow-primary)]">C</span>ar <span className="text-[var(--yellow-primary)]">D</span>etailings
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bokaro's premier car detailing service, dedicated to bringing out 
              the best in every vehicle with professional care and attention to detail.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--yellow-primary)] hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--yellow-primary)] hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--yellow-primary)] hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--yellow-primary)] hover:text-black transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Basic Car Wash
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Premium Detailing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--yellow-primary)] transition-colors">
                  Interior Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--yellow-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Sector 4, City Centre<br />
                    Bokaro Steel City, Jharkhand 827004
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--yellow-primary)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 7372001122</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--yellow-primary)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@obsessedcardetailings.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--yellow-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon - Sun: 8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 <span className="text-[var(--yellow-primary)]">O</span>bsessed <span className="text-[var(--yellow-primary)]">C</span>ar <span className="text-[var(--yellow-primary)]">D</span>etailings. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--yellow-primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--yellow-primary)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--yellow-primary)] transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Strip */}
      <div className="bg-[var(--yellow-primary)] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-2 sm:mb-0">
              <span className="font-medium">Ready to book your car detailing service?</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="tel:+919876543210" 
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Call Now
              </a>
              {/* Removed Book Online button as booking online is not offered */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}