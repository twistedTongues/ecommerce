"use client"
import Link from "next/link";
import { useState } from "react";

const CTA = () => {
  const [isClosedButton, setIsCloseButton] = useState(false);
  
  return (
    !isClosedButton && <div className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50">
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 ">
          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full">
            <svg
              className="w-4 h-4 text-gray-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              >
              </path>
            </svg>
            <span className="sr-only">Discount coupon</span>
          </span>
          <span>
            Get 5% commision per sale{" "}
            <Link
              href="/contact"
              className="flex items-center ml-0 text-sm font-medium text-rose-600 md:ml-1 md:inline-flex hover:underline"
            >
              Become a partner{" "}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 text-rose-600 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                >
                </path>
              </svg>
            </Link>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setIsCloseButton(true)}
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 "
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            >
            </path>
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;
