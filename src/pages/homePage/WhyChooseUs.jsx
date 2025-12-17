import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 my-8 bg-base-300 rounded-2xl shadow">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className=" text-center my-4">
          <h2
            className=" text-3xl md:text-4xl font-bold text-blue-600 mb-3 heading"
            data-aos="fade-up"
          >
            Why You Us
          </h2>

          <div
            className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          ></div>

          <p className="text-blue-500 text-lg bodyFont" data-aos="fade-up">
            We make book shopping easy and enjoyable
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
          {[
            {
              icon: "📦",
              title: "Fast Delivery",
              desc: "Get your books delivered quickly to your doorstep",
            },
            {
              icon: "💸",
              title: "Affordable Prices",
              desc: "Great deals on all your favorite books",
            },
            {
              icon: "✅",
              title: "Verified Books",
              desc: "Every book is checked for quality and authenticity",
            },
            {
              icon: "🔁",
              title: "Easy Returns",
              desc: "Hassle-free returns if something goes wrong",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-base-200 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
              data-aos="fade-up"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;