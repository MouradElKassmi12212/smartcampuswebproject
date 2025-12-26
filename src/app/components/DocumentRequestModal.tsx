import { useState } from "react";
import { X, FileText, Download } from "lucide-react";

interface DocumentRequestModalProps {
  onClose: () => void;
}

const documentTypes = [
  { id: "attestation", name: "Attestation de scolarité", delay: "24h" },
  { id: "releve", name: "Relevé de notes", delay: "48h" },
  { id: "certificat", name: "Certificat de réussite", delay: "48h" },
  { id: "stage", name: "Convention de stage", delay: "24h" },
  { id: "inscription", name: "Certificat d'inscription", delay: "24h" },
  { id: "autre", name: "Autre document", delay: "72h" },
];

export function DocumentRequestModal({ onClose }: DocumentRequestModalProps) {
  const [selectedDoc, setSelectedDoc] = useState("");
  const [copies, setCopies] = useState(1);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDoc) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande envoyée!</h3>
          <p className="text-gray-600">
            Votre demande de document a été soumise avec succès. Vous recevrez une notification par email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Demander un document</h2>
            <p className="text-gray-600">Sélectionnez le type de document souhaité</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Document Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Type de document *
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {documentTypes.map((doc) => (
                <label
                  key={doc.id}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedDoc === doc.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="document"
                    value={doc.id}
                    checked={selectedDoc === doc.id}
                    onChange={(e) => setSelectedDoc(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-start gap-3">
                    <FileText className={`w-5 h-5 flex-shrink-0 ${
                      selectedDoc === doc.id ? "text-blue-600" : "text-gray-400"
                    }`} />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{doc.name}</div>
                      <div className="text-xs text-gray-500">Délai: {doc.delay}</div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Number of Copies */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre d'exemplaires
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={copies}
              onChange={(e) => setCopies(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notes additionnelles (optionnel)
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Précisez toute information complémentaire..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Info Box */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong>Important:</strong> Les documents seront disponibles dans votre espace personnel une fois prêts. Vous recevrez également une notification par email.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={!selectedDoc}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Soumettre la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
