import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const img = [
  {
    imgUrl: "https://i.ibb.co.com/G4k8Vbdn/istockphoto-1345329817-612x612.jpg",
    title: "Fast & Reliable Book Delivery , Anywhere in Your City!",
    subTitle: "Order today, get your book at your doorstep within 24 hours.",
    cta: "Log In",
    path: "/login",
  },
  {
    imgUrl: "https://i.ibb.co.com/5WY4zQtr/image.png",
    title: "Cheapest Delivery Charge , No Hidden Fees",
    subTitle: "Pay only for what you send. No extra charge. No surprise cost.",
    cta: "Check Delivery Charge",
    path: "/deliveryCharge",
  },
  {
    imgUrl: "https://i.ibb.co.com/3mMSS2NP/istockphoto-2065160250-612x612.jpg",
    title: "Track Your Book in Real Time",
    subTitle: "Know exactly where your courier is — live location tracking.",
    cta: "Track Now",
    path: "/myOrders",
  },
  {
    imgUrl:
      "https://i.ibb.co.com/8gLHg14m/cardboard-boxes-bubble-wrap-adhesive-tape-scissors-dark-grey-table-247612398.webp",
    title: "Safe Packaging — Your Books Stay Perfect",
    subTitle: "Every book is carefully bubble-wrapped and waterproof sealed.",
    cta: "Order Now",
    path: "/allBooks",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper max-h-[85vh]"
      >
        {img.map((ele) => {
          return (
            <SwiperSlide>
              <div className="relative max-h-[85vh] w-full rounded-2xl overflow-hidden">
                <img src={ele.imgUrl} className="w-full" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    text-white text-center z-10"
                >
                  <div
                    className="max-w-xl px-8 ml-10 backdrop-blur-sm bg-black/40 text-white rounded-xl py-6
                  dark:bg-white/20 dark:text-white
                  duration-300
                  transform hover:scale-105"
                  >
                    <h2 className="text-4xl font-bold mb-4 leading-tight font-headings">
                      {ele.title}
                    </h2>

                    <p className="text-lg opacity-90 mb-6 font-body">
                      {ele.subTitle}
                    </p>

                    <Link
                      to={ele.path}
                      class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                    >
                      <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span class="absolute bottom-0 left-0 h-full -ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-auto h-full opacity-100 object-stretch"
                          viewBox="0 0 487 487"
                        >
                          <path
                            fill-opacity=".1"
                            fill-rule="nonzero"
                            fill="#FFF"
                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                          ></path>
                        </svg>
                      </span>
                      <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="object-cover w-full h-full"
                          viewBox="0 0 487 487"
                        >
                          <path
                            fill-opacity=".1"
                            fill-rule="nonzero"
                            fill="#FFF"
                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                          ></path>
                        </svg>
                      </span>
                      <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                      <span class="relative text-base font-semibold">
                        {ele.cta}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
