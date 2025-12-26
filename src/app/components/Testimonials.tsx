import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Salma Benjelloun",
    program: "Master en Informatique",
    text: "L'Université Privée de Fès m'a offert une formation de qualité avec des infrastructures modernes. Les professeurs sont très compétents et à l'écoute.",
    rating: 5,
    avatar: "SB",
  },
  {
    id: 2,
    name: "Youssef Alami",
    program: "Licence en Gestion",
    text: "Le smart campus facilite vraiment notre quotidien. Entre la bibliothèque digitale et les salles connectées, tout est pensé pour notre réussite.",
    rating: 5,
    avatar: "YA",
  },
  {
    id: 3,
    name: "Fatima Idrissi",
    program: "Licence en Informatique",
    text: "Une expérience universitaire exceptionnelle! Les opportunités de stage et les partenariats internationaux ouvrent vraiment des portes.",
    rating: 5,
    avatar: "FI",
  },
];

const colors = ["from-blue-600 to-purple-600", "from-green-600 to-teal-600", "from-pink-600 to-orange-600"];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Témoignages d'Étudiants</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos étudiants pensent de leur expérience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
