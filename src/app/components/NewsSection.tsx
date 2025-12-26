import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Journée Portes Ouvertes 2025",
    date: "15 Janvier 2025",
    category: "Événement",
    excerpt: "Découvrez nos programmes et visitez notre campus lors de notre journée portes ouvertes.",
    image: "https://images.unsplash.com/photo-1558467841-95a4fe945184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjUzMTUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Nouveau Laboratoire d'IA",
    date: "10 Janvier 2025",
    category: "Innovation",
    excerpt: "Inauguration de notre nouveau laboratoire dédié à l'intelligence artificielle.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    id: 3,
    title: "Partenariat International",
    date: "5 Janvier 2025",
    category: "Actualité",
    excerpt: "Signature d'un accord de partenariat avec des universités européennes prestigieuses.",
    image: "https://images.unsplash.com/photo-1706501186997-4cdae48b8d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXMlMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NjUzMTUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Actualités & Événements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles du campus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Lire plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg">
            Voir toutes les actualités
          </button>
        </div>
      </div>
    </section>
  );
}