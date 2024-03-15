import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="lg:w-full bg-background max-w-full">
      <div className="w-full lg:w-[85%] flex justify-between items-center m-auto">
        <h1 className="hidden lg:block text-3xl font-bold tracking-wide text-white">
          HARVOXX <span className="text-orange">TECH HUB</span>
        </h1>
        <ul className="hidden lg:flex m-4">
          <li className="list-none flex justify-between items-center gap-7">
            <a href="home" className="text-base text-slate-50">
              Home
            </a>
            <a href="about" className="text-base text-slate-400">
              About Us
            </a>
            <a href="services" className="text-base text-slate-400">
              Services
            </a>
            <a href="contact" className="text-base text-slate-400">
              Contact Us
            </a>
            <a
              href="get-started"
              className="rounded-full border-[2px] text-slate-50 px-6 py-1 border-orange"
            >
              Get Started
            </a>
          </li>
        </ul>
        <IoMenu className="fixed lg:hidden right-5 top-5 text-3xl text-orange font-extrabold " />
      </div>
    </div>
  );
};

export default Header;
