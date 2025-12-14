import React from 'react';
import Book from '../../components/Book';

const LatestBooks = () => {
  return (
    <div className="my-10">
      <div className="max-w-[500px] mx-auto text-center">
        <h2
          className=" text-3xl md:text-4xl font-bold text-blue-600 mb-3 heading"
          data-aos="fade-left"
        >
          Latest Books Just for You
        </h2>

        <div
          className="h-1 w-32 bg-blue-600 mx-auto rounded-full mb-4"
          data-aos="fade-up"
        ></div>

        <p className="text-blue-500 text-lg bodyFont" data-aos="fade-right">
          Freshly added books — explore the newest titles and read what’s
          trending now.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default LatestBooks;