import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Wifi, Lock, User, Mail } from "lucide-react";
import logoUpf from "figma:asset/f70036e239744f0488cac5aeaeafff846a7fbffe.png";

interface AuthPageProps {
  onBack: () => void;
  onLogin: () => void;
  onAdminLogin: () => void;
}

export function AuthPage({ onBack, onLogin, onAdminLogin }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // Vérification des credentials pour l'admin
      if (username === "00000" && password === "00000") {
        onAdminLogin();
        return;
      }
      
      // Vérification des credentials pour le login étudiant
      if (username === "11111" && password === "11111") {
        onLogin();
      } else {
        setError("Nom d'utilisateur ou mot de passe incorrect");
      }
    } else {
      // Pour le signup, on simule juste une inscription
      if (username && password && email) {
        setError("Inscription réussie! Veuillez vous connecter avec vos identifiants.");
        setIsLogin(true);
        setUsername("");
        setPassword("");
        setEmail("");
      } else {
        setError("Veuillez remplir tous les champs");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Retour à l'accueil
      </button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <img src={logoUpf} alt="UPF Logo" className="h-16" />
          </div>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Connexion" : "Inscription"}
            </h2>
            <p className="text-gray-600">
              {isLogin
                ? "Accédez à votre espace étudiant"
                : "Créez votre compte étudiant"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => {
                setIsLogin(true);
                setError("");
              }}
              className={`flex-1 py-2 rounded-md transition-all ${
                isLogin
                  ? "bg-white shadow-sm font-semibold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setError("");
              }}
              className={`flex-1 py-2 rounded-md transition-all ${
                !isLogin
                  ? "bg-white shadow-sm font-semibold text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Inscription
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@email.com"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={isLogin ? "Entrez votre nom" : "Choisissez un nom"}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Mot de passe oublié?
                </a>
              </div>
            )}

            {error && (
              <div
                className={`p-4 rounded-xl text-sm ${
                  error.includes("réussie")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-900 text-center">
              <strong>Pour tester:</strong><br/>
              Étudiant: <code className="px-2 py-1 bg-white rounded">11111</code><br/>
              Admin: <code className="px-2 py-1 bg-white rounded">00000</code>
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Besoin d'aide? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contactez-nous</a>
        </div>
      </div>
    </div>
  );
}