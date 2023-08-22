"use client";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "./cart/ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpenedButton, setIsOpenedButton] = useState(false);
  const toggleButton = () => setIsOpenedButton(!isOpenedButton);

  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link href="/" className="flex items-center">
          <CubeTransparentIcon className="h-8 mr-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
            Ecom
          </span>
        </Link>
        <div className="flex justify-center items-center space-x-5">
          <div>
            <button className="relative" onClick={() => handleCartClick()}>
              <ShoppingBagIcon className="h-8 w-8 drop-shadow-lg" />
              <div className="rounded-full flex justify-center items-center bg-rose-400 text-xs text-white absolute w-6 h-5 bottom-5 -right-2">
                {cartCount}
              </div>
            </button>
            <ShoppingCart />
          </div>
          <button
            onClick={toggleButton}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 drop-shadow-lg"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns=""
            >
              <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z" />
            </svg>
          </button>
        </div>
        {isOpenedButton && (
          <div className="w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-rose-700 rounded "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/buy"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
