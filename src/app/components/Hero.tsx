import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Campus Connecté 24/7
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bienvenue au <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Smart Campus</span>
              </h1>
              <p className="text-xl text-gray-600">
                Une expérience universitaire innovante où la technologie rencontre l'éducation pour créer un environnement d'apprentissage intelligent et connecté.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2">
                Explorer le Campus
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Play className="w-5 h-5" />
                Voir la vidéo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">15K+</div>
                <div className="text-sm text-gray-600">Étudiants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Professeurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Programmes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558467841-95a4fe945184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjUzMTUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Université Privée de Fès"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}