import React from "react";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";
import { FaBookReader, FaShippingFast, FaShieldAlt } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaBookReader className="text-3xl text-blue-500" />,
      title: "Wide Collection",
      desc: "Access thousands of books across various categories from fiction to science.",
    },
    {
      icon: <FaShippingFast className="text-3xl text-emerald-500" />,
      title: "Fast Delivery",
      desc: "Get your favorite books delivered to your doorstep within the shortest time.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-500" />,
      title: "Secure Exchange",
      desc: "Our librarian-verified system ensures every book exchange is safe and authentic.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Gradients (Match with your AddBook design) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[25rem] h-[25rem] bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-[80px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-8 relative z-10">
        <SectionTitle
          heading={"Our Story"}
          subHeading="Connecting readers, one book at a time"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
              Welcome to <span className="text-blue-500">BookCurier</span>, Your
              Personal Library Hub.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              BookCurier is not just a platform; it's a community for book
              lovers. Whether you want to share your collection, find a rare
              edition, or manage your reading list, we provide the tools to make
              it happen. Our mission is to make literature accessible to
              everyone, everywhere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-blue-100 dark:border-gray-800 bg-blue-50/30 dark:bg-gray-900/50">
                <span className="block text-2xl font-bold text-blue-600">
                  5000+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Books Shared
                </span>
              </div>
              <div className="p-4 rounded-xl border border-purple-100 dark:border-gray-800 bg-purple-50/30 dark:bg-gray-900/50">
                <span className="block text-2xl font-bold text-purple-600">
                  1200+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Happy Readers
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group flex gap-6 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
