import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="https://i.ibb.co/HhTX38z/logo1.png"
            className="h-9 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white sofia">
            Akshara
          </span>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          <a
            href="#home"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div
          className={`md:hidden absolute top-14 right-0 w-40 bg-white shadow-lg rounded-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
          >
            Contact
          </a>
        </div>
        {/* Search bar */}
        {/* <div className={`hidden md:flex items-center bg-white rounded-lg px-3`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.293 14.293a1 1 0 011.414-1.414l3 3a1 1 0 01-1.414 1.414l-3-3zM15 9a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none ml-1"
            />
          </div> */}
          <div className={`hidden md:flex items-center pt-2 relative px-0 rounded-lg `}>
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4  fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        {/* Search bar */}
      </div>
    </nav>
  );
};

export default Nav;
