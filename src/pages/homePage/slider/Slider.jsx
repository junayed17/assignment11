import React, { useEffect, useRef, useState } from "react";
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
    imgUrl:
      "https://i.ibb.co.com/QvfSrHK9/240-F-1588280817-mgs6-W5-L9ot2-H83uxt8-C38-Pzg-Xbp-Z5r-GB.jpg",
    title: "Fast & Reliable Book Delivery , Anywhere in Your City!",
    subTitle: "Order today, get your book at your doorstep within 24 hours.",
  },
  {
    imgUrl:
      "https://i.ibb.co.com/ZzbyLt6v/book-open-pages-close-up-600nw-2562942291.webp",
    title: "Cheapest Delivery Charge , No Hidden Fees",
    subTitle: "Pay only for what you send. No extra charge. No surprise cost.",
  },
  {
    imgUrl: "https://i.ibb.co.com/pvxjF22y/book-stack.png",
    title: "Track Your Book in Real Time",
    subTitle: "Know exactly where your courier is — live location tracking.",
  },
  {
    imgUrl:
      "https://i.ibb.co.com/8gLHg14m/cardboard-boxes-bubble-wrap-adhesive-tape-scissors-dark-grey-table-247612398.webp",
    title: "Safe Packaging — Your Books Stay Perfect",
    subTitle: "Every book is carefully bubble-wrapped and waterproof sealed.",
  },
];

export default function Slider() {
  return (
    <div className="mt-24 overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, ]}
        className="mySwiper"
      >
        {img.map((ele) => {
          return (
            <SwiperSlide>
              <div className="relative h-[70vh] w-full rounded-2xl overflow-hidden">
                <img src={ele.imgUrl} className="w-full h-full object-cover" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    text-white text-center z-10  px-4 md:px-8  backdrop-blur-sm bg-black/40  rounded-xl py-2 sm:py-6
                  dark:bg-white/20 dark:text-white
                  duration-300
                  transform hover:scale-101
                  w-[80%] mx-auto 
                  "
                >
                  <h2 className=" text-[1.25rem] sm:text-2xl md:text-3xl md:text-4xl font-bold md:mb-4 leading-tight heading">
                    {ele.title}
                  </h2>

                  <p className="text-sm md:text-lg opacity-90 font-body">
                    {ele.subTitle}
                  </p>

                  <Link
                    to="/books"
                    className="relative hidden sm:inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group mt-2"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute bottom-0 left-0 h-full -ml-2">
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
                    <span className="absolute top-0 right-0 w-12 h-full -mr-3">
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
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                    <span class="relative text-base font-semibold heading">
                      Explore Books
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
