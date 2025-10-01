import { Car, Sparkles, Brush, Layers, Gem, Settings, RefreshCw, CloudDrizzle, Droplets, ShieldCheck, SprayCan, Bike } from "lucide-react";

export default function Services() {
  const services = [
    { name: "Car Detailing", icon: <Car className="w-6 h-6 text-blue-600" /> },
    { name: "Bike Wash", icon: <Bike className="w-6 h-6 text-blue-600" /> },
    { name: "Interior Cleaning", icon: <Sparkles className="w-6 h-6 text-blue-600" /> },
    { name: "Rubbing Polish", icon: <Brush className="w-6 h-6 text-blue-600" /> },
    { name: "Paint Compounding", icon: <Layers className="w-6 h-6 text-blue-600" /> },
    { name: "Clay Polish", icon: <Gem className="w-6 h-6 text-blue-600" /> },
    { name: "Engine Cleaning", icon: <Settings className="w-6 h-6 text-blue-600" /> },
    { name: "Maintenance Wash", icon: <RefreshCw className="w-6 h-6 text-blue-600" /> },
    { name: "Steam Wash", icon: <CloudDrizzle className="w-6 h-6 text-blue-600" /> },
    { name: "Ceramic Wash", icon: <Droplets className="w-6 h-6 text-blue-600" /> },
    { name: "Car Sanitisation", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
    { name: "Hard Wax", icon: <SprayCan className="w-6 h-6 text-blue-600" /> },
    { name: "Bike Polishing", icon: <Brush className="w-6 h-6 text-blue-600" /> }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-lg font-medium text-gray-800 flex items-center gap-4"
            >
              {service.icon}
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}