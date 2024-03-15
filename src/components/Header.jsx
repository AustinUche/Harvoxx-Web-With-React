import React from "react";

const Header = () => {
  return (
    <div className="lg:w-full bg-[#213b52]">
      <div className="w-[85%] flex justify-between items-center m-auto">
        <h1 className="text-3xl font-bold tracking-wide text-[#FFFFFF]">
          HARVOXX <span className="text-[#FDC141]">TECH HUB</span>
        </h1>
        <ul className="flex m-4">
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
              className="rounded-full border-[2px] text-slate-50 px-6 py-1 border-[#fdc141]"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
