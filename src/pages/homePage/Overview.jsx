import React from 'react';
import CountUp from 'react-countup';
import SectionTitle from "../../components/ScetionTitleAndSubTitle";


const Overview = () => {
  const stats = [
    {
      label: "Total Likes",
      value: 25.6,
      suffix: "K",
      desc: "21% more than last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "text-primary"
    },
    {
      label: "Page Views",
      value: 2.2,
      suffix: "M",
      desc: "21% more than last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-secondary"
    },
    {
      label: "Total book sell",
      value: 86,
      suffix: "%",
      desc: "this is huge",
      isAvatar: true,
      image: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
      color: "text-success"
    }
  ];

  return (
    <div className="my-10 text-center">
      {/* Section Header */}
      <SectionTitle heading="Our Overview" subHeading="A quick snapshot of our bookCourier’s activity and growth"/>
      {/* <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-base-content mb-3 heading uppercase tracking-tight"
          data-aos="fade-up"
        >
          Our <span className="text-blue-600">Overview</span>
        </h2>
        <div
          className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-4"
          data-aos="fade-up"
        ></div>
        <p className="text-base-content/70 text-lg bodyFont max-w-xl mx-auto" data-aos="fade-up">
          A quick snapshot of our bookCourier’s activity and growth
        </p>
      </div> */}

      {/* Stats Container */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group relative bg-base-100 border border-base-300 rounded-[2rem] p-8 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center md:items-start"
          >
            {/* আপনার সেই সিগনেচার ব্লু হোভার ইফেক্ট */}
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-blue-600 rounded-full group-hover:w-full group-hover:h-96 opacity-5"></span>

            <div className="flex justify-between w-full items-start relative z-10">
              <div>
                <div className="text-base-content/60 font-bold uppercase tracking-widest text-xs mb-2">
                  {stat.label}
                </div>
                <div className="stat-value text-4xl font-black text-blue-600 heading flex items-center gap-1">
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    decimals={stat.value % 1 !== 0 ? 1 : 0} 
                    duration={2.75} 
                    enableScrollSpy={true} 
                  />
                  <span>{stat.suffix}</span>
                </div>
              </div>

              {/* Icon or Avatar */}
              <div className="relative">
                {stat.isAvatar ? (
                  <div className="avatar avatar-online">
                    <div className="w-14 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                      <img src={stat.image} alt="profile" />
                    </div>
                  </div>
                ) : (
                  <div className={`${stat.color} opacity-80 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.icon}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 relative z-10">
              <div className={`text-sm font-medium ${stat.label === 'Tasks done' ? 'text-secondary' : 'text-base-content/50'}`}>
                {stat.desc}
              </div>
            </div>

            {/* কার্ডের নিচের সেই গ্রেডিয়েন্ট লাইন */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;