import { useState } from "react";
import { X, BookOpen, Download, FileText, Video, File, Calendar, User } from "lucide-react";

interface CoursesModalProps {
  onClose: () => void;
}

const courses = [
  {
    id: 1,
    subject: "Mathématiques Avancées",
    professor: "Dr. Hassan Amrani",
    lastUpdate: "18 Déc 2024",
    materials: [
      { type: "pdf", name: "Chapitre 5 - Intégrales.pdf", size: "2.5 MB", date: "18 Déc" },
      { type: "pdf", name: "Exercices Corrigés.pdf", size: "1.8 MB", date: "16 Déc" },
      { type: "video", name: "Cours Intégrales - Partie 1", duration: "45 min", date: "15 Déc" },
    ],
    color: "blue",
  },
  {
    id: 2,
    subject: "Programmation Web",
    professor: "Mme. Fatima Zahra",
    lastUpdate: "17 Déc 2024",
    materials: [
      { type: "pdf", name: "Introduction à React.pdf", size: "3.2 MB", date: "17 Déc" },
      { type: "code", name: "Projet-React-Example.zip", size: "15 MB", date: "17 Déc" },
      { type: "video", name: "Tutorial React Components", duration: "1h 20min", date: "15 Déc" },
      { type: "pdf", name: "TP 4 - Hooks en React.pdf", size: "1.5 MB", date: "12 Déc" },
    ],
    color: "purple",
  },
  {
    id: 3,
    subject: "Base de Données",
    professor: "Dr. Youssef Benali",
    lastUpdate: "16 Déc 2024",
    materials: [
      { type: "pdf", name: "Chapitre 6 - Normalisation.pdf", size: "2.1 MB", date: "16 Déc" },
      { type: "pdf", name: "TD 5 - Normalisation.pdf", size: "900 KB", date: "16 Déc" },
      { type: "code", name: "Scripts SQL - TP5.sql", size: "45 KB", date: "14 Déc" },
    ],
    color: "green",
  },
  {
    id: 4,
    subject: "Réseaux Informatiques",
    professor: "Dr. Omar Alaoui",
    lastUpdate: "15 Déc 2024",
    materials: [
      { type: "pdf", name: "Protocoles TCP-IP.pdf", size: "4.2 MB", date: "15 Déc" },
      { type: "video", name: "Configuration Cisco Packet Tracer", duration: "35 min", date: "13 Déc" },
      { type: "pdf", name: "TP - Configuration Routeurs.pdf", size: "1.2 MB", date: "10 Déc" },
    ],
    color: "orange",
  },
  {
    id: 5,
    subject: "Algorithmique",
    professor: "Dr. Salma Idrissi",
    lastUpdate: "14 Déc 2024",
    materials: [
      { type: "pdf", name: "Algorithmes de Tri.pdf", size: "2.8 MB", date: "14 Déc" },
      { type: "pdf", name: "Exercices - Complexité.pdf", size: "1.1 MB", date: "12 Déc" },
    ],
    color: "indigo",
  },
];

const colorClasses: Record<string, string> = {
  blue: "from-blue-600 to-blue-700",
  purple: "from-purple-600 to-purple-700",
  green: "from-green-600 to-green-700",
  orange: "from-orange-600 to-orange-700",
  indigo: "from-indigo-600 to-indigo-700",
};

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return <FileText className="w-5 h-5 text-red-500" />;
    case "video":
      return <Video className="w-5 h-5 text-purple-500" />;
    case "code":
      return <File className="w-5 h-5 text-blue-500" />;
    default:
      return <File className="w-5 h-5 text-gray-500" />;
  }
};

export function CoursesModal({ onClose }: CoursesModalProps) {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mes Cours</h2>
            <p className="text-gray-600">Accédez aux supports de cours et ressources pédagogiques</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Course List */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Matières ({courses.length})</h3>
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedCourse === course.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[course.color]} flex items-center justify-center flex-shrink-0`}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 mb-1 truncate">
                      {course.subject}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{course.professor}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{course.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Course Materials */}
          <div className="lg:col-span-2">
            {selectedCourse ? (
              <>
                {courses
                  .filter((c) => c.id === selectedCourse)
                  .map((course) => (
                    <div key={course.id}>
                      <div className={`bg-gradient-to-r ${colorClasses[course.color]} text-white p-6 rounded-xl mb-6`}>
                        <h3 className="text-2xl font-bold mb-2">{course.subject}</h3>
                        <div className="flex items-center gap-4 text-sm text-white/90">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{course.professor}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Mis à jour: {course.lastUpdate}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Documents et ressources ({course.materials.length})
                        </h4>
                        <div className="space-y-3">
                          {course.materials.map((material, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                {getFileIcon(material.type)}
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-gray-900 truncate">
                                    {material.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {"size" in material && material.size}
                                    {"duration" in material && material.duration}
                                    {" • "}{material.date}
                                  </div>
                                </div>
                              </div>
                              <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                                <Download className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-sm text-blue-900">
                          <strong>Astuce:</strong> Consultez régulièrement cette section pour ne manquer aucun nouveau support de cours. Les documents sont généralement ajoutés après chaque séance.
                        </p>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-12">
                <div>
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sélectionnez une matière
                  </h3>
                  <p className="text-gray-600">
                    Choisissez une matière dans la liste pour voir les supports de cours disponibles
                  </p>
                </div>
              </div>
            )}
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
