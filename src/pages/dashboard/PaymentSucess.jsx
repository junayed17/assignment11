import React from 'react';

const PaymentSucess = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-base-50  p-4 transition-colors duration-300">
      <div class="max-w-md w-full bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-100 d">
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
              <span class="text-base-500  text-sm">
                Amount Paid
              </span>
              <span class="text-base-800  font-semibold">
                $120.00
              </span>
            </div>
            <div class="flex justify-between py-2 border-b border-base-200 ">
              <span class="text-base-500  text-sm">
                Transaction ID
              </span>
              <span class="text-base-800 font-mono text-sm">
                #TXN-9982341
              </span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-base-500  text-sm">
                Payment Method
              </span>
              <span class="text-base-800  font-semibold italic text-sm">
                Visa Card
              </span>
            </div>
          </div>

          <div class="space-y-3">
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none">
              Download Receipt
            </button>
            <button class="w-full bg-transparent border-2 border-base-200  text-base-600  font-semibold py-3 px-6 rounded-xl hover:bg-base-50  transition-all">
              Back to Dashboard
            </button>
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