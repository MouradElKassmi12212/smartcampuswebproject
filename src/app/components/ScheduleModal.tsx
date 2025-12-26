import { X, Calendar, Clock, MapPin, User, Download, Printer } from "lucide-react";

interface ScheduleModalProps {
  onClose: () => void;
}

const schedule = [
  {
    day: "Lundi",
    courses: [
      {
        time: "08:00 - 10:00",
        subject: "Mathématiques Avancées",
        professor: "Dr. Hassan Amrani",
        room: "Salle A201",
        type: "Cours magistral",
        color: "blue",
      },
      {
        time: "10:15 - 12:15",
        subject: "Programmation Web",
        professor: "Mme. Fatima Zahra",
        room: "Lab B105",
        type: "TP",
        color: "purple",
      },
      {
        time: "14:00 - 16:00",
        subject: "Base de Données",
        professor: "Dr. Youssef Benali",
        room: "Salle C303",
        type: "Cours magistral",
        color: "green",
      },
    ],
  },
  {
    day: "Mardi",
    courses: [
      {
        time: "09:00 - 11:00",
        subject: "Réseaux Informatiques",
        professor: "Dr. Omar Alaoui",
        room: "Salle A105",
        type: "Cours magistral",
        color: "orange",
      },
      {
        time: "14:00 - 17:00",
        subject: "Projet Informatique",
        professor: "M. Karim Benjelloun",
        room: "Lab B201",
        type: "Projet",
        color: "pink",
      },
    ],
  },
  {
    day: "Mercredi",
    courses: [
      {
        time: "08:00 - 10:00",
        subject: "Algorithmique",
        professor: "Dr. Salma Idrissi",
        room: "Salle A301",
        type: "Cours magistral",
        color: "indigo",
      },
      {
        time: "10:15 - 12:15",
        subject: "Architecture des Ordinateurs",
        professor: "Dr. Mohamed Tazi",
        room: "Salle C201",
        type: "TD",
        color: "cyan",
      },
    ],
  },
  {
    day: "Jeudi",
    courses: [
      {
        time: "09:00 - 12:00",
        subject: "Base de Données",
        professor: "Dr. Youssef Benali",
        room: "Lab B105",
        type: "TP",
        color: "green",
      },
      {
        time: "14:00 - 16:00",
        subject: "Anglais Technique",
        professor: "Mme. Sarah Williams",
        room: "Salle D102",
        type: "TD",
        color: "red",
      },
    ],
  },
  {
    day: "Vendredi",
    courses: [
      {
        time: "08:00 - 10:00",
        subject: "Systèmes d'Exploitation",
        professor: "Dr. Ahmed Fassi",
        room: "Salle A201",
        type: "Cours magistral",
        color: "yellow",
      },
      {
        time: "10:15 - 12:15",
        subject: "Programmation Web",
        professor: "Mme. Fatima Zahra",
        room: "Lab B105",
        type: "TP",
        color: "purple",
      },
    ],
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 border-blue-300 text-blue-900",
  purple: "bg-purple-100 border-purple-300 text-purple-900",
  green: "bg-green-100 border-green-300 text-green-900",
  orange: "bg-orange-100 border-orange-300 text-orange-900",
  pink: "bg-pink-100 border-pink-300 text-pink-900",
  indigo: "bg-indigo-100 border-indigo-300 text-indigo-900",
  cyan: "bg-cyan-100 border-cyan-300 text-cyan-900",
  red: "bg-red-100 border-red-300 text-red-900",
  yellow: "bg-yellow-100 border-yellow-300 text-yellow-900",
};

export function ScheduleModal({ onClose }: ScheduleModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Emploi du Temps</h2>
            <p className="text-gray-600">Semestre 3 - Année 2024/2025</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors" title="Imprimer">
              <Printer className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors" title="Télécharger">
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-6">
          {schedule.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-bold text-lg">{daySchedule.day}</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {daySchedule.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className={`p-4 border-2 rounded-xl ${colorClasses[course.color]}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-bold text-lg">{course.subject}</div>
                          <span className="px-2 py-1 bg-white/50 rounded text-xs font-semibold">
                            {course.type}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{course.professor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{course.room}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>{course.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Légende</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Cours magistral</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>Travaux Pratiques (TP)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Travaux Dirigés (TD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Projet</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}