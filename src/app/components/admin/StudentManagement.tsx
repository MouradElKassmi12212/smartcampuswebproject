import { useState } from "react";
import { Search, Edit, Trash2, Plus, X, Save } from "lucide-react";

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  year: string;
  average: number;
  status: string;
}

const initialStudents: Student[] = [
  {
    id: "UPF-2022-1234",
    firstName: "Ahmed",
    lastName: "Salmi",
    email: "ahmed.salmi@upf.ac.ma",
    phone: "+212 6 12 34 56 78",
    program: "Licence Informatique",
    year: "3ème année",
    average: 15.5,
    status: "Actif",
  },
  {
    id: "UPF-2022-5678",
    firstName: "Salma",
    lastName: "Benjelloun",
    email: "salma.benjelloun@upf.ac.ma",
    phone: "+212 6 23 45 67 89",
    program: "Master Informatique",
    year: "1ère année",
    average: 16.2,
    status: "Actif",
  },
  {
    id: "UPF-2021-9012",
    firstName: "Youssef",
    lastName: "Alami",
    email: "youssef.alami@upf.ac.ma",
    phone: "+212 6 34 56 78 90",
    program: "Licence Gestion",
    year: "2ème année",
    average: 14.8,
    status: "Actif",
  },
  {
    id: "UPF-2023-3456",
    firstName: "Fatima",
    lastName: "Idrissi",
    email: "fatima.idrissi@upf.ac.ma",
    phone: "+212 6 45 67 89 01",
    program: "Licence Informatique",
    year: "1ère année",
    average: 15.9,
    status: "Actif",
  },
  {
    id: "UPF-2022-7890",
    firstName: "Karim",
    lastName: "Alaoui",
    email: "karim.alaoui@upf.ac.ma",
    phone: "+212 6 56 78 90 12",
    program: "Licence Gestion",
    year: "3ème année",
    average: 13.5,
    status: "Actif",
  },
];

export function StudentManagement() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (student: Student) => {
    setEditingStudent({ ...student });
    setShowEditModal(true);
  };

  const handleSave = () => {
    if (editingStudent) {
      setStudents(
        students.map((s) => (s.id === editingStudent.id ? editingStudent : s))
      );
      setShowEditModal(false);
      setEditingStudent(null);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Étudiants</h1>
          <p className="text-gray-600">{students.length} étudiants inscrits</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Ajouter Étudiant
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 border-2 border-gray-100">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un étudiant par nom, ID ou email..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-900">ID</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Nom Complet</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Email</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Téléphone</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Programme</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Moyenne</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Statut</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">{student.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      {student.firstName} {student.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{student.year}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.program}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`font-semibold ${
                      student.average >= 16 ? 'text-green-600' :
                      student.average >= 14 ? 'text-blue-600' :
                      student.average >= 12 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {student.average}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Modifier l'étudiant</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    value={editingStudent.firstName}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    value={editingStudent.lastName}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={editingStudent.email}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={editingStudent.phone}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Programme</label>
                <input
                  type="text"
                  value={editingStudent.program}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, program: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Année</label>
                  <input
                    type="text"
                    value={editingStudent.year}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, year: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Moyenne</label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingStudent.average}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, average: parseFloat(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
