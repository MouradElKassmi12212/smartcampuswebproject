import { Wifi, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo-upf.svg" alt="UPF Logo" className="h-12 brightness-0 invert" />
            </div>
            <div>
              <h3 className="font-bold text-white">SmartCampus</h3>
              <p className="text-xs text-gray-400">Université Privée de Fès</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformons l'éducation grâce à la technologie et l'innovation pour créer le campus universitaire de demain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#campus" className="hover:text-blue-400 transition-colors">Campus</a></li>
              <li><a href="#innovation" className="hover:text-blue-400 transition-colors">Innovation</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4">Programmes</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Licence</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Master</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Doctorat</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Formation Continue</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Restez informé des dernières actualités et événements du campus.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">© 2024 SmartCampus. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}