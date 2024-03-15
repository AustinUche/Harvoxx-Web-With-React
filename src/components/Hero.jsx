import React from "react";
import harvoxx from "../images/harvoxxlogo.png";

const Hero = () => {
  return (
    <div className="lg:w-full bg-[#213b52]">
      <div className="w-4/5 m-auto flex py-[30px]">
        <div className="w-1/2 flex flex-col pt-20 gap-y-8">
          <h1 className="text-6xl font-extrabold text-[#D2E0ED]">
            A whole awesome experience with Harvoxx Tech. Hub.
          </h1>
          <p className="text-[#FFFFFF]  text-[22px] font-semibold">
            Right here is an organized hub of seasoned and aspiring
            techpreneurs, developers, graphics designers and innovators with
            strong passion for technology and entrepreneurship.
            <br /> <br />
            It is a great platform for people to grow, develop amazing
            programming and business development skills.
            <br /> <br />
            It is a community that has a fast growing alliances with Angel
            Investors, VCs, NGOs and other tech communities.
          </p>
          <a
            href="getstarted"
            className="rounded-full border-[3px] text-[22px] font-medium px-8 py-2 bg-[#FDC134] w-[30%] text-center border-[#FDC134] text-[#213B52] hover:bg-transparent hover:text-[#D2E0ED] transition-all"
          >
            Get Started
          </a>
        </div>
        <div className="w-1/2 flex items-center">
          <img src={harvoxx} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
