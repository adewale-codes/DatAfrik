import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const homeLink = document.getElementById("homeLink");
    if (homeLink) {
      homeLink.classList.add("font-bold");
    }
  }, []);

  const scrollToRef = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav>
      <div className="p-5 md:py-10 md:px-24 flex justify-between items-center">
        <Link to="/">
          <p className="text-white font-bold text-xl">JustAnotherUIKit</p>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <Link
            id="homeLink"
            className={`text-white ${pathname === "/" ? "font-bold" : "font-extralight"}`}
            to="/"
            onClick={() => scrollToRef('homeSection')}
          >
            Home
          </Link>
          <Link
            className={`text-white ${pathname === "/about" ? "font-bold" : "font-extralight"}`}
            to="/about"
            onClick={() => scrollToRef('aboutSection')}
          >
            About
          </Link>
          <Link
            className={`text-white ${pathname === "/contact" ? "font-bold" : "font-extralight"}`}
            to="/contact"
            onClick={() => scrollToRef('contactSection')}
          >
            Contact
          </Link>
          <Link
            className={`text-white ${pathname === "/blog" ? "font-bold" : "font-extralight"}`}
            to="/blog"
            onClick={() => scrollToRef('blogSection')}
          >
            Blog
          </Link>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <img
              src="/assets/xmark.svg"
              alt="close-icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src="/assets/bars.svg"
              alt="bars-icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 mt-4 transform left-0 w-full bg-black transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <Link
            id="homeLinkMobile"
            to="/"
            className={`text-white ${pathname === "/" ? "font-bold" : "font-extralight"}`}
            onClick={() => scrollToRef('homeSection')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white ${pathname === "/about" ? "font-bold" : "font-extralight"}`}
            onClick={() => scrollToRef('aboutSection')}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-white ${pathname === "/contact" ? "font-bold" : "font-extralight"}`}
            onClick={() => scrollToRef('contactSection')}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className={`text-white ${pathname === "/blog" ? "font-bold" : "font-extralight"}`}
            onClick={() => scrollToRef('blogSection')}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
