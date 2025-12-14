import React from 'react';
import useAxiosSecure from '../../customHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Book from '../../components/Book';

const Books = () => {
   const axiosSecure = useAxiosSecure();
   const {
     isPending,
     error,
     data = [],
     isFetching,
   } = useQuery({
     queryKey: ["latest"],
     queryFn: async () => {
       const data = await axiosSecure.get("/books");
       return data.data;
     },
   });
   
  return (
    <div className='my-10'>
      <div className="max-w-[500px] mx-auto text-center">
        <h2
          className=" text-3xl md:text-4xl font-bold text-blue-600 mb-3 heading"
          data-aos="fade-left"
        >
          Discover Your Next Favorite Book
        </h2>

        <div
          className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"
          data-aos="fade-up"
        ></div>

        <p className="text-blue-500 text-lg bodyFont" data-aos="fade-right">
          From classics to latest releases, explore every book we have.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {data.map((book, index) => (
          <Book bookSetails={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Books;