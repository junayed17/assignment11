import React from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // image file access: data.image1[0]
    // POST request er jonno FormData() use korte parba
  };

  return (
    <div className="max-w-[1440px] mx-auto my-10 rounded-2xl bg-base-100 p-4 shadow border border-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-blue-600 heading mt-6">
          Add a Book
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
                    {...register("title")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm transition"
                    placeholder="xyz"
                    type="text"
                  />
                </div>

                {/* Author */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Author
                  </label>
                  <input
                    {...register("author")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm transition"
                    placeholder="Md. Example"
                    type="text"
                  />
                </div>

                {/* Publication */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Publication
                  </label>
                  <input
                    {...register("publication")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm transition"
                    placeholder="ABC Publication"
                    type="text"
                  />
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
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Back Image */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Book Image (Back)
                  </label>
                  <input
                    {...register("image2")}
                    type="file"
                    accept="image/*"
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm"
                  />
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
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg shadow-sm"
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
                    {...register("edition")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg"
                    placeholder="1, 2, ..."
                    type="number"
                  />
                </div>

                {/* Price */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Price
                  </label>
                  <input
                    {...register("price")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg"
                    placeholder="Price in taka"
                    type="text"
                  />
                </div>

                {/* Contact Number */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Contact Number
                  </label>
                  <input
                    {...register("contact")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg"
                    placeholder="017XXXXXXXX"
                    type="number"
                  />
                </div>

                {/* District */}
                <div className="my-2">
                  <label className="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont">
                    Receiver District
                  </label>
                  <select
                    {...register("district")}
                    className="text-sm custom-input w-full px-4 py-2 md:py-4 border border-gray-300 rounded-lg"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select District
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="mymensingh">Mymensingh</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="khulna">Khulna</option>
                    <option value="barishal">Barishal</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="rangpur">Rangpur</option>
                    <option value="chattogram">Chattogram</option>
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
                className="border border-gray-300 p-4 rounded-lg w-full focus:outline-blue-300"
                placeholder="Delivery Instruction.."
                rows={10}
              ></textarea>
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
