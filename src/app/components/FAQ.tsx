import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment s'inscrire à l'Université Privée de Fès?",
    answer: "L'inscription se fait en ligne via notre portail. Vous devez soumettre votre dossier avec vos relevés de notes, une copie de votre diplôme, et une lettre de motivation. Notre équipe d'admission vous contactera sous 48h.",
  },
  {
    question: "Quels sont les frais de scolarité?",
    answer: "Les frais varient selon le programme choisi. Pour une licence, comptez entre 30,000 et 40,000 MAD par an. Des bourses d'excellence sont disponibles pour les meilleurs étudiants.",
  },
  {
    question: "Y a-t-il des résidences universitaires?",
    answer: "Oui, nous disposons de résidences modernes à proximité du campus avec connexion Wi-Fi, salles d'étude et espaces communs. Contactez notre service logement pour plus d'informations.",
  },
  {
    question: "Les diplômes sont-ils reconnus?",
    answer: "Tous nos diplômes sont accrédités par le Ministère de l'Éducation Nationale et reconnus au niveau national et international grâce à nos partenariats européens.",
  },
  {
    question: "Comment accéder au portail étudiant?",
    answer: "Vous recevrez vos identifiants de connexion par email lors de votre inscription. Le portail vous permet d'accéder à vos notes, emploi du temps, ressources pédagogiques et de gérer vos demandes administratives.",
  },
  {
    question: "Des stages sont-ils proposés?",
    answer: "Absolument! Nous avons des partenariats avec plus de 100 entreprises locales et internationales. Notre service des stages vous accompagne dans votre recherche et vos démarches.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600">
            Trouvez des réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Vous avez d'autres questions?</h3>
          <p className="mb-6 text-blue-100">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter!
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-semibold">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
}
