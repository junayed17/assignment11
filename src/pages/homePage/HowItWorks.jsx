import React from "react";
import { Link } from "react-router";

const HowWork = [
  {
    to: "/login",
    heading: "Create an Account",
    subHeading:
      "   Sign up using your email to start buying and managing books.",
    serial: 1,
    img: "https://cdni.iconscout.com/illustration/premium/thumb/online-registration-illustration-svg-download-png-6381808.png",
  },
  {
    to: "/books",
    heading: "Browse & Select Books",
    subHeading:
      " Explore categories, search books, and add your favorites to cart.",
    serial: 2,
    img: "https://i.ibb.co.com/6crRcd5H/book-stack-removebg-preview.png",
  },
  {
    to: "/myOrders",
    heading: "Place Order & Receive",
    subHeading:
      "      Checkout securely and get your books delivered to your doorstep.",
    serial: 3,
    img: "https://i.ibb.co.com/NfJwrPY/1000-F-1758409030-5sy-Nva03ztc-CQROIM9-VTyh-Jyl3-M2iqw6-removebg-preview.png",
  },
];
const HowItWork = () => {
  return (
    <section className="py-16 px-6  bg-base-300 rounded-2xl transition-color ">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <h2
            className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 heading"
            data-aos="fade-up"
          >
            How It Works
          </h2>
        </div>
        <p className="mt-4 text-blue-300 bodyFont" data-aos="fade-up">
          Buying books is simple, fast, and secure
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">
        {/* Step 1 */}
        {HowWork.map((work) => (
          <Link
            to={work.to}
            className="relative bg-base-200  p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={work.img}
              alt="Create account"
              className="w-40 mb-6 transition-transform duration-300 hover:scale-105"
            />

            <h3 className="text-xl font-semibold text-base-800 0 mb-2 headingFont">
              {work.heading}
            </h3>
            <p className="text-gray-400 text-sm bodyFont">{work.subHeading}</p>

            <div className="absolute -top-7 left-1/2 -translate-x-1/2 heading">
              <h4
                className="text-blue-600  font-bold text-xl 
              w-14 h-14 flex items-center justify-center rounded-full 
              border-2 border-blue-500 
              shadow-[0_0_15px_rgba(59,130,246,0.6)] 
              bg-base "
              >
                {work.serial}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
