import { Calendar, Car, Sparkles, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Drop Off",
      description: "Drop your car at our facility in Bokaro for your service.",
      step: "01"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Professional Detailing",
      description: "Our expert technicians work their magic using premium products and proven techniques to transform your vehicle.",
      step: "02"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Check & Delivery",
      description: "We perform a thorough quality inspection before delivering your spotless car back to you.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-6">
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It <span className="text-[var(--yellow-primary)]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures a hassle-free experience from booking 
            to delivery, with professional care at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--yellow-primary)] via-[var(--yellow-primary)] to-[var(--yellow-primary)] opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--yellow-primary)] text-black rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-[var(--yellow-primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Our Process?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--yellow-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transparent Communication</h4>
                  <p className="text-gray-600">Regular updates throughout the detailing process via SMS and WhatsApp.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--yellow-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-600">Book appointments that fit your schedule, including weekends and holidays.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--yellow-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h4>
                  <p className="text-gray-600">100% satisfaction guaranteed or we'll make it right at no extra cost.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--yellow-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Professional Staff</h4>
                  <p className="text-gray-600">Trained and certified technicians with years of experience in car detailing.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Service Areas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Service Areas in Bokaro</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-gray-600">• Sector 1-12</div>
                <div className="text-gray-600">• Bokaro Thermal</div>
                <div className="text-gray-600">• City Centre</div>
                <div className="text-gray-600">• Chas</div>
                <div className="text-gray-600">• Gomia</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600">• Jaridih</div>
                <div className="text-gray-600">• Kasmar</div>
                <div className="text-gray-600">• Chandrapura</div>
                <div className="text-gray-600">• Bermo</div>
                <div className="text-gray-600">• Tenughat</div>
              </div>
            </div>
            
            {/* Removed Free Pickup & Drop Service info box as requested */}
          </div>
        </div>
      </div>
    </section>
  );
}