import { useState } from "react";
import { AiOutlineQuestionCircle, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in starts from 2:00 PM and check-out is by 11:00 AM.",
  },
  {
    question: "Is free Wi-Fi available in the hotel?",
    answer: "Yes, high-speed free Wi-Fi is available in all rooms and public areas.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Sorry, pets are not allowed in our hotel.",
  },
  {
    question: "Do I need to pay an advance for room booking?",
    answer: "Yes, a 30% advance payment of the total room price is required to confirm the booking.",
  },
  {
    question: "Does the hotel offer airport shuttle service?",
    answer: "Yes, we provide airport shuttle service at an additional charge.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 dark:text-gray-100 font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-2">
                <AiOutlineQuestionCircle className="w-5 h-5 text-indigo-500" />
                <span>{faq.question}</span>
              </div>
              {openIndex === index ? (
                <AiOutlineMinus className="w-5 h-5 text-indigo-500" />
              ) : (
                <AiOutlinePlus className="w-5 h-5 text-indigo-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
