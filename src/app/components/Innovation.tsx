import { Brain, Cloud, Smartphone, TrendingUp } from "lucide-react";

const innovations = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Assistants virtuels pour accompagner votre parcours académique",
    stats: "95% de satisfaction",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Accès à vos cours et documents depuis n'importe où",
    stats: "99.9% de disponibilité",
  },
  {
    icon: Smartphone,
    title: "Application Mobile",
    description: "Gérez votre emploi du temps et vos notes en temps réel",
    stats: "50K+ téléchargements",
  },
  {
    icon: TrendingUp,
    title: "Analyse de Données",
    description: "Suivi personnalisé de votre progression académique",
    stats: "Taux de réussite +15%",
  },
];

export function Innovation() {
  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Innovation & Technologie</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            À la pointe de l'innovation pour transformer l'expérience éducative
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
            >
              <innovation.icon className="w-12 h-12 text-blue-300 mb-6" />
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">{innovation.description}</p>
              <div className="text-sm font-semibold text-blue-300">{innovation.stats}</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre le futur de l'éducation ?</h3>
          <p className="text-blue-100 mb-6">
            Candidatez maintenant et faites partie de notre communauté innovante
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl">
            Commencer ma Candidature
          </button>
        </div>
      </div>
    </section>
  );
}
