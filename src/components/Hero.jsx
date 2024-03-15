import React from "react";
import harvoxx from "../images/harvoxxlogo.png";

const Hero = () => {
  return (
    <div className="lg:w-full bg-background">
      <div className="w-4/5 m-auto flex flex-col-reverse lg:flex-row py-[30px]">
        <div className="w-full lg:w-1/2 flex flex-col pt-10 lg:pt-20 gap-y-8 items-center lg:items-start">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-h1Color">
            A whole awesome experience with Harvoxx Tech. Hub.
          </h1>
          <p className="text-slate-50  text-[16px] font-semibold">
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
            className="rounded-full border-[3px] text-[20px] font-medium py-2 bg-orange w-[50%] lg:w-[30%] text-center border-orange text-background hover:bg-transparent hover:text-h1Color"
          >
            Get Started
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex items-center pt-10">
          <img src={harvoxx} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
