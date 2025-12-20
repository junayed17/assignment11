import React from 'react';
import { FaFire, FaPenNib, FaTag } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router';

const Book = ({ bookSetails }) => {
  const { image1, image2, author, title, price = 100, category ,_id} = bookSetails;

  
  return (
    <div
      className="card card-sm bg-base-200 w-full shadow transorm hover:scale-105 duration-300"
      data-aos="fade-up"
    >
      <figure className="hover-gallery h-96 overflow-hidden relative">
        <img
          src={image1}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={image2}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={image1}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title flex items-start justify-between gap-2">
          <span className="text-2xl  font-semibold text-gray-800 heading line-clamp-2">
            {title}
          </span>

          <span className="text-2xl font-bold text-blue-600 whitespace-nowrap heading flex items-center justify-center">
            <FaBangladeshiTakaSign /> <span>{price}</span>
          </span>
        </h2>
        <div className="flex items-center gap-2 justify-between mt-3">
          <kbd className="kbd transform hover:scale-105 duration-300">
            <FaPenNib className="text-indigo-500 bodyFont" />
            <span className="text-gray-700 bodyFont text-sm sm:text-lg p-2 inline-block heading">
              {author.split(" ")[0]}
            </span>
          </kbd>
          <kbd className="kbd transform hover:scale-105 duration-300">
            <FaTag className="text-sky-500" />
            <span className="text-gray-700 bodyFont text-sm sm:text-lg p-2 inline-block heading">
              {category}
            </span>
          </kbd>
          <kbd className="kbd transform hover:scale-105 duration-300">
            <FaFire className="text-orange-500" />
            <span className="text-gray-700 bodyFont text-sm sm:text-lg p-2 inline-block heading">
              10k
            </span>
          </kbd>
        </div>
      </div>
      <Link
        class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 mx-4"
        type="button"
        to={`/book/details/${_id}`}
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-full group-hover:h-56"></span>
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
        <span class="relative text-sm md:text-lg font-bold heading">
          View Details
        </span>
      </Link>
    </div>
  );
};

export default Book;