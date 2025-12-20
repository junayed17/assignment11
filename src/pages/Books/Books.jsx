import React, { useState } from "react";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Book from "../../components/Book";
import Loader from "../../components/Loader";

const Books = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortItem, setSortItem] = useState("");
  const {
    isPending,
    error,
    data = [],
    isFetching,
  } = useQuery({
    queryKey: ["latest", searchTerm,sortItem],
    queryFn: async () => {
      let url = "/allBook";

      if (searchTerm) {
        url = `/book?bookName=${searchTerm}`;
      } else if (sortItem) {
        url = `/allBook?sort=${sortItem}`;
      }
      const data = await axiosSecure.get(url);
      return data.data;
    },
  });

  function handleSearch() {
    const bookName = document.querySelector("#floating_outlined").value;
    setSearchTerm(bookName)
  }

  
  if (!data) {
    return <Loader/>
  }

  
  return (
    <div className="my-10">
      <title>BookCurier | Books</title>
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
        <div className="grid grid-cols-1 sm:grid-cols-2  items-center justify-center gap-2">
          <div class="relative my-2" id="input">
            <input
              placeholder="Search your favorite book"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              id="floating_outlined"
              type="text"
            />
            <label
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-2xl rounded-2xl leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-400 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-base-100 data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              for="floating_outlined"
            >
              Search...
            </label>
            <button
              class="absolute -top-1 right-1 p-4 hover:bg-base-200 rounded-2xl"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="slate-300"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"></path>
                <rect
                  transform="rotate(-49.6812 12.2469 14.8859)"
                  rx="1"
                  height="10.1881"
                  width="2"
                  y="14.8859"
                  x="12.2469"
                ></rect>
              </svg>
            </button>
          </div>
          <select
            className="text-sm custom-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300"
            defaultValue=""
            id="sort"
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value="" disabled>
              Sort books by Price
            </option>
            <option value="-1">High to Low</option>
            <option value="1">Low to High</option>
          </select>
        </div>
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
