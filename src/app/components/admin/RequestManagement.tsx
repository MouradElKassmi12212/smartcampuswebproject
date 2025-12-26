import { FileText, CheckCircle, XCircle, Clock } from "lucide-react";

const requests = [
  { id: 1, student: "Ahmed Salmi", type: "Attestation de scolarité", date: "20 Déc 2024", status: "En attente" },
  { id: 2, student: "Salma Benjelloun", type: "Relevé de notes", date: "19 Déc 2024", status: "Approuvé" },
  { id: 3, student: "Youssef Alami", type: "Convention de stage", date: "18 Déc 2024", status: "En attente" },
  { id: 4, student: "Fatima Idrissi", type: "Certificat d'inscription", date: "18 Déc 2024", status: "Rejeté" },
  { id: 5, student: "Karim Alaoui", type: "Attestation de scolarité", date: "17 Déc 2024", status: "Approuvé" },
  { id: 6, student: "Sara Bennani", type: "Relevé de notes", date: "17 Déc 2024", status: "En attente" },
];

export function RequestManagement() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approuvé":
        return "bg-green-100 text-green-700";
      case "Rejeté":
        return "bg-red-100 text-red-700";
      default:
        return "bg-orange-100 text-orange-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approuvé":
        return <CheckCircle className="w-4 h-4" />;
      case "Rejeté":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Demandes</h1>
        <p className="text-gray-600">{requests.length} demandes au total</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
          <div className="text-3xl font-bold text-orange-600 mb-1">
            {requests.filter((r) => r.status === "En attente").length}
          </div>
          <div className="text-sm text-orange-700">En attente</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="text-3xl font-bold text-green-600 mb-1">
            {requests.filter((r) => r.status === "Approuvé").length}
          </div>
          <div className="text-sm text-green-700">Approuvées</div>
        </div>
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="text-3xl font-bold text-red-600 mb-1">
            {requests.filter((r) => r.status === "Rejeté").length}
          </div>
          <div className="text-sm text-red-700">Rejetées</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-900">ID</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Étudiant</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Type de demande</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Statut</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">#{request.id}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{request.student}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{request.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {request.status === "En attente" && (
                        <>
                          <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                            Approuver
                          </button>
                          <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                            Rejeter
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
