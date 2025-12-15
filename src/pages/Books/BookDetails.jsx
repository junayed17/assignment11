import React, { useEffect, useState } from "react";
import img1 from "../../assets/0bfad7aa-9e1b-4802-b958-879cefd2efe1.jfif";
import img2 from "../../assets/8841be02-d0ea-4f43-a1a5-c58a4d00d695.jfif";
import {
  FaWhatsapp,
  FaHeart,
  FaStar,
  FaBookOpen,
  FaUserEdit,
} from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import Loader from "../../components/Loader";
import useAuthHook from "../../customHook/useAuthHook";

const BookDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuthHook();
  const { data } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/books/${id}`);
      return result.data;
    },
  });
  const [img, setImg] = useState();
  useEffect(() => {
    if (data?.image1) {
      setImg(data.image1);
    }
  }, [data]);
  if (!data) {
    return <Loader />;
  }
console.log(user);

  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 min-h-screen py-14 rounded-2xl my-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl group bg-base-100">
              <img
                src={img}
                alt="Book Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              {[data.image1, data.image2].map((image, i) => (
                <img
                  key={i}
                  src={image}
                  onClick={() => setImg(image)}
                  className={`w-20 h-28 rounded-xl object-cover cursor-pointer border-2 transition
              ${
                img === image
                  ? "border-primary scale-105"
                  : "border-base-300 hover:border-primary"
              }`}
                />
              ))}
            </div>

            <span className="absolute top-4 left-4 bg-primary text-primary-content px-4 py-1 rounded-full text-sm shadow heading">
              New Arrival
            </span>
          </div>

          {/* DETAILS */}
          <div className="space-y-6 text-base-content">
            <h1 className="text-4xl font-extrabold leading-tight heading">
              {data.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-warning text-lg md:text-2xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="opacity-40" />
              <span className="text-sm sm:text-lg text-base-content/70 bodyFont">
                (4.5 • 1.2k reviews)
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm sm:text-lg  bodyFont">
                <FaBookOpen /> {data.category}
              </span>
              <span className="flex items-center gap-2 text-base-content/80 text-sm sm:text-lg bodyFont">
                <FaUserEdit /> {data.author}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary flex items-center justify-center heading">
                <FaBangladeshiTakaSign />
                <span>{data.price}</span>
              </span>
              <span className="text-sm md:text-lg bodyFont bg-error/10 text-error px-3 py-1 rounded-full">
                25% OFF
              </span>
            </div>

            {/* Description */}
            <p className="leading-relaxed text-sm md:text-lg bodyFont text-base-content/80">
              {data.instruction}
            </p>

            {/* Contact */}
            <div className="flex items-center gap-3 text-success font-semibold">
              <FaWhatsapp className="text-2xl" />
              <span className="text-sm sm:text-lg">0{data.contact}</span>
            </div>

            {/* CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-center">
              <Link
                class="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 mx-4"
                type="button"
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
                  Buy Now
                </span>
              </Link>

              <button
                className="
                h-15
    flex items-center justify-center gap-x-2
    border-2 border-red-300
    hover:border-error hover:bg-error/10
     px-4
    rounded
    text-base font-semibold
    text-base-content
    transition-all duration-300
    heading
    leading-none
    mx-4
  "
              >
                <FaHeart className="text-error text-lg transition-transform duration-300 group-hover:scale-110" />
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
