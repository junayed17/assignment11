import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-12 px-4">
      
      {/* মেইন হেডিং */}
      <h2
            className="text-3xl md:text-4xl font-extrabold text-base-content mb-3 tracking-tight heading"
            data-aos="zoom-in"
          >
{heading.split(" ")[0]+" "}<span className="text-blue-600">{heading.split(" ")[1]+" "}</span>{heading.split(" ").splice(2).join(" ")}
          </h2>
      <div
        className="relative h-1.5 w-40 mx-auto mb-6 overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-full"
        data-aos="fade-up"
      >
        <div
          className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
          data-aos="slide-right"
          data-aos-delay="200"
        ></div>
      </div>

      {/* সাব হেডিং */}
      {subHeading && (
        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed bodyFont"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
