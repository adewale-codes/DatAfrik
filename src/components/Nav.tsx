import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="p-5 md:py-10 md:px-24 flex justify-between items-center">
        <Link to="/">
          <p className="text-white font-bold text-xl">JustAnotherUIKit</p>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8 ">
          <Link className={pathname === "/home" ? "" : "text-white font-bold"} to="/home">
            Home
          </Link>
          <Link className={pathname === "/about" ? "" : "text-white font-extralight"} to="/about">
            About
          </Link>
          <Link className={pathname === "/contact" ? "" : "text-white font-extralight"} to="/contact">
            Contact
          </Link>
          <Link className={pathname === "/blog" ? "" : "text-white font-extralight"} to="/blog">
            Blog
          </Link>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <img src="/assets/xmark.svg" alt="close-icon" onClick={() => setIsOpen(false)} />
          ) : (
            <img src="/assets/bars.svg" alt="bars-icon" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 mt-4 transform left-0 w-full bg-black transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <Link to="/home" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
