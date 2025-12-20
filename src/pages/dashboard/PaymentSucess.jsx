import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../customHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentSucess = () => {
  const axiosSecure=useAxiosSecure();
const [searchParams, setSearchParams] = useSearchParams();
const sessionId=searchParams.get("session_id")


const {
  data={},
  isLoading,
  isError,
} = useQuery({
  queryKey: ["payment-status", sessionId],
  enabled: !!sessionId, // sessionId থাকলেই কেবল কুয়েরি চলবে
  queryFn: async () => {
    const result = await axiosSecure.patch(`/payment?sessionId=${sessionId}`);
    return result.data;
  },
});
console.log(data);

  
  return (
    <div class="min-h-screen flex items-center justify-center bg-base-50  p-4 transition-colors duration-300">
      <title>BookCurier | Payment Sucess</title>
      <div class="max-w-md w-full bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-100 d">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/20 to-purple-400/20  rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div class="bg-blue-600 p-4 sm:p-8 flex justify-center">
          <div class="bg-white/20 p-2 sm:p-4 rounded-full animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div class="p-8 text-center">
          <h1 class="text-2xl font-bold text-base-800  mb-2">
            Payment Successful!
          </h1>
          <p class="text-base-500 mb-6">
            Hooray! Your payment has been processed successfully. A receipt has
            been sent to your email.
          </p>

          <div class="bg-base-50  rounded-2xl p-4 mb-8">
            <div class="flex justify-between py-2 border-b border-base-200 ">
              <span class="text-base-500  text-sm">Amount Paid</span>
              <span class="text-base-800  font-semibold">
                ${Number(data?.pamentData?.paid_amount_total / 100) || 0}
              </span>
            </div>
            <div class="flex justify-between py-2 border-b border-base-200 ">
              <span class="text-base-500  text-sm">Transaction ID</span>
              <span class="text-base-800 font-mono text-sm">
                {data?.pamentData?.transectionId || 9}
              </span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-base-500  text-sm">Payment Method</span>
              <span class="text-base-800  font-semibold italic text-sm">
                {data?.pamentData?.method || "Card"}
              </span>
            </div>
          </div>

          <div class="space-y-3">
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none">
              Download Receipt
            </button>
            <Link
              class="w-full bg-transparent border-2 border-base-200  text-base-600  font-semibold py-3 px-6 rounded-xl hover:bg-base-50  transition-all w-full"
              to="/dashboard"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div class="pb-8 text-center">
          <p class="text-xs text-base-400 ">
            Need help?{" "}
            <a href="#" class="text-blue-500 underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;