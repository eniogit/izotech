import { Card } from "@/app/components/Card";
import { 
  Hammer, 
  PaintBucket, 
  Ruler, 
  Lightbulb,
  Home,
  Paintbrush,
  CheckCircle
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Complete Home Renovation",
    description: "Full-scale home renovation services tailored to your vision and needs",
    features: ["Custom Design", "Project Management", "Quality Materials"],
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Professional interior design services to transform your space",
    features: ["Color Consultation", "Space Planning", "Furniture Selection"],
  },
  {
    icon: Hammer,
    title: "Kitchen Remodeling",
    description: "Modern kitchen renovation solutions for every style and budget",
    features: ["Custom Cabinets", "Countertops", "Appliance Installation"],
  },
  {
    icon: PaintBucket,
    title: "Bathroom Renovation",
    description: "Luxury bathroom upgrades and complete remodeling services",
    features: ["Tile Work", "Fixtures", "Plumbing"],
  },
  {
    icon: Ruler,
    title: "Room Additions",
    description: "Expand your living space with custom room additions",
    features: ["Design Planning", "Permits", "Construction"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Modern lighting solutions to enhance your home's ambiance",
    features: ["LED Solutions", "Smart Lighting", "Custom Fixtures"],
  },
];

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and budget",
  },
  {
    step: 2,
    title: "Design & Planning",
    description: "Our team creates detailed plans and proposals",
  },
  {
    step: 3,
    title: "Project Execution",
    description: "Professional implementation of approved plans",
  },
  {
    step: 4,
    title: "Final Inspection",
    description: "Quality assurance and client satisfaction check",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="Services hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-xl">
                Professional renovation services for every need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 inline-block p-3 bg-yellow-400 rounded-full">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}