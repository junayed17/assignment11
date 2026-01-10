import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";

const Partners = () => {
  const partnerLogos = [
    { id: 1, src: "https://www.panjeree.com/assets/images/logo.png", alt: "Panjeree Publication", to: "https://www.panjeree.com/" },
    { id: 2, src: "https://publishers.com.bd/Image/Thumb/300/001/013/12304.png", alt: "Ononna Publication", to: "https://publishers.com.bd/Anannya/" },
    { id: 3, src: "https://publishers.com.bd/Image/Thumb/300/001/013/12291.png", alt: "Sahitto Prokash", to: "https://publishers.com.bd/ShahityaPrakash" },
    { id: 4, src: "https://lecturepublicationsbd.com/wp-content/uploads/2023/08/logo.png", alt: "Lecture Publication", to: "https://lecturepublicationsbd.com/" },
    { id: 5, src: "https://bskbd.org/assets/img/logo_bn2.png", alt: "বিশ্বসাহিত্য কেন্দ্র", to: "https://www.bskbd.org/" },
    { id: 6, src: "http://gyankoshprokashoni.com/assets/images/logo/logo.png", alt: "জ্ঞানকোষ প্রকাশনী", to: "http://www.gyankoshprokashoni.com/" },
  ];

  return (
    <section className="my-16 max-w-[1440px] mx-auto px-4 overflow-visible">
      <SectionTitle 
        heading="Our Partners" 
        subHeading="We collaborate with trusted organizations and marketplaces to bring you the best." 
      />

      {/* Marquee Container with Tooltip Space */}
      <div className="mt-12 py-10 relative overflow-visible">
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={true}
          // এটি ম্যাজিকের মতো কাজ করবে: CSS ভেরিয়েবল ব্যবহার করে থিমের সাথে মিলবে
          gradientColor="var(--marquee-color)" 
          gradientWidth={120}
          autoFill={true}
          className="overflow-visible"
        >
          {partnerLogos.map((partner) => (
            <div 
              key={partner.id} 
              className="tooltip tooltip-top mx-10 before:text-[10px] before:font-bold before:bg-blue-600 after:border-t-blue-600" 
              data-tip={partner.alt}
            >
              <Link to={partner.to} target="_blank" className="block">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-20 w-auto object-contain transition-all duration-300 hover:scale-110 cursor-pointer dark:brightness-95 dark:contrast-110"
                />
              </Link>
            </div>
          ))}
        </Marquee>

        {/* ডাইনামিক কালার কন্ট্রোল - যা থিমের সাথে অটোমেটিক মিলবে */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root { --marquee-color: white; }
          [data-theme='dark'], .dark { --marquee-color: #1d232a; } /* এটি DaisyUI ডার্ক থিমের মেইন কালার */
        `}} />
      </div>
    </section>
  );
};

export default Partners;