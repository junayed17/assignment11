import React from "react";
import { FaFire, FaPenNib, FaTag } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ bookSetails }) => {
  const {
    image1,
    image2,
    author,
    title,
    price = 100,
    category,
    _id,
  } = bookSetails;

  return (
    <div
      className="group relative bg-base-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-300 flex flex-col h-full"
      data-aos="fade-up"
    >
      {/* ইমেজ সেকশন উইথ হোভার ইফেক্ট */}
      <figure className="relative h-80 overflow-hidden">
        {/* মেইন ইমেজ */}
        <img
          src={image1}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-base-300 -z-10"></div>
        {/* হোভার করলে যে ২য় ইমেজ আসবে (স্মুথ ফেড ইন) */}
        <img
          src={image2 || image1}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"
        />

        {/* টপ ব্যাজ (Category) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 dark:bg-black/60 backdrop-blur-md text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            {category}
          </span>
        </div>
      </figure>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-base-200/50">
        {/* টাইটেল এবং প্রাইস */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h2 className="text-xl font-extrabold text-base-content heading line-clamp-2 leading-tight flex-grow">
            {title}
          </h2>
          <div className="flex items-center text-xl font-black text-blue-600 heading">
            <FaBangladeshiTakaSign className="text-sm" />
            <span>{price}</span>
          </div>
        </div>

        {/* অথর এবং ডিটেইলস (KBD স্টাইলড) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 bg-base-300/50 px-3 py-1.5 rounded-xl transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 group/author">
            <FaPenNib className="text-blue-500 text-xs transition-transform group-hover/author:rotate-12" />
            <span className="text-xs font-bold opacity-80 uppercase tracking-tighter">
              {author.split(" ")[0]}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-base-300/50 px-3 py-1.5 rounded-xl">
            <FaFire className="text-orange-500 text-xs animate-pulse" />
            <span className="text-xs font-bold opacity-80 uppercase tracking-tighter">
              10k+ Views
            </span>
          </div>
        </div>

        {/* অ্যাকশন বাটন */}
        <Link
          to={`/book/details/${_id}`}
          className="relative w-full py-4 mt-auto overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center"
        >
          {/* বাটন এনিমেশন ইফেক্টস */}
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>

          <div className="relative flex items-center justify-center gap-2">
            <span className="uppercase tracking-[0.2em] text-xs">
              View Details
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* কার্ডের নিচে একটি সূক্ষ্ম গ্রেডিয়েন্ট বর্ডার হোভার ইফেক্ট */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default Book;
