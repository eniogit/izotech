import Image from "next/image";
import { Home, Paintbrush, PenTool, Trophy, Users } from "lucide-react";
import { Card } from "./components/Card";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Home Renovation",
    description: "Complete home makeovers tailored to your vision",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Expert interior design and decoration services",
  },
  {
    icon: PenTool,
    title: "Custom Solutions",
    description: "Bespoke renovation solutions for any space",
  },
];

const stats = [
  { icon: Trophy, value: "15+", label: "Years Experience" },
  { icon: Home, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "350+", label: "Happy Clients" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            alt="Modern kitchen interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                WE CAN HELP WITH PROJECTS
                <br />
                LARGE AND SMALL!
              </h1>
              <p className="text-xl mb-8">
                Transform your space with our expert renovation services
              </p>
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 px-8">
                <Link href="/contact">Contact us →</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-secondary">
              Professional renovation services for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index}>
                  <div className="mb-4 inline-block p-3 bg-yellow-400 rounded-full">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 text-yellow-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
