import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-4 transition-all duration-300 rounded-2xl border ${
        isOpen
          ? "border-blue-500/50 bg-blue-50/30 dark:bg-blue-900/10 shadow-sm"
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-all"
      >
        <span
          className={`heading text-base md:text-lg font-bold tracking-tight ${
            isOpen
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {question}
        </span>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
            isOpen
              ? "bg-blue-600 text-white rotate-180"
              : "bg-gray-100 dark:bg-gray-800 text-gray-500"
          }`}
        >
          {isOpen ? <HiOutlineMinus size={18} /> : <HiOutlinePlus size={18} />}
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 text-gray-600 dark:text-gray-400 bodyFont leading-relaxed text-sm md:text-base border-t border-gray-100 dark:border-gray-800 mt-2 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        "Browse our collection, select your book, and click 'Order Now'. Fill in your details in our secure checkout form, and we'll handle the rest.",
    },
    {
      id: 2,
      question: "What are the delivery timelines?",
      answer:
        "Orders within Dhaka are delivered within 48 hours. Nationwide delivery takes 3 to 5 business days.",
    },
    {
      id: 3,
      question: "Is there a return policy?",
      answer:
        "Yes. If the book is damaged or doesn't match the description, you can return it within 7 days.",
    },
    {
      id: 4,
      question: "Which payment methods are secure?",
      answer:
        "We accept bKash, Nagad, and Rocket, along with a Cash on Delivery (COD) option.",
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Minimalist Header */}
        <div className="text-center mb-12">
          <h2 className="heading text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Common <span className="text-blue-600">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Simple Professional Footer */}
        <div className="mt-12 text-center rounded-[2.5rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 font-bold bodyFont mb-4 uppercase tracking-widest text-xs">
            Still need help?
          </p>
          <button className="px-10 py-4 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-sm uppercase tracking-widest">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
