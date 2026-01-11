import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuthHook from "../../../customHook/useAuthHook";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../customHook/useAxiosSecure";
import SectionTitle from "../../../components/ScetionTitleAndSubTitle";
import FormTitle from "../../../components/FormTitle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { handleSignInWithEmailPass, HandleSignInWithGoogle } = useAuthHook();
  function handleSignIn(data) {
    handleSignInWithEmailPass(data.email, data.password)
      .then((result) => {
        console.log(result);
        if (result.user.accessToken) {
          toast.success("log in sucessfull");
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((err) => toast.error(err.code));
  }

  function sighUpWithGoogle() {
    HandleSignInWithGoogle()
      .then((result) => {
        if (result.user) {
          navigate(location.state ? location.state : "/");
          toast.success("log in sucessfull");
          axiosSecure.post("/user", result.user);
        }
      })
      .catch((err) => toast.error(err.code));
  }

  // Demo User Handler - Fixed
  const handleDemoLogin = (role) => {
    if (role === "user") {
      setValue("email", "abcdefgh@gmail.com");
      setValue("password", "Abcdefgh@1");
    } else {
      setValue("email", "Admin@gmail.com");
      setValue("password", "Admin@11");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh]  mt-25">
      <title>BookCurier | Login</title>
      <form
        action=""
        className="w-full max-w-lg shadow bg-base-100 px-8 py-8 rounded-2xl border border-blue-100"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <FormTitle heading="Welcome Back" subHeading="Login with BoolQurier" />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="flex items-center justify-center w-full">
            <button
              className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
              type="button"
              onClick={() => handleDemoLogin("user")}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
              <span className="relative text-sm heading">Demo User</span>
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="relative inline-block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
              type="button"
              onClick={() => handleDemoLogin("admin")}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
              <span className="relative text-sm heading">Demo Admin</span>
            </button>
          </div>
        </div>

        <fieldset className="fieldset">
          <div className="my-2">
            <label
              class="block text-blue-400 text-sm md:text-lg font-medium mb-2 bodyFont"
              for="email"
              id="email"
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
              placeholder="Ab!1.."
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
          <div className="flex items-center justify-center w-full">
            <button
              className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center "
              type="submit"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
              <span className="relative text-sm heading">Login</span>
            </button>
          </div>

          {/* <Link
            to="/login"
            className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
            <span className="relative text-sm heading">Login</span>
          </Link> */}
          <p className="text-sm md:text-lg font-semibold">
            Don't have any account?
            <Link
              to="/signup"
              className="link link-hover font-bold"
              state={location.state}
            >
              signup
            </Link>
          </p>
          {/* <Link
            to="/login"
            className="relative block w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
            <span className="relative text-sm heading">Login</span>
          </Link> */}

          {/* <button
            className="relative block items-center justify-center w-full px-8 py-2.5 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center"
            type="button"
            onClick={sighUpWithGoogle}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>
            <div className="flex items-center justify-center">
              <svg
                aria-label="Google logo"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="z-10"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              <span className="relative text-sm heading">
                {" "}
                Login with Google
              </span>
            </div>
            <span class="relative text-sm md:text-lg font-bold heading"></span>
          </button> */}

          <div className="space-y-4 pt-2">
            {/* Google Login Button */}
            <button
              onClick={sighUpWithGoogle}
              type="button"
              className="relative inline-block w-full py-4 overflow-hidden font-bold text-white bg-gray-800 rounded-2xl group/google active:scale-95 transition-all duration-300 text-center"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/google:w-full group-hover/google:h-80 opacity-100"></span>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <FaGoogle className="text-lg" />
                <span className="uppercase tracking-widest text-xs">
                  Login with Google
                </span>
              </div>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;



