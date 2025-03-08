import { useState } from "react";
import {
  FaQuestion,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What insurance do you accept?",
    answer:
      "We accept most major insurance providers including Medicare, Blue Cross Blue Shield, Aetna, and Cigna. Please contact our office for a complete list.",
    category: "Insurance",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office, using our online booking system, or sending us an email. Emergency cases are always given priority.",
    category: "Appointments",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open Monday through Friday from 8:00 AM to 8:00 PM, Saturday from 8:00 AM to 2:00 PM, and closed on Sundays except for emergencies.",
    category: "General",
  },
  // Add more FAQ items as needed
];

const FloatingFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<FAQItem | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* FAQ Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 cursor-pointer"
        aria-label="Toggle FAQ"
      >
        {isOpen ? <FaTimes size={24} /> : <FaQuestion size={24} />}
      </button>

      {/* FAQ Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="text-lg font-semibold">
              {selectedQuestion ? (
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="flex items-center gap-2"
                >
                  <FaChevronLeft /> Back to FAQs
                </button>
              ) : (
                "Frequently Asked Questions"
              )}
            </h3>
          </div>

          {/* Search Bar */}
          {!selectedQuestion && (
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-h-[400px] overflow-y-auto">
            {selectedQuestion ? (
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">
                  {selectedQuestion.question}
                </h4>
                <p className="text-gray-600">{selectedQuestion.answer}</p>
              </div>
            ) : (
              <div className="divide-y">
                {filteredFAQs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedQuestion(faq)}
                    className="cursor-pointer w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {faq.question}
                      </p>
                      <span className="text-sm text-primary">
                        {faq.category}
                      </span>
                    </div>
                    <FaChevronRight className="text-gray-400 group-hover:text-primary transition-colors duration-200" />
                  </button>
                ))}
                {filteredFAQs.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No FAQs found matching your search.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-4 text-center text-sm text-gray-500">
            Can't find what you're looking for?{" "}
            <a href="/contact-us" className="text-primary hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingFAQ;
