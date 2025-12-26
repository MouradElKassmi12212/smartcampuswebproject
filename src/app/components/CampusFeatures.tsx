import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const features = [
  "Salles de classe interactives avec tableaux numériques",
  "Laboratoires équipés de technologies de pointe",
  "Espaces de coworking modernes et collaboratifs",
  "Cafétéria avec menu digital et commande en ligne",
  "Parking intelligent avec guidage automatique",
  "Gymnase connecté avec suivi de performance",
];

export function CampusFeatures() {
  return (
    <section id="campus" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1741571079543-8d697cd85055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBtb3JvY2NvfGVufDF8fHx8MTc2NjUzMTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Étudiants UPF"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706501186997-4cdae48b8d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXMlMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NjUzMTUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Architecture Fès"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558467841-95a4fe945184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjUzMTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Campus UPF"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Un Campus Conçu pour l'Avenir
              </h2>
              <p className="text-xl text-gray-600">
                Notre infrastructure moderne combine technologie et durabilité pour offrir une expérience d'apprentissage exceptionnelle.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg">
              Planifier une Visite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}