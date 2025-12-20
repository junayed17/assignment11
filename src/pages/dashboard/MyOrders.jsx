import React from "react";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../customHook/useAuthHook";
import Loader from "../../components/Loader";
import dayjs from "dayjs";
import { Link } from "react-router";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/myOrders?uEmail=${user.email}`);
      return result.data;
    },
  });
  async function deleteOrder(id) {
    const result = await axiosSecure.delete(`/order/delete/${id}`);
    refetch();
  }


  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-scroll md:overflow-hidden rounded-2xl shadow-md border border-blue-100 dark:border-base-700">
      <title>BookCurier | My Orders</title>
      <div className="my-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/20 to-purple-400/20  rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading text-center">
          My Orders
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-base-600 dark:text-base-300">
          View your orders, check delivery status, and complete payments from
          here.
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
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold 
            bg-green-100 text-green-600 "
                >
                  {book.status}
                </span>
              </td>

             
            
                <td className="text-center flex items-center justify-center gap-2">
                  {book.payment === "paid" ? (
                    " paid"
                  ) : (
                    <Link
                      class="relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                      to={`/dashboard/payment/${book.bookId}`}
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
                        Pay Now
                      </span>
                    </Link>
                  )}

 {book.status === "Pending" ?  <button
                    class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                    type="button"
                    onClick={() => deleteOrder(book.bookId)}
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
                  </button>:""}
                 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
