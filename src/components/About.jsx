import React from "react";
import about from "../images/about-img.jpg";
import { Abouts } from "./data";

const About = () => {
  return (
    <div className="w-full bg-[#f3f7fb]">
      <div className="w-[80%] m-auto flex py-16">
        <div className="flex justify-center w-[40%] mr-[4%]">
          <img src={about} className="w-full bg-contain" />
        </div>
        <div className="flex flex-wrap w-[56%]">
          <h3 className="text-[34px] text-[#213b52] font-bold mb-[10px] ">
            About Harvoxx Tech Hub
          </h3>
          <p className="text-[#444444] text-[16px] mb-[10px]">
            HTH is an Innovative Hub designed to be a business growing
            community. It is a great set-up where ideas and opportunities are
            maximized. We have an enabling environment that guarantees seamless
            execution of ideas, encourage creativity, entrepreneurship and
            leadership mindset...{" "}
            <a href="read" className="text-[#213b52] italic">
              Read More
            </a>
          </p>
          <div className="flex w-full flex-wrap">
            {Abouts.map((item) => (
              <AboutContents key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  function AboutContents({ item }) {
    return (
      <div className="w-[50%] flex justify-center gap-5">
        <div className="w-1/4 text-[30px] text-[#fdc134]">{item.icon}</div>
        <div className="w-3/4 ">
          <h4 className="text-[20px] mb-[10px] text-[#213b52] font-bold">{item.label}</h4>
          <p className="text-[15px] text-[#848484]">{item.content}</p>
        </div>
      </div>
    );
  }
};

export default About;
