import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group mb-4">
      <div
        className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
          isOpen
            ? "border-blue-500 bg-base-300 dark:bg-base-900 shadow-xl shadow-blue-500/10 scale-[1.02]"
            : "border-base-100 dark:border-base-800 bg-white/50 dark:bg-base-900/50 hover:border-blue-200 dark:hover:border-blue-900"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-6 text-left transition-all"
        >
          <div className="flex items-center gap-4">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold transition-all duration-500 ${
                isOpen
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 dark:bg-blue-900/30 text-blue-600"
              }`}
            >
              ?
            </span>
            <span
              className={`heading text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                isOpen
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-base-800 dark:text-base-200"
              }`}
            >
              {question}
            </span>
          </div>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
              isOpen
                ? "bg-blue-600 text-white rotate-180"
                : "bg-base-50 dark:bg-base-800 text-base-400"
            }`}
          >
            <HiChevronDown size={24} />
          </div>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 sm:px-11 pb-8 pt-2">
            <p className="text-base-content/60 text-sm bodyFont leading-relaxed italic">
              {answer}
            </p>
          </div>
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
        "Browse our collection, select your book, and click 'Order Now'. Fill in your details in our secure checkout form, and we'll handle the rest. You'll receive a confirmation via SMS.",
    },
    {
      id: 2,
      question: "What are the delivery timelines?",
      answer:
        "For orders within Dhaka, we deliver within 48 hours. For nationwide delivery, it typically takes 3 to 5 business days depending on your location.",
    },
    {
      id: 3,
      question: "Is there a return policy?",
      answer:
        "Absolutely. If the book is damaged or doesn't match the description, you can initiate a return within 7 days of delivery for a full replacement or refund.",
    },
    {
      id: 4,
      question: "Which payment methods are secure?",
      answer:
        "We offer end-to-end encrypted payments via only stripe as well as a reliable Cash on Delivery option for your peace of mind.",
    },
  ];

  return (
    <section className="relative overflow-hidden dark:bg-base-950">
      {/* Subtle Background Glows for that Professional Look */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]"></div>
      <div className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]"></div>

      <div className="relative mx-auto max-w-4xl px-2">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 text-blue-600 dark:text-blue-400">
            <FiHelpCircle className="animate-spin-slow" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Support Center
            </span>
          </div>
          <SectionTitle heading="FREQUENTLY ASKED QUESTIONS" subHeading=" Everything you need to know about BookCurier orders, shipping, and
            more."/>
        </div>

        <div className="bg-base-100">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Pro Footer */}
        {/* <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-dashed border-base-200 dark:border-base-800 p-8 md:flex-row">
          <div>
            <h4 className="font-bold dark:text-white heading">
              Still have questions?
            </h4>
            <p className="text-sm text-base-500">
              We're available 24/7 to help you.
            </p>
          </div>
          <button className="rounded-2xl bg-base-900 px-8 py-4 font-bold text-white transition-all hover:bg-blue-600 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700">
            Contact Support
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;
