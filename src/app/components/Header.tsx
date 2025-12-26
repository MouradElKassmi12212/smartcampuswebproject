import { Menu, X, Wifi, Bell } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onPortalClick: () => void;
}

export function Header({ onPortalClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo-upf.svg" alt="UPF Logo" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#campus" className="text-gray-700 hover:text-blue-600 transition-colors">
              Campus
            </a>
            <a href="#innovation" className="text-gray-700 hover:text-blue-600 transition-colors">
              Innovation
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={onPortalClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Portail Étudiant
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#accueil" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#campus" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Campus
            </a>
            <a href="#innovation" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Innovation
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <button 
              onClick={onPortalClick}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Portail Étudiant
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}