import { ArrowLeft, BookOpen, Calendar, FileText, GraduationCap, Mail, Settings, User, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";
import { DocumentRequestModal } from "./DocumentRequestModal";
import { RoomBookingModal } from "./RoomBookingModal";
import { ScheduleModal } from "./ScheduleModal";
import { CoursesModal } from "./CoursesModal";
import { GradesModal } from "./GradesModal";
import { ProfileModal } from "./ProfileModal";

interface StudentPortalProps {
  onBack: () => void;
}

export function StudentPortal({ onBack }: StudentPortalProps) {
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [showGradesModal, setShowGradesModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </button>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowProfileModal(true)}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AS
                </div>
                <div className="hidden sm:block">
                  <div className="font-semibold text-gray-900">Ahmed Salmi</div>
                  <div className="text-sm text-gray-500">Étudiant</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenue, Ahmed!</h1>
          <p className="text-blue-100">Université Privée de Fès - Portail Étudiant</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-gray-900">15.5</div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-sm text-gray-600">Moyenne Générale</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-gray-900">28</div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-sm text-gray-600">Crédits Validés</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-sm text-gray-600">Cours cette semaine</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-sm text-gray-600">Taux de présence</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setShowScheduleModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                >
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="font-semibold text-gray-900">Emploi du Temps</div>
                  <div className="text-sm text-gray-600">Consulter votre planning</div>
                </button>
                
                <button 
                  onClick={() => setShowGradesModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
                >
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <div className="font-semibold text-gray-900">Mes Notes</div>
                  <div className="text-sm text-gray-600">Voir vos résultats</div>
                </button>
                
                <button 
                  onClick={() => setShowCoursesModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                >
                  <GraduationCap className="w-8 h-8 text-green-600 mb-3" />
                  <div className="font-semibold text-gray-900">Mes Cours</div>
                  <div className="text-sm text-gray-600">Accéder aux contenus</div>
                </button>
                
                <button 
                  onClick={() => setShowRoomModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
                >
                  <BookOpen className="w-8 h-8 text-orange-600 mb-3" />
                  <div className="font-semibold text-gray-900">Réserver une Salle</div>
                  <div className="text-sm text-gray-600">Salles et laboratoires</div>
                </button>

                <button 
                  onClick={() => setShowDocumentModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all text-left"
                >
                  <FileText className="w-8 h-8 text-pink-600 mb-3" />
                  <div className="font-semibold text-gray-900">Documents</div>
                  <div className="text-sm text-gray-600">Attestations, relevés...</div>
                </button>

                <button 
                  onClick={() => setShowProfileModal(true)}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left"
                >
                  <User className="w-8 h-8 text-indigo-600 mb-3" />
                  <div className="font-semibold text-gray-900">Mon Profil</div>
                  <div className="text-sm text-gray-600">Gérer vos informations</div>
                </button>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Prochains Cours</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">09:00</div>
                    <div className="text-xs text-gray-600">Lun</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Mathématiques Avancées</div>
                    <div className="text-sm text-gray-600">Prof. Dr. Hassan Amrani - Salle A201</div>
                  </div>
                  <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    En cours
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">11:00</div>
                    <div className="text-xs text-gray-600">Lun</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Programmation Web</div>
                    <div className="text-sm text-gray-600">Prof. Mme. Fatima Zahra - Lab B105</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">14:00</div>
                    <div className="text-xs text-gray-600">Lun</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Base de Données</div>
                    <div className="text-sm text-gray-600">Prof. Dr. Youssef Benali - Salle C303</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
              <div className="space-y-4">
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div className="font-semibold text-sm text-gray-900">Examen à venir</div>
                  <div className="text-xs text-gray-600 mt-1">Mathématiques - 25 Déc 2024</div>
                </div>
                
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <div className="font-semibold text-sm text-gray-900">Nouveau cours disponible</div>
                  <div className="text-xs text-gray-600 mt-1">Chapitre 5 - Programmation Web</div>
                </div>
                
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="font-semibold text-sm text-gray-900">Note publiée</div>
                  <div className="text-xs text-gray-600 mt-1">Base de Données - 16/20</div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Progression Semestre</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Mathématiques</span>
                    <span className="font-semibold text-gray-900">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Programmation</span>
                    <span className="font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Base de Données</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showDocumentModal && (
        <DocumentRequestModal onClose={() => setShowDocumentModal(false)} />
      )}
      {showRoomModal && (
        <RoomBookingModal onClose={() => setShowRoomModal(false)} />
      )}
      {showScheduleModal && (
        <ScheduleModal onClose={() => setShowScheduleModal(false)} />
      )}
      {showCoursesModal && (
        <CoursesModal onClose={() => setShowCoursesModal(false)} />
      )}
      {showGradesModal && (
        <GradesModal onClose={() => setShowGradesModal(false)} />
      )}
      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}