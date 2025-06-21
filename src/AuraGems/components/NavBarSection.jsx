import React from "react";
import {Link} from "react-router-dom";

export const NavBarSection = ({ change }) => {
  //destructuring the key from props
  // this is used to change the theme of the website
  return (
    <div>
      <header className="body-font text-[var(--color-TextColor)] bg-[var(--color-BgColor)]">

        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748960962/WhatsApp_Image_2025-06-03_at_19.57.34_07abd444_ricksx.jpg"
              alt="AuraGems Logo"
              className="w-10 h-10 rounded-full bg-green-500 p-1"
            />
            <span className="ml-3 text-xl text-[var(--color-TextColorHead)]">AuraGems</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" to="/Shop">Shop</Link>
            <Link className="mr-5 hover:text-gray-900" to="/About">About</Link>
            <Link className="mr-5 hover:text-gray-900" to="/Login">Login</Link>
          </nav>
          <button
            className="inline-flex items-center text-[var(--color-TextColorHead)] border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0"
            onClick={change}
          >
            Dark/Light
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};
