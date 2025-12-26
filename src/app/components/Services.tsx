import { Wifi, BookOpen, MapPin, Zap, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Connexion IoT",
    description: "Réseau Wi-Fi haute vitesse et capteurs intelligents dans tout le campus",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Bibliothèque Digitale",
    description: "Accès 24/7 à des millions de ressources numériques et e-books",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Navigation Smart",
    description: "Guidage en temps réel et localisation de salles de cours",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Zap,
    title: "Gestion Énergétique",
    description: "Bâtiments éco-responsables avec optimisation énergétique automatique",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Sécurité Connectée",
    description: "Système de sécurité intelligent avec accès par badge NFC",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    title: "Réservation en Ligne",
    description: "Réservez salles, équipements et créneaux de laboratoire instantanément",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Services Intelligents</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les services connectés qui simplifient votre vie universitaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
