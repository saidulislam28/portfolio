import { useEffect } from "react";
import "./nav.css";
import SLogo from "../../../public/s.png";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = (
    <>
      <li>
        <a href="#home" className="nav-link text-lg">
          Home
        </a>
      </li>

      <li>
        <a href="#skill1" className="nav-link text-lg">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects1" className="nav-link text-lg">
          Projects
        </a>
      </li>

      <li>
        <a href="#education1" className="nav-link text-lg">
          Education
        </a>
      </li>
      <li>
        <a href="#contact1" className="nav-link text-lg">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto navbar  lg:fixed top-0 right-0 left-0  flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a href="/" id="home" className=" flex items-center gap-2">
          <div className="border h-8 w-8 bg-white rounded-full">
            <img
              className="h-full w-full"
              src={SLogo}
              alt="Article"
            />
          </div>
          <span className="text-3xl font-semibold font-serif">Saidul</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
