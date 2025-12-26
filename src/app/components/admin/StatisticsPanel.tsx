import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

export function StatisticsPanel() {
  const enrollmentData = [
    { month: "Sep", students: 520 },
    { month: "Oct", students: 680 },
    { month: "Nov", students: 850 },
    { month: "Déc", students: 1020 },
  ];

  const programStats = [
    { name: "Licence Informatique", students: 845, percentage: 30 },
    { name: "Licence Gestion", students: 620, percentage: 22 },
    { name: "Master Informatique", students: 480, percentage: 17 },
    { name: "Master Gestion", students: 402, percentage: 14 },
    { name: "Autres", students: 500, percentage: 17 },
  ];

  const averageByYear = [
    { year: "1ère année", average: 13.8, students: 950 },
    { year: "2ème année", average: 14.5, students: 820 },
    { year: "3ème année", average: 15.2, students: 650 },
    { year: "Master 1", average: 15.8, students: 280 },
    { year: "Master 2", average: 16.1, students: 147 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Statistiques & Rapports</h1>
        <p className="text-gray-600">Vue détaillée des performances académiques</p>
      </div>

      {/* Enrollment Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Évolution des Inscriptions
        </h3>
        <div className="flex items-end justify-around h-64 gap-4">
          {enrollmentData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="text-sm font-semibold text-gray-900 mb-2">{data.students}</div>
              <div
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500"
                style={{ height: `${(data.students / 1200) * 100}%` }}
              ></div>
              <div className="text-sm text-gray-600 mt-2">{data.month}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Program Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Répartition par Programme
          </h3>
          <div className="space-y-4">
            {programStats.map((program, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">{program.name}</span>
                  <span className="text-sm text-gray-600">{program.students} étudiants</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all"
                    style={{ width: `${program.percentage * 3}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Average by Year */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Moyenne par Niveau
          </h3>
          <div className="space-y-4">
            {averageByYear.map((level, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{level.year}</span>
                  <span className="text-2xl font-bold text-green-600">{level.average}</span>
                </div>
                <div className="text-sm text-gray-600">{level.students} étudiants</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
          <Users className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">2,847</div>
          <div className="text-sm opacity-90">Total Étudiants</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
          <Award className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">14.8</div>
          <div className="text-sm opacity-90">Moyenne Générale</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
          <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">87%</div>
          <div className="text-sm opacity-90">Taux de Réussite</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
          <BookOpen className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">156</div>
          <div className="text-sm opacity-90">Cours Actifs</div>
        </div>
      </div>
    </div>
  );
}
