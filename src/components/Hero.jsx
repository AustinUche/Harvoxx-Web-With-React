import React from "react";
import harvoxx from "../images/harvoxxlogo.png";

const Hero = () => {
  return (
    <div className="lg:w-full bg-[#213b52]">
      <div className="w-4/5 m-auto flex py-20">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-extrabold text-[#D2E0ED]">
            A whole awesome experience with Harvoxx Tech. Hub.
          </h1>
          <p>
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
          <a href="getstarted" className="rounded-full border-2 px-4 py-2">
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
