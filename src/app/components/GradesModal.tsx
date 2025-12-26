import { useState } from "react";
import { X, TrendingUp, TrendingDown, Award, AlertCircle } from "lucide-react";

interface GradesModalProps {
  onClose: () => void;
}

const semesters = [
  {
    id: 1,
    name: "Semestre 1",
    average: 14.8,
    status: "Validé",
    courses: [
      { name: "Mathématiques 1", cc: 15, tp: 16, exam: 14, final: 14.8, credits: 6, status: "Validé" },
      { name: "Algorithmique", cc: 16, tp: 17, exam: 15, final: 15.7, credits: 6, status: "Validé" },
      { name: "Architecture", cc: 13, tp: 14, exam: 12, final: 12.8, credits: 5, status: "Validé" },
      { name: "Anglais 1", cc: 15, tp: null, exam: 16, final: 15.6, credits: 3, status: "Validé" },
    ],
  },
  {
    id: 2,
    name: "Semestre 2",
    average: 15.2,
    status: "Validé",
    courses: [
      { name: "Mathématiques 2", cc: 16, tp: 15, exam: 16, final: 15.8, credits: 6, status: "Validé" },
      { name: "Programmation C", cc: 17, tp: 18, exam: 16, final: 16.8, credits: 6, status: "Validé" },
      { name: "Systèmes", cc: 14, tp: 15, exam: 13, final: 13.8, credits: 5, status: "Validé" },
      { name: "Anglais 2", cc: 16, tp: null, exam: 17, final: 16.6, credits: 3, status: "Validé" },
    ],
  },
  {
    id: 3,
    name: "Semestre 3 (En cours)",
    average: 15.5,
    status: "En cours",
    courses: [
      { name: "Mathématiques Avancées", cc: 15, tp: 16, exam: null, final: null, credits: 6, status: "En cours" },
      { name: "Programmation Web", cc: 18, tp: 17, exam: null, final: null, credits: 6, status: "En cours" },
      { name: "Base de Données", cc: 16, tp: 15, exam: null, final: null, credits: 6, status: "En cours" },
      { name: "Réseaux", cc: 14, tp: null, exam: null, final: null, credits: 5, status: "En cours" },
      { name: "Algorithmique", cc: 15, tp: 16, exam: null, final: null, credits: 5, status: "En cours" },
    ],
  },
];

export function GradesModal({ onClose }: GradesModalProps) {
  const [selectedSemester, setSelectedSemester] = useState(3);

  const currentSemester = semesters.find((s) => s.id === selectedSemester);
  const totalCredits = semesters
    .filter((s) => s.status === "Validé")
    .reduce((acc, sem) => acc + sem.courses.reduce((a, c) => a + c.credits, 0), 0);

  const overallAverage =
    semesters
      .filter((s) => s.status === "Validé")
      .reduce((acc, sem) => acc + sem.average, 0) /
    semesters.filter((s) => s.status === "Validé").length;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mes Notes</h2>
            <p className="text-gray-600">Consultez vos résultats académiques</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-8 h-8" />
              <div className="text-sm opacity-90">Moyenne Générale</div>
            </div>
            <div className="text-3xl font-bold">{overallAverage.toFixed(2)}/20</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" />
              <div className="text-sm opacity-90">Crédits Validés</div>
            </div>
            <div className="text-3xl font-bold">{totalCredits}</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" />
              <div className="text-sm opacity-90">Semestres Validés</div>
            </div>
            <div className="text-3xl font-bold">{semesters.filter((s) => s.status === "Validé").length}</div>
          </div>
        </div>

        {/* Semester Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {semesters.map((semester) => (
            <button
              key={semester.id}
              onClick={() => setSelectedSemester(semester.id)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedSemester === semester.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {semester.name}
            </button>
          ))}
        </div>

        {/* Semester Details */}
        {currentSemester && (
          <div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{currentSemester.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">
                      Moyenne: <span className="font-bold text-blue-600">{currentSemester.average}/20</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      currentSemester.status === "Validé"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {currentSemester.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total Crédits</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {currentSemester.courses.reduce((acc, c) => acc + c.credits, 0)}
                  </div>
                </div>
              </div>
            </div>

            {/* Grades Table */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Matière</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">CC</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">TP</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Examen</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Note Finale</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Crédits</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentSemester.courses.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{course.name}</td>
                        <td className="px-6 py-4 text-center">
                          {course.cc !== null ? (
                            <span className={`font-semibold ${course.cc >= 10 ? "text-green-600" : "text-red-600"}`}>
                              {course.cc}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {course.tp !== null ? (
                            <span className={`font-semibold ${course.tp >= 10 ? "text-green-600" : "text-red-600"}`}>
                              {course.tp}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {course.exam !== null ? (
                            <span className={`font-semibold ${course.exam >= 10 ? "text-green-600" : "text-red-600"}`}>
                              {course.exam}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {course.final !== null ? (
                            <span className={`text-lg font-bold ${course.final >= 10 ? "text-green-600" : "text-red-600"}`}>
                              {course.final}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-gray-700">{course.credits}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            course.status === "Validé"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}>
                            {course.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <strong>Légende:</strong> CC = Contrôle Continu, TP = Travaux Pratiques. 
                  La note finale est calculée selon la pondération: CC (30%), TP (20%), Examen (50%).
                </div>
              </div>
            </div>
          </div>
        )}

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
