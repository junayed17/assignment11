import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../customHook/useAuthHook";
import Loader from "../../components/Loader";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdCancel } from "react-icons/md";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthHook();
  const modalRef = useRef();
  const coverPlaces = useLoaderData() || [];
  const [editId, setEditId] = useState(null);
  const {
    data = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["MyBooks", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/books?email=${user.email}`);
      return result.data;
    },
  });

  console.log(data);
  
 const {
   data: getEditData,
   isLoading: isEditLoading, 
   isError: isEditError,
 } = useQuery({
   queryKey: ["data", editId],
   queryFn: async () => {
     const result = await axiosSecure.get(`/book/${editId}`);
     return result.data;
   },
 });
//  console.log(getEditData);
 
  async function handleUpdate(status, id) {
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

  async function  handleUnpbulishBook(id) {
    await axiosSecure.patch(`/book/unpublish/${id}`).then((result) => {
      if (result.data.modifiedCount) {
        toast.success("book Delete sucessfully");
      }
    });
    refetch();
  }

  function handleCancel() {
    modalRef.current.close();
  }

  function handleShowModal() {
    modalRef.current.showModal();
  }

  // update code

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();
  useEffect(() => {
    if (getEditData) {
      reset({
        title: getEditData.title,
        author: getEditData.author,
        publication: getEditData.publication,
        bookStatus: getEditData.bookStatus,
        category: getEditData.category,
        edition: getEditData.edition,
        price: getEditData.price,
        contact: getEditData.contact,
        region: getEditData.region,
        district: getEditData.district,
        instruction: getEditData.instruction,
      });
    }
  }, [getEditData, reset]);


  const region = coverPlaces.map((ele) => ele.region);
  const regionWithOutDup = [...new Set(region)];
  function Districts(region = "Dhaka") {
    const districts = coverPlaces.filter((ele) => ele.region == region);
    return districts;
  }
  const updatedRegion = useWatch({ control, name: "region" });

  const district = Districts(updatedRegion);




  console.log(data);
  

  const onSubmit = async (data) => {
    const updateData = {
      title: data.title,
      author: data.author,
      publication: data.publication,
      image1: getEditData.image1,
      image2: getEditData.image2,
      bookStatus: data.bookStatus,
      category: data.category,
      edition: data.edition,
      district: data.district,
      contact: data.contact,
      region: data.region,
      instruction: data.instruction,
      ownerEmail: user.email,
      price: data.price,
    };

    console.log(data, editId, updateData);
    
    axiosSecure.patch(`/post/${editId}`,{ updateData}).then((data) => {
      if (data.data.modifiedCount) {
        toast.success("Book Edited sucessfully");
        refetch()
        handleCancel()
      }
    });
  };

 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-scroll md:overflow-hidden rounded-2xl shadow-md border border-blue-100 dark:border-base-700 ">
      <title>BookCurier | My Books</title>
      <div className="my-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/20 to-purple-400/20  rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading text-center">
          All My Book Posts
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-center bodyFont text-base-600 dark:text-base-300">
          View and manage all books posted by You
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
            <th>Category</th>
            <th>Author</th>
            <th>Publish status</th>
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
              <td>
                <div className="relative mr-2 h-15 w-15 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-sky-400 to-red-500 shadow-md hover:scale-105 transition duration-300 tooltip tooltip-bottom hidden sm:block">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={book.image1}
                    alt="book"
                  />
                </div>
              </td>

              <td className="font-medium">{book.title}</td>

              <td>{book.category}</td>
              <td className="font-medium">{book.author}</td>
              <td className="font-medium">{book.bookStatus}</td>

              <td className="text-center flex items-center justify-center gap-2">
                <button
                  disabled={book?.isApprove == "Accepted"}
                  class={`relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                  type="button"
                  onClick={() => {
                    handleShowModal();
                    setEditId(book._id);
                  }}
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
                  <span class="relative text-sm  font-bold heading">Edit</span>
                </button>
                <button
                  disabled={book.bookStatus === "Unpublished" ? true : false}
                  class={`relative inline-flex items-center justify-center w-22 px-4 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                  type="button"
                  onClick={() => handleUnpbulishBook(book._id)}
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
                    Unpublish
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal  */}
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-xl text-4xl btn-circle btn-ghost absolute right-2 top-2">
              <MdCancel />
            </button>
          </form>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold text-blue-600 heading mt-6">
              Edit The Book
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-10">
                <div className="w-full md:flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="w-full">
                    {/* Title */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Title
                      </label>
                      <input
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="xyz"
                        type="text"
                        {...register("title")}
                        defaultValue={getEditData?.title}
                      />
                    </div>

                    {/* Author */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Author
                      </label>
                      <input
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="Md. Example"
                        type="text"
                        {...register("author")}
                        defaultValue={getEditData?.author}
                      />
                    </div>

                    {/* Publication */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Publication
                      </label>
                      <input
                        {...register("publication")}
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="ABC Publication"
                        type="text"
                        {...register("publication")}
                        defaultValue={getEditData?.publication}
                      />
                    </div>

                    <div className="my-2">
                      <label
                        className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
                        for="bookStatus"
                      >
                        Book Status
                      </label>
                      <select
                        {...register("bookStatus")}
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        id="bookStatus"
                        defaultValue={getEditData?.bookStatus}
                      >
                        <option value="" disabled>
                          Select Status
                        </option>
                        <option value="Published">Published</option>
                        <option value="Unpublished">Unpublished</option>
                      </select>
                    </div>
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Category
                      </label>
                      <select
                        {...register("category")}
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        defaultValue={getEditData?.category}
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="story">Story</option>
                        <option value="novel">Novel</option>
                        <option value="textbook">Textbook</option>
                        <option value="science">Science</option>
                        <option value="religion">Religion</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-full">
                    {/* Category */}

                    {/* Edition */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Edition
                      </label>
                      <input
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="1, 2, ..."
                        type="number"
                        {...register("edition")}
                        defaultValue={getEditData?.edition}
                      />
                    </div>

                    {/* Price */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Price
                      </label>
                      <input
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="Price in taka"
                        type="text"
                        {...register("price")}
                        defaultValue={getEditData?.price}
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Contact Number
                      </label>
                      <input
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        placeholder="017XXXXXXXX"
                        type="tel"
                        {...register("contact", {
                          minLength: {
                            value: 11,
                            message: "Contact number must be 11 digits",
                          },
                          maxLength: {
                            value: 11,
                            message: "Contact number must be 11 digits",
                          },
                          pattern: {
                            value: /^01[3-9][0-9]{8}$/,
                            message:
                              "Contact number must start with 1 and be 10 digits",
                          },
                        })}
                        defaultValue={getEditData?.contact}
                      />
                    </div>

                    {/* District */}
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Receiver Region
                      </label>
                      <select
                        {...register("region")}
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select region
                        </option>
                        {regionWithOutDup.map((region) => (
                          <option value={region}>{region}</option>
                        ))}
                      </select>
                    </div>
                    <div className="my-2">
                      <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                        Select District
                      </label>
                      <select
                        {...register("district")}
                        className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select District
                        </option>
                        {Districts(updatedRegion).map((ele) => (
                          <option value={ele.district}>{ele.district}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div>
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Motivation
                  </label>
                  <textarea
                    {...register("instruction")}
                    className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                    placeholder="Delivery Instruction.."
                    rows={10}
                    defaultValue={getEditData?.instruction}
                  />
                </div>

                <div className="text-center">
                  <button
                    class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4"
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
                    <span class="relative text-sm md:text-lg font-bold heading">
                      Submit
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyBooks;
