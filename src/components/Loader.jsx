import React from "react";

const Loader = () => {
  return (
    <div class="mx-auto max-w-[600px]  rounded-xl overflow-hidden drop-shadow-2xl">
      <div class="flex p-8 justify-center items-center h-[450px]">
        <div class="text-center space-y-6">
          <div class="w-20 h-20 border-4 md:border-8 border-t-blue-500 border-gray-700 rounded-full animate-spin mx-auto"></div>
          <div class="text-blue-500 font-semibold text-2xl md:text-4xl opacity-90 animate-fadeIn">
            Almost There...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
