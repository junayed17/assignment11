import React, { useEffect } from "react";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../customHook/useAuthHook";
import Loader from "../../components/Loader";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const AllPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();

  const {
    data = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllPost", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allPost`);
      return result.data;
    },
  });

  async function handleUpdateDelete(status, id) {
    try {
      const result = await axiosSecure.patch(`/post/${id}`, {
        isApprove: status,
      });

      if (result.data.modifiedCount > 0) {
        toast.success(`Post ${status}`);
        refetch();
      } else {
        toast.error(`Post is already ${status}`);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  }

  async function handleDeleteBook(id) {
    await axiosSecure.delete(`/book/${id}`).then((result) => {
      if (result.data.deletedCount) {
        toast.success("book Delete sucessfully");
      }
    });
    refetch();
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-scroll md:overflow-hidden rounded-2xl shadow-md border border-blue-100 dark:border-base-700 ">
      <div className="my-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading text-center">
          All Book Posts
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-base-600 dark:text-base-300">
          View and manage all books posted by librarians
        </p>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-blue-600  font-bold">
         total {data.length} posts 
        </p>
      </div>
      <table className="table w-full text-sm">
        {/* head */}
        <thead className="bg-base-100 dark:bg-base-800 text-base-700 dark:text-base-200 text-sm sm:text-lg bodyFont">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Order Date</th>
            <th>Author</th>
            <th>Publish status</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        {/* body */}
        <tbody className="bg-base-200 text-base-700 dark:text-base-200 text-sm sm:text-lg bodyFont">
          {data.map((book, index) => (
            <tr
              className="hover:bg-base-50  hover:bg-blue-100 duration-300 py-0"
              key={book._id}
            >
              <th>{index + 1}</th>

              <td className="font-medium">{book.title}</td>

              <td>{dayjs(book.orderAt).format("DD MMM YYYY, hh:mm A")}</td>
              <td className="font-medium">{book.author}</td>
              <td className="font-medium">{book.bookStatus}</td>
              <td>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold 
            bg-green-100 text-green-600 
            dark:bg-green-900 dark:text-green-300"
                >
                  {book.isApprove}
                </span>
              </td>

              <td className="text-center flex items-center justify-center gap-2">
                <button
                  disabled={book?.isApprove == "Accepted"}
                  class={`relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                  type="button"
                  onClick={() => handleUpdateDelete("Accepted", book._id)}
                >
                  {}

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
                  <span class="relative text-sm  font-bold heading">
                    Approve
                  </span>
                </button>
                <button
                  disabled={book?.isApprove == "Accepted"}
                  class={`relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                  type="button"
                  onClick={() => handleDeleteBook(book._id)}
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
                  <span class="relative text-sm  font-bold heading">
                    Delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPost;
