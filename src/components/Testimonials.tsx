import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Raj Kumar",
      location: "Bokaro Sector 4",
      rating: 5,
      text: "Absolutely amazing service! My car looks brand new after their premium detailing package. The team is professional and pays attention to every detail. Highly recommended!",
      car: "Honda City"
    },
    {
      name: "Priya Sharma",
      location: "Chas, Bokaro",
      rating: 5,
      text: "I've tried several car wash services in Bokaro, but Obsessed Car Detailings is on another level. The interior cleaning was thorough and my leather seats look fantastic.",
      car: "Maruti Swift"
    },
    {
      name: "Amit Singh",
      location: "Bokaro Thermal",
      rating: 5,
      text: "Worth every rupee! The paint correction service removed all the scratches and swirl marks. My car's paint looks deeper and more glossy than when I bought it.",
      car: "Hyundai Creta"
    },
    {
      name: "Neha Gupta",
      location: "Sector 12, Bokaro",
      rating: 5,
      text: "Professional service with great customer care. They explained every step of the process and delivered exactly what they promised. My go-to place for car detailing now.",
      car: "Tata Nexon"
    },
    {
      name: "Vikash Prasad",
      location: "Gomia",
      rating: 5,
      text: "The ceramic coating service is excellent. It's been 6 months and my car still looks freshly detailed. Great value for money and outstanding customer service.",
      car: "Mahindra XUV500"
    },
    {
      name: "Sanjay Yadav",
      location: "Bokaro City Centre",
      rating: 5,
      text: "Impressed with their attention to detail and use of quality products. The team is knowledgeable and passionate about their work. My car has never looked better!",
      car: "Toyota Innova"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-[var(--yellow-primary)] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-6">
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[var(--yellow-primary)]">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            from across Bokaro have to say about our services.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-50 px-8 py-4 rounded-2xl">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">• Based on 100+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:border-[var(--yellow-primary)]/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="text-[var(--yellow-primary)] mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-[var(--yellow-primary)]">
                        {testimonial.car}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 p-12 rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--yellow-primary)] mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--yellow-primary)] mb-2">5.0★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--yellow-primary)] mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--yellow-primary)] mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of satisfaction and quality that hundreds of customers 
            in Bokaro have come to trust and love.
          </p>
          <button className="bg-[var(--yellow-primary)] text-black px-8 py-3 rounded-lg font-medium hover:bg-[var(--yellow-dark)] transition-colors">
            Book Your Service Today
          </button>
        </div>
      </div>
    </section>
  );
}