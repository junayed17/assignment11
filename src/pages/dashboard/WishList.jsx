
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import Loader from "../../components/Loader";

import { MdCancel } from "react-icons/md";
import useAuthHook from "../../customHook/useAuthHook";



const WishList = () => {
  const {user}=useAuthHook()
const axiosSecure=useAxiosSecure()

console.log(user.email);

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["wishlist", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`/wishList?email=${user.email}`);
      return result.data;
    },
  });

console.log(data);

  return (
    <div className="overflow-x-scroll md:overflow-hidden rounded-2xl shadow-md border border-blue-100 dark:border-base-700 ">
      <div className="my-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading text-center">
          All My wishList Book
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-blue-600  font-bold">
          total {data.length} books
        </p>
      </div>
      <table className="table w-full text-sm">
        {/* head */}
        <thead className="bg-base-100 dark:bg-base-800 text-base-700 dark:text-base-200 text-sm sm:text-lg bodyFont">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>addedAt</th>
            <th>Author</th>
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

              <td>{new Date(book.addedAt).toLocaleString()}</td>
              <td className="font-medium">{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
