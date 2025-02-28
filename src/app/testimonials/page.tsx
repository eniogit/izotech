import { Card } from "@/app/components/Card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "The renovation team exceeded our expectations. They transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism was outstanding.",
    rating: 5,
    project: "Kitchen Renovation",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content:
      "Working with this team has been a pleasure. They handled multiple renovation projects for us, always delivering on time and within budget. Their expertise is unmatched.",
    rating: 5,
    project: "Multiple Properties",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "As an interior designer, I have high standards for renovation work. This team consistently delivers exceptional quality and craftsmanship. They're my go-to renovation partners.",
    rating: 5,
    project: "Residential Remodel",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content:
      "The team transformed our commercial space beautifully. Their understanding of both aesthetics and functionality made the renovation process smooth and successful.",
    rating: 5,
    project: "Commercial Renovation",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    content:
      "From the initial consultation to the final walkthrough, the renovation process was seamless. They turned our vision into reality while staying within our budget.",
    rating: 5,
    project: "Full Home Renovation",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Real Estate Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "I've worked with many renovation companies, but this team stands out. Their project management is excellent, and the quality of work is consistently high.",
    rating: 5,
    project: "Investment Property",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
            alt="Testimonials hero"
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
                Client Testimonials
              </h1>
              <p className="text-xl">What our clients say about our work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4 text-start">
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                  <p className="text-gray-600 mb-4 pl-6">
                    {testimonial.content}
                  </p>
                </div>
                <p className="text-sm font-medium text-yellow-600">
                  Project: {testimonial.project}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
