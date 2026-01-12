import React, { useEffect, useRef, useState } from "react";
import useAuthHook from "../../customHook/useAuthHook";
import { FaCheck, FaCross, FaThinkPeaks } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import FormTitle from "../../components/FormTitle";

const Profile = () => {
  const modalRef = useRef();
  const { user, handleUpdateProfile, setLoading } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState("User");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleUpdate() {
    modalRef.current.showModal();
  }

  function handleProfileUpdatee(data) {
    const userData = {
      displayName: data.name,
      photoURL: user.photoURL,
    };
    if (data.photo?.length != 0) {
      const formData = new FormData();
      formData.append("image", data.photo[0]);
      const imgUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_BB_API_KEY
      }`;

      fetch(imgUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          userData.photoURL = result.data.display_url;
          handleUpdateProfile(userData)
            .then(() => {
              setLoading(false);
              Swal.fire({
                title: "Profile updated!",
                icon: "success",
                draggable: true,
              });
            })
            .catch((err) => {
              Swal.fire({
                title: "Somthing Error!",
                icon: "error",
                draggable: true,
              });
            });
        });
      return;
    }

    handleUpdateProfile(userData)
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "Profile updated!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Somthing Error!",
          icon: "error",
          draggable: true,
        });
      });
  }

  function handleCancel() {
    modalRef.current.close();
    Swal.fire({
      title: "Profile not updated!",
      icon: "success",
      draggable: true,
    });
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axiosSecure.get(`/user?email=${user.email}`);
        setRole(data.role);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);

  console.log(role);

  return (
    <div class=" cursor-pointer transform transition-all duration-500 hover:scale-105  max-w-[500px] mx-auto  my-10 ">
      <title>BookCurier | My Profile</title>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/20 to-purple-400/20  rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>
      <div class="text-white rounded-3xl border border-blue-500/20 bg-gray-300 shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-blue-500/40 overflow-hidden hover:shadow-blue-500/10 hover:shadow-3xl w-full">
        <div class="p-4 md:p-8 relative z-10 w-full">
          <div class="flex flex-col items-center text-center w-full">
            <div class="relative mb-6  ">
              <div class="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"></div>
              <div class="absolute inset-0 rounded-full border border-blue-500 animate-pulse delay-500"></div>
              <div class="rounded-full backdrop-blur-lg border border-blue-300 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform  group-hover:scale-110 transition-all duration-500 hover:shadow-green-500/20 overflow-hidden ">
                <div class="transform  transition-transform duration-700 w-[200px] h-[200px] md:w-[250px] md:h-[250px] mx-auto">
                  <img
                    src={user?.photoURL}
                    alt=""
                    srcset=""
                    className="h-full w-full block  object-center"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
                {user?.displayName}
              </p>
            </div>

            <div class="space-y-1 max-w-sm">
              <p class="text-blue-400 font-medium text-[1rem] md:text-lg transform group-hover:scale-105 transition-transform duration-300 bodyFont">
                {user.email}
              </p>
              <div class="text-white text-sm leading-relaxed border-black transform group-hover:scale-105 transition-colors duration-300 bg-blue border-[1px] rounded-2xl bg-blue-400 w-[5rem] flex items-center justify-center px-2">
                <p>{role}</p>
                <FaCheck className="text-black text-sm" />
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-2">
              <button
                className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center "
                type="submit"
                onClick={handleUpdate}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
                <span className="relative text-sm heading">Update Profile</span>
              </button>
            </div>

            <div class="mt-6 w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-2 transition-all duration-500 animate-pulse"></div>

            <div class="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}

      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-xl text-4xl btn-circle btn-ghost absolute right-2 top-2">
              <MdCancel />
            </button>
          </form>
          <form
            action=""
            className="w-full max-w-lg shadow-2xl bg-base-100 px-8 py-8 rounded-2xl"
            onSubmit={handleSubmit(handleProfileUpdatee)}
          >
            <FormTitle
              heading="Welcome Back"
              subHeading="Update with BoolQurier"
            />
            
            <fieldset className="fieldset">
              <div className="my-2">
                <label
                  class="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
                  for="name"
                >
                  Your Name
                </label>
                <input
                  class="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                  placeholder="Md.Example"
                  type="text"
                  id="email"
                  {...register("name", { required: "name is required" })}
                  defaultValue={user.displayName}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="my-2">
                <label
                  class="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
                  for="photo"
                >
                  Photo
                </label>
                <input
                  class="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
                  placeholder="Example@gmail.com"
                  type="file"
                  id="photo"
                  {...register("photo")}
                />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center justify-center w-full">
                  <button
                    className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
                    type="submit"
                    // onClick={handleUpdate}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
                    <span className="relative text-sm heading"> Update</span>
                  </button>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    className="relative inline-block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
                    type="button"
                    onClick={handleCancel}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
                    <span className="relative text-sm heading">Cancel</span>
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
