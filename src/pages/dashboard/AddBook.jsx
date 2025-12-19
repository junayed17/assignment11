import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import useAuthHook from "../../customHook/useAuthHook";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const AddBook = () => {
  const { user } = useAuthHook();
  const coverPlaces=useLoaderData()
  const form = document.getElementById("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const region=coverPlaces.map(ele=>ele.region)
  const regionWithOutDup = [...new Set(region)];
  function Districts(region="Dhaka") {
    const districts=coverPlaces.filter(ele=>ele.region==region)
    return districts;
  }
  const updatedRegion = useWatch({ control, name: "region" });

  const district=Districts(updatedRegion)
  
  const axiosSecure = useAxiosSecure();

  async function imageUpload(ImageFile) {
    const formData = new FormData();
    formData.append("image", ImageFile);
    const imgUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_BB_API_KEY
    }`;
    const uploadedData = await fetch(imgUrl, {
      method: "POST",
      body: formData,
    });
    return uploadedData.json();
  }

  const onSubmit = async (data) => {
    const image1 = await imageUpload(data.image1[0]);
    const image2 = await imageUpload(data.image2[0]);
    const userData = {
      title: data.title,
      author: data.author,
      publication: data.publication,
      image1: image1.data.display_url,
      image2: image2.data.display_url,
      bookStatus: data.bookStatus,
      category: data.category,
      edition: Number(data.edition),
      district: data.district,
      contact: data.contact,
      region: data.region,
      instruction: data.instruction,
      createdAt: new Date(),
      ownerEmail: user.email,
      price: Number(data.price),
      isApprove: "Pending",
    };

    axiosSecure.post("/addBook", userData).then((data) => {
      if (data.data.insertedId) {
        toast.success("Book added sucessfully");
        form.reset();
      }
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto my-10 rounded-2xl bg-base-100 p-4 shadow border border-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-blue-600 heading mt-6">
          Add a Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} id="form">
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
                    {...register("title", {
                      required: "title is required",
                    })}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
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
                    {...register("author", {
                      required: "author name is required",
                    })}
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm">
                      {errors.author.message}
                    </p>
                  )}
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
                    {...register("publication", {
                      required: "publication is required",
                    })}
                  />
                  {errors.publication && (
                    <p className="text-red-500 text-sm">
                      {errors.publication.message}
                    </p>
                  )}
                </div>

                {/* Front Image */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Book Image (Front)
                  </label>
                  <input
                    {...register("image1")}
                    type="file"
                    accept="image/*"
                    className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                    {...register("image1", {
                      required: "Image (Front) is required",
                    })}
                  />
                  {errors.image1 && (
                    <p className="text-red-500 text-sm">
                      {errors.image1.message}
                    </p>
                  )}
                </div>

                {/* Back Image */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Book Image (Back)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                    {...register("image2", {
                      required: "Image (Back) is required",
                    })}
                  />
                  {errors.image2 && (
                    <p className="text-red-500 text-sm">
                      {errors.image2.message}
                    </p>
                  )}
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
                    defaultValue=""
                    id="bookStatus"
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    <option value="Published">Published</option>
                    <option value="Unpublished">Unpublished</option>
                  </select>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full">
                {/* Category */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                    defaultValue=""
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

                {/* Edition */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Edition
                  </label>
                  <input
                    className="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                    placeholder="1, 2, ..."
                    type="number"
                    {...register("edition", {
                      required: "edition is required",
                    })}
                  />
                  {errors.edition && (
                    <p className="text-red-500 text-sm">
                      {errors.edition.message}
                    </p>
                  )}
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
                    {...register("price", {
                      required: "price is required",
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">
                      {errors.price.message}
                    </p>
                  )}
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
                      required: "Contact number is required",
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
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm">
                      {errors.contact.message}
                    </p>
                  )}
                </div>

                {/* District */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Receiver Region
                  </label>
                  <select
                    {...register("region", { required: "required" })}
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
  );
};

export default AddBook;
