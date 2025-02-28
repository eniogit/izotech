import { Card } from "@/app/components/Card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "2025 Home Renovation Trends",
    excerpt:
      "Discover the latest trends in home renovation and interior design for 2025",
    category: "Trends",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  },
  {
    id: 2,
    title: "Sustainable Renovation Practices",
    excerpt:
      "Learn about eco-friendly renovation methods and sustainable materials",
    category: "Sustainability",
    date: "March 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
  },
  {
    id: 3,
    title: "Smart Home Integration Guide",
    excerpt:
      "Essential tips for incorporating smart technology in your renovation",
    category: "Technology",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
  },
  {
    id: 4,
    title: "Kitchen Design Innovations",
    excerpt:
      "Exploring the latest innovations in kitchen design and functionality",
    category: "Design",
    date: "March 8, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  },
  {
    id: 5,
    title: "Bathroom Renovation Guide",
    excerpt:
      "Complete guide to planning and executing a successful bathroom renovation",
    category: "Guides",
    date: "March 5, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },
  {
    id: 6,
    title: "Cost-Effective Renovations",
    excerpt:
      "Tips and tricks for renovating on a budget without compromising quality",
    category: "Budget",
    date: "March 3, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="News hero"
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
                Latest News
              </h1>
              <p className="text-xl">
                Stay updated with renovation trends and tips
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {article.date}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {article.readTime}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button
                    className="p-0 text-yellow-600 hover:text-yellow-700"
                  >
                    <Link href={`/news/${article.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
