import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthHook from "../../customHook/useAuthHook";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import Loader from "../../components/Loader";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const OrdersOnMyBook = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();
  const STATUS_OPTIONS = ["Pending", "Shipped", "Delivered"];

  const {
    data = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/myOrders?lEmail=${user.email}`);
      return result.data;
    },
  });

  async function handleStatusChange(id, status) {
      console.log(id,status);
    await axiosSecure
      .patch(`/order/updateStatus?id=${id}`, { updatedStatus: status })
      .then((result) =>{
        console.log(result.data);
        
        if (result.data.modifiedCount) {
          toast.success(`status transform to ${status} sucessfully`);
        }
      });
    refetch();
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-scroll md:overflow-hidden rounded-2xl shadow-md border border-blue-100 dark:border-base-700">
      <div className="my-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading text-center">
          Orders on My Books
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-base-600 dark:text-base-300">
          See all customer orders for your books, track order status, and manage
          actions easily.
        </p>
      </div>
      <table className="table w-full text-sm">
        {/* head */}
        <thead className="bg-base-100 dark:bg-base-800 text-base-700 dark:text-base-200 text-sm sm:text-lg bodyFont">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Order Date</th>
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

              <td>
                <select
                  value={book.status}
                  onChange={(e) =>
                    handleStatusChange(book.bookId, e.target.value)
                  }
                  className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer
      border outline-none
      ${
        book.status === "Pending"
          ? "bg-yellow-100 text-yellow-600"
          : book.status === "Shipped"
          ? "bg-purple-100 text-purple-600"
          : book.status === "Delivered"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }
      dark:bg-opacity-20
    `}
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>

              <td className="text-center flex items-center justify-center gap-2">
                <button
                  class="relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                  type="submit"
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
                    Approve
                  </span>
                </button>
                <button
                  class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                  type="submit"
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
                    Cancel
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

export default OrdersOnMyBook;
