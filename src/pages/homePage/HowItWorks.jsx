import React from "react";
import { Link } from "react-router";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";

const HowWork = [
  {
    to: "/signup",
    heading: "Create an Account",
    subHeading: "Sign up using your email to start buying and managing books.",
    serial: 1,
    img: "https://cdni.iconscout.com/illustration/premium/thumb/online-registration-illustration-svg-download-png-6381808.png",
  },
  {
    to: "/books",
    heading: "Browse & Select Books",
    subHeading: "Explore categories, search books, and add your favorites to cart.",
    serial: 2,
    img: "https://i.ibb.co.com/6crRcd5H/book-stack-removebg-preview.png",
  },
  {
    to: "/myOrders",
    heading: "Place Order & Receive",
    subHeading: "Checkout securely and get your books delivered to your doorstep.",
    serial: 3,
    img: "https://i.ibb.co.com/NfJwrPY/1000-F-1758409030-5sy-Nva03ztc-CQROIM9-VTyh-Jyl3-M2iqw6-removebg-preview.png",
  },
];

const HowItWork = () => {
  return (
    <section className="my-16 px-4">
      <SectionTitle heading="How IT Works" subHeading="Buying books is simple, fast, and secure" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
        {HowWork.map((work, index) => (
<Link
  key={index}
  to={work.to}
  // এখানে overflow-hidden থাকবে না যাতে সিরিয়াল ব্যাজ দেখা যায়
  className="group relative bg-base-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-300 flex flex-col items-center text-center"
  data-aos="fade-up"
>
  {/* ১. এনিমেশন কন্টেইনার (এটি কার্ডের রাউন্ডেড শেপ মেইনটেইন করবে) */}
  <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none z-0">
    {/* গোল ব্লু এনিমেশন (Hover Effect) */}
    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-blue-600 rounded-full group-hover:w-full group-hover:h-80 opacity-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    
    {/* ২. নিচের গ্রেডিয়েন্ট বর্ডার (এটি এখন এই overflow-hidden কন্টেইনারের ভেতরে থাকায় কোণা দিয়ে বের হবে না) */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </div>

  {/* সিরিয়াল নাম্বার - এটি কন্টেইনারের বাইরে তাই কাটবে না */}
  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
    <h4 className="text-blue-600 font-black text-xl w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-blue-500 shadow-[0_8px_20px_rgba(59,130,246,0.2)] bg-base-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white heading">
      {work.serial}
    </h4>
  </div>

  {/* ইমেজ এবং টেক্সট কন্টেন্ট */}
  <div className="relative z-10 flex flex-col items-center">
    <img
      src={work.img}
      alt={work.heading}
      className="w-40 h-40 object-contain mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
    />
    <h3 className="text-2xl font-extrabold text-base-content mb-3 heading leading-tight group-hover:text-blue-600 transition-colors">
      {work.heading}
    </h3>
    <p className="text-base-content/60 text-sm bodyFont leading-relaxed italic">
      {work.subHeading}
    </p>
  </div>
</Link>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;