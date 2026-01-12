import React from "react";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../customHook/useAuthHook";
import Loader from "../../components/Loader";
import dayjs from "dayjs";
import { Link } from "react-router";
import SectionTitle from "../../components/ScetionTitleAndSubTitle";
import IfNoItems from "../../components/IfNoItems";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();

  const { data=[], error, isLoading, refetch } = useQuery({
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
        <SectionTitle
          heading="My Orders"
          subHeading="View your orders, check delivery status, and complete payments from
          here."
        />
      </div>
      <table className="table w-full text-sm">
        {/* head */}
        <thead className="bg-base-100 dark:bg-base-800 text-base-700 dark:text-base-200 text-sm sm:text-lg heading">
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
          {data.length < 1 ? (
            <IfNoItems
              text="“No books have been added to the orderlist yet. Please add a book first.”"
              to="/books"
              btnText="Explore books"
            />
          ) : (
            data.map((book, index) => (
              <tr
                className="hover:bg-base-50 hover:bg-blue-100 duration-300 py-0"
                key={book._id}
              >
                <th>{index + 1}</th>
                <td className="font-medium">{book.title}</td>
                <td>{dayjs(book.orderAt).format("DD MMM YYYY, hh:mm A")}</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                    {book.status}
                  </span>
                </td>
                <td className="text-center flex items-center justify-center gap-2">
                  {/* Your Payment and Cancel Buttons Logic */}
                  {book.payment === "paid" ? (
                    "paid"
                  ) : (
                    <Link
                      className="relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                      to={`/dashboard/payment/${book._id}`}
                    >
                      {/* ... SVG Content ... */}
                      <span className="relative text-sm font-bold heading">
                        Pay Now
                      </span>
                    </Link>
                  )}

                  {book.status === "Pending" && (
                    <button
                      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
                      type="button"
                      onClick={() => deleteOrder(book._id)}
                    >
                      {/* ... SVG Content ... */}
                      <span className="relative text-sm font-bold heading">
                        Cancel
                      </span>
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
