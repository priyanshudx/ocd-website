



import { Shield, Droplets, Sparkles, Clock, Award, Users } from "lucide-react";
import aboutImg from "../assets/gallery/462565008_1775339816638852_7566539859088258115_n..jpg";

export default function About() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "We stand behind our work with a satisfaction guarantee on every service."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Premium Products",
      description: "Only the finest detailing products and equipment for superior results."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Expert Care",
      description: "Our skilled technicians treat every vehicle with meticulous attention to detail."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Efficient",
      description: "Quick turnaround times without compromising on quality or thoroughness."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Team",
      description: "Professionally trained and certified detailing specialists."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We go above and beyond for every client."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Obsessed with <span className="text-[var(--yellow-primary)]">Perfection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Obsessed Car Detailings, we don't just clean cars – we restore them to their original glory.
            Located in the heart of Bokaro, Jharkhand, we've built our reputation on delivering exceptional automotive care that exceeds expectations.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a passion for automotive excellence, Obsessed Car Detailings began as a
                small operation with big dreams. We believed that every car deserves to look and feel
                like it just rolled off the showroom floor.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've refined our techniques, invested in premium equipment, and
                built a team of dedicated professionals who share our obsession with quality.
                Today, we're proud to be Bokaro's trusted name in car detailing.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--yellow-primary)]">500+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--yellow-primary)]">3+</div>
                  <div className="text-sm text-gray-500">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--yellow-primary)]">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImg}
                  alt="Professional car and bike washing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--yellow-primary)] text-black p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">Bokaro's #1</div>
                  <div className="text-sm">Car Detailing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-[var(--yellow-primary)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}