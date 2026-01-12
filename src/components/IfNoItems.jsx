import React from 'react';
import { Link } from 'react-router';

const IfNoItems = ({ text, to, btnText }) => {
  return (
    <tr>
      <td colSpan="5" className="text-center py-10">
        <h4 className="text-xl font-semibold">{text}</h4>
        {to ? (
          <Link
            to={to}
            // এখানে 'relative' এবং 'inline-block' যোগ করা হয়েছে
            className="relative inline-block w-full py-4 mt-2 overflow-hidden font-bold text-white bg-gray-900 rounded-2xl group/btn active:scale-95 transition-all duration-300 text-center max-w-60"
          >
            {/* বাটন এনিমেশন ইফেক্টস */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover/btn:w-full group-hover/btn:h-80 opacity-100"></span>

            {/* টেক্সট কন্টেইনারে relative z-10 দেওয়া হয়েছে যাতে এটি এনিমেশনের উপরে থাকে */}
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="uppercase tracking-[0.2em] text-xs">
                {btnText}
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default IfNoItems;