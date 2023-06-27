import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
            Ecom
          </span>
        </Link>
        <button
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
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z" />
          </svg>
        </button>
        <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
            <li>
              <Link
                href="/home"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
              >
                Pricing
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
      </div>
    </nav>
  );
};

export default Header;
