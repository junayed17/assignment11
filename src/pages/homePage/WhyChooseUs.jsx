import React from 'react';
import SectionTitle from "../../components/ScetionTitleAndSubTitle";

const WhyChooseUs = () => {
  const features = [
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
  ];

  return (
    <section className="bg-transparent">
      <div className="my-10 text-center">
        {/* Section Header - Book কার্ডের হেডিং স্টাইল ফলো করা হয়েছে */}
        <SectionTitle heading="Why Choose Us" subHeading="We make book shopping easy and enjoyable with premium services."/>
        {/* <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-base-content mb-3 tracking-tight heading"
            data-aos="fade-up"
          >
            Why <span className="text-blue-600">Choose</span> Us
          </h2>
          <div
            className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          ></div>
          <p 
            className="text-base-content/70 text-lg max-w-2xl mx-auto bodyFont" 
            data-aos="fade-up"
          >
            
          </p>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-base-100 rounded-[2rem] p-8 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-300 flex flex-col items-center text-center h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* মেইন হোভার এনিমেশন (আপনার দেয়া ব্লু ইফেক্ট) */}
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-full group-hover:h-80 opacity-10"></span>
              
              {/* Icon Section (Book কার্ডের ব্যাজ স্টাইলের সাথে মিল রেখে) */}
              <div className="relative z-10 mb-6 w-20 h-20 flex items-center justify-center bg-base-300/50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-extrabold text-base-content heading mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* কার্ডের নিচের গ্রেডিয়েন্ট বর্ডার (Book কার্ডের মতো হুবহু) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;