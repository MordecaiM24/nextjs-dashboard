import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" />

      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="ml-10 cursor-pointer font-poppins text-base font-normal text-white"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-end justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="mb-4 font-poppins text-base font-normal text-white"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
