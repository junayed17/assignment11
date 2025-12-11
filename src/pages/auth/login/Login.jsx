import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthHook from "../../../customHook/useAuthHook";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleSignInWithEmailPass } = useAuthHook();
  function handleSignIn(data) {
    console.log(data);
    handleSignInWithEmailPass(data.email,data.password).then((result) => {
      console.log(result);
      if (result.user.accessToken) {
        toast.success("log in sucessfull");
      }
    }).catch(err=>toast.error(err.code)
    )
  }

  return (
    <div className="flex items-center justify-center min-h-[50vh] p-4 my-10">
      <form
        action=""
        className="w-full max-w-lg shadow-2xl bg-base-100 px-8 py-8 rounded-2xl"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight heading font-bold text-center">
          Welcome Back
        </h2>
        <p className="text-lg md:text-2xl text-center bodyFont">
          Login with BoolQurier
        </p>
        <fieldset className="fieldset">
          <div className="my-2">
            <label
              class="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
              for="email"
            >
              Your Email
            </label>
            <input
              class="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
              placeholder="Example@gmail.com"
              type="text"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="my-2">
            <label
              class="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
              for="pass"
            >
              Your password
            </label>
            <input
              class="text-sm custom-input w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 "
              placeholder="Example@gmail.com"
              type="text"
              id="pass"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Link
              to="/login"
              className="link link-hover text-sm md:text-lg font-semibold underline underline-offset-3"
            >
              Forgot password?
            </Link>
          </div>
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
              Log In
            </span>
          </button>
          <p className="text-sm md:text-lg font-semibold">
            Don't have any account?
            <Link to="/signup" className="link link-hover font-bold">
              signup
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
