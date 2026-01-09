import React from "react";
import Book from "../../components/Book";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";

const LatestBooks = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    error,
    data = [],
    isFetching,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const data = await axiosSecure.get("/books/latest");
      return data.data;
    },
  });
  // console.log(isPending, error, isFetching, data);

  return (
    <div className="my-10 text-center">
      <SectionTitle
        heading="Latest Books Just for You"
        subHeading="Freshly added books — explore the newest titles and read what’s
          trending now."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
        {data.map((book, index) => (
          <Book bookSetails={book} index={index} />
        ))}
      </div>
      {/* <Link
        class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-8 mx-4 text-center"
        to="/books"
        data-aos="fade-up"
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
          Explore Books
        </span>
      </Link> */}

      <Link
        to="/books"
        data-aos="fade-up"
        // এখানে 'relative' এবং 'inline-block' যোগ করা হয়েছে
        className="relative inline-block w-full py-4 mt-10 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
      >
        {/* বাটন এনিমেশন ইফেক্টস */}
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>

        {/* টেক্সট কন্টেইনারে relative z-10 দেওয়া হয়েছে যাতে এটি এনিমেশনের উপরে থাকে */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="uppercase tracking-[0.2em] text-xs">
            View All
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
  );
};

export default LatestBooks;
