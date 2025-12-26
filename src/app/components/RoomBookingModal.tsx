import { useState } from "react";
import { X, MapPin, Users, Clock, Calendar as CalendarIcon } from "lucide-react";

interface RoomBookingModalProps {
  onClose: () => void;
}

const rooms = [
  { id: "a101", name: "Salle A101", capacity: 30, type: "Salle de cours", equipment: "Projecteur, Tableau" },
  { id: "a102", name: "Salle A102", capacity: 25, type: "Salle de cours", equipment: "Projecteur, Tableau" },
  { id: "b201", name: "Lab B201", capacity: 20, type: "Laboratoire", equipment: "20 PC, Projecteur" },
  { id: "b202", name: "Lab B202", capacity: 20, type: "Laboratoire", equipment: "20 PC, Projecteur" },
  { id: "c301", name: "Salle C301", capacity: 50, type: "Amphithéâtre", equipment: "Projecteur, Sono, Micros" },
  { id: "study1", name: "Espace Étude 1", capacity: 8, type: "Salle d'étude", equipment: "Tableau blanc" },
];

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
];

export function RoomBookingModal({ onClose }: RoomBookingModalProps) {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [purpose, setPurpose] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRoom && date && timeSlot && purpose) {
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
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Réservation confirmée!</h3>
          <p className="text-gray-600">
            Votre salle a été réservée avec succès. Vous recevrez un email de confirmation.
          </p>
        </div>
      </div>
    );
  }

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Réserver une salle</h2>
            <p className="text-gray-600">Sélectionnez une salle disponible et un créneau horaire</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choisir une salle *
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rooms.map((room) => (
                <label
                  key={room.id}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedRoom === room.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="room"
                    value={room.id}
                    checked={selectedRoom === room.id}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="sr-only"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${
                        selectedRoom === room.id ? "text-blue-600" : "text-gray-400"
                      }`} />
                      <div className="font-semibold text-gray-900">{room.name}</div>
                    </div>
                    <div className="text-sm text-gray-600">{room.type}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users className="w-4 h-4" />
                      {room.capacity} places
                    </div>
                    <div className="text-xs text-gray-500">{room.equipment}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date *
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Créneau horaire *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none"
                >
                  <option value="">Sélectionner un créneau</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Purpose and Attendees */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Objet de la réservation *
              </label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Ex: Réunion de groupe, Révisions..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre de participants
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  max={selectedRoomData?.capacity || 50}
                  value={attendees}
                  onChange={(e) => setAttendees(parseInt(e.target.value))}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Room Info */}
          {selectedRoomData && (
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <h4 className="font-semibold text-purple-900 mb-2">
                Informations sur la salle sélectionnée
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-purple-800">
                <div>• Capacité: {selectedRoomData.capacity} personnes</div>
                <div>• Type: {selectedRoomData.type}</div>
                <div className="sm:col-span-2">• Équipements: {selectedRoomData.equipment}</div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> Les réservations doivent être faites au moins 24h à l'avance. Vous pouvez annuler votre réservation jusqu'à 2h avant le début du créneau.
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
              disabled={!selectedRoom || !date || !timeSlot || !purpose}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmer la réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
