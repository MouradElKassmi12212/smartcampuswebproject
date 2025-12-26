import { useState } from "react";
import { BookOpen, Plus, Edit, Trash2 } from "lucide-react";

const courses = [
  { id: 1, name: "Mathématiques Avancées", professor: "Dr. Hassan Amrani", students: 45, credits: 6, semester: "S3" },
  { id: 2, name: "Programmation Web", professor: "Mme. Fatima Zahra", students: 52, credits: 6, semester: "S3" },
  { id: 3, name: "Base de Données", professor: "Dr. Youssef Benali", students: 48, credits: 6, semester: "S3" },
  { id: 4, name: "Réseaux Informatiques", professor: "Dr. Omar Alaoui", students: 41, credits: 5, semester: "S3" },
  { id: 5, name: "Algorithmique", professor: "Dr. Salma Idrissi", students: 50, credits: 5, semester: "S3" },
];

export function CourseManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Cours</h1>
          <p className="text-gray-600">{courses.length} cours actifs</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Ajouter un cours
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100 hover:border-blue-300 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{course.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{course.professor}</p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t-2 border-gray-100">
              <div>
                <div className="text-2xl font-bold text-blue-600">{course.students}</div>
                <div className="text-xs text-gray-500">Étudiants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{course.credits}</div>
                <div className="text-xs text-gray-500">Crédits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{course.semester}</div>
                <div className="text-xs text-gray-500">Semestre</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
