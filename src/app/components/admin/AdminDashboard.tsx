import { Users, BookOpen, FileText, TrendingUp, Calendar, AlertCircle, Mail } from "lucide-react";

const stats = [
  { label: "Total Étudiants", value: "2,847", icon: Users, color: "blue", trend: "+12%" },
  { label: "Cours Actifs", value: "156", icon: BookOpen, color: "green", trend: "+5%" },
  { label: "Demandes en cours", value: "43", icon: FileText, color: "orange", trend: "-8%" },
  { label: "Moyenne Générale", value: "14.8", icon: TrendingUp, color: "purple", trend: "+0.3" },
];

const recentActivities = [
  { action: "Nouvelle inscription", student: "Sara Bennani", time: "Il y a 5 min", type: "success" },
  { action: "Demande de document", student: "Karim Alaoui", time: "Il y a 15 min", type: "info" },
  { action: "Modification de notes", student: "Fatima Zahra", time: "Il y a 32 min", type: "warning" },
  { action: "Réservation salle", student: "Omar Idrissi", time: "Il y a 1h", type: "info" },
  { action: "Nouveau cours ajouté", student: "Prof. Hassan Amrani", time: "Il y a 2h", type: "success" },
];

const upcomingEvents = [
  { title: "Examens Semestre 3", date: "25 Déc 2024", participants: "845 étudiants" },
  { title: "Réunion Pédagogique", date: "28 Déc 2024", participants: "32 professeurs" },
  { title: "Journée Portes Ouvertes", date: "15 Jan 2025", participants: "Tout le campus" },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de l'activité du campus</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-semibold ${
                stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            Activités Récentes
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.student}</div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            Événements à venir
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div className="font-semibold text-gray-900 mb-2">{event.title}</div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="text-gray-600">{event.participants}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <div className="font-semibold text-gray-900">Ajouter Étudiant</div>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <div className="font-semibold text-gray-900">Nouveau Cours</div>
          </button>
          <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors text-left">
            <FileText className="w-8 h-8 text-orange-600 mb-2" />
            <div className="font-semibold text-gray-900">Générer Rapport</div>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
            <Mail className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-semibold text-gray-900">Envoi Groupé</div>
          </button>
        </div>
      </div>
    </div>
  );
}