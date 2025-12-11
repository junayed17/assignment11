import React from "react";
import useAuthHook from "../../customHook/useAuthHook";
import { FaCheck, FaThinkPeaks } from "react-icons/fa";

const Profile = () => {
  const {user}=useAuthHook()
  console.log(user);
  return (
    <div class=" cursor-pointer transform transition-all duration-500 hover:scale-105  max-w-[500px] mx-auto  my-20 ">
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
                <p>User</p>
                <FaCheck className="text-black text-sm" />
              </div>
            </div>

            <button
              class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group my-4 w-[70%] mx-auto"
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
                Update Profile
              </span>
            </button>

            <div class="mt-6 w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-2 transition-all duration-500 animate-pulse"></div>

            <div class="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
