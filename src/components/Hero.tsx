import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635275490640-6c889878a3eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBwb2xpc2h8ZW58MXx8fHwxNzU5MjI1NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--yellow-primary)]/30 bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-8">
            <span className="text-sm font-medium">Premium Car Care Services</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-[var(--yellow-primary)]">O</span>bsessed <span className="text-[var(--yellow-primary)]">C</span>ar
            <span className="block text-white"><span className="text-[var(--yellow-primary)]">D</span>etailings</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Premium Car Wash & Polishing in Bokaro
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your vehicle with our professional detailing services. 
            We bring out the shine that makes your car look brand new.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[var(--yellow-primary)] text-red-600 hover:bg-[var(--yellow-primary)] hover:text-black hover:border-[var(--yellow-primary)] transition-all duration-300 px-8 py-3 text-lg backdrop-blur-sm"
            >
              <a
                href="https://www.instagram.com/ocd_bokaro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Work
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--yellow-primary)] mb-2">500+</div>
              <div className="text-sm text-gray-300">Cars Detailed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--yellow-primary)] mb-2">5★</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--yellow-primary)] mb-2">3+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--yellow-primary)] mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--yellow-primary)] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}