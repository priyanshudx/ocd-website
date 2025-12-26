import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "7372001122",
    email: "",
    package: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-6">
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-[var(--yellow-primary)]">Service</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to give your car the care it deserves? Contact us today or fill out 
            the form below to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-12">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--yellow-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--yellow-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Ukrid More, Towards Chas, NH32<br />
                    Bokaro, Jharkhand
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--yellow-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[var(--yellow-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 7372001122</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--yellow-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[var(--yellow-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@obsessedcardetailings.com</p>
                  <p className="text-gray-600">booking@obsessedcardetailings.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--yellow-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[var(--yellow-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 8:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--yellow-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[var(--yellow-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+91 7372001122</p>
                  <p className="text-sm text-gray-500">Quick quotes and instant booking</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
              <iframe
                title="Obsessed Car Detailings Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4568633450247!2d86.12709040000001!3d23.639003400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423006f3ef403%3A0x7652c55cbf1f7163!2sObsessed%20Car%20Detailing!5e0!3m2!1sen!2sin!4v1735223400000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Booking Form (commented out) */}
          {false && (
            <div>
              <Card className="border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Book Your Service</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {/* Package Selection */}
                    <div>
                      <Label htmlFor="package">Service Package *</Label>
                      <Select value={formData.package} onValueChange={(value) => handleInputChange("package", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Wash (₹499)</SelectItem>
                          <SelectItem value="premium">Premium Detail (₹1,299)</SelectItem>
                          <SelectItem value="full">Full Detailing (₹2,499)</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Additional Requirements</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your car, preferred timing, or any special requirements"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-[var(--yellow-primary)] text-black hover:bg-[var(--yellow-dark)] py-3"
                      size="lg"
                    >
                      Submit
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our terms and conditions. 
                      We'll contact you within 2 hours to confirm your booking.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <a
                  href="tel:7372001122"
                  className="inline-flex items-center justify-center border-[var(--yellow-primary)] text-[var(--yellow-primary)] hover:bg-[var(--yellow-primary)] hover:text-black border rounded-lg px-4 py-2 text-lg font-medium transition-colors duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <Button
                  variant="outline"
                  className="border-[var(--yellow-primary)] text-[var(--yellow-primary)] hover:bg-[var(--yellow-primary)] hover:text-black"
                  size="lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}