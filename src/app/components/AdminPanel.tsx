import { useState } from "react";
import { ArrowLeft, Users, BookOpen, FileText, Settings, BarChart3, Calendar, Mail } from "lucide-react";
import { AdminDashboard } from "./admin/AdminDashboard";
import { StudentManagement } from "./admin/StudentManagement";
import { CourseManagement } from "./admin/CourseManagement";
import { RequestManagement } from "./admin/RequestManagement";
import { StatisticsPanel } from "./admin/StatisticsPanel";

interface AdminPanelProps {
  onBack: () => void;
}

type AdminView = "dashboard" | "students" | "courses" | "requests" | "statistics";

export function AdminPanel({ onBack }: AdminPanelProps) {
  const [currentView, setCurrentView] = useState<AdminView>("dashboard");

  const menuItems = [
    { id: "dashboard" as AdminView, label: "Tableau de bord", icon: BarChart3 },
    { id: "students" as AdminView, label: "Gestion Étudiants", icon: Users },
    { id: "courses" as AdminView, label: "Gestion Cours", icon: BookOpen },
    { id: "requests" as AdminView, label: "Demandes", icon: FileText },
    { id: "statistics" as AdminView, label: "Statistiques", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1">Admin Panel</h2>
          <p className="text-sm text-gray-400">Université Privée de Fès</p>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentView === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Déconnexion
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {currentView === "dashboard" && <AdminDashboard />}
          {currentView === "students" && <StudentManagement />}
          {currentView === "courses" && <CourseManagement />}
          {currentView === "requests" && <RequestManagement />}
          {currentView === "statistics" && <StatisticsPanel />}
        </div>
      </main>
    </div>
  );
}
