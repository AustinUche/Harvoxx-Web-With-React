import React from "react";
import { Service } from "./data";

const Services = () => {
  return (
    <div className="w-full lg:w-full bg-gradWhite1">
      <div className="w-[95%] lg:w-[80%] flex flex-col lg:flex-row flex-wrap m-auto py-10">
        <h2 className="text-3xl text-background text-center uppercase pb-[50px] w-full font-bold relative before:content-[''] before:absolute before:h-[1px] before:w-[120px] before:top-[60%] before:left-[35%] lg:before:left-[45%] before:bg-slate-400 before:mt-[10px] after:content-[''] after:absolute after:bg-orange after:h-[3px] after:w-10 after:top-[60%] after:left-[47%] lg:after:left-[49%] after:mt-[9px]">
          Our Services
        </h2>
        <p className="text-center text-[#686869] leading-[22px] text-[16px] mb-4">
          Our structure is designed to provide the following services
          professionally and efficiently. Our team (of programmers, Business
          developers, strategists, marketers, Angel investors, entrepreneurs,
          graphic designers) puts in their very beat to ensure that our services
          delivery is top-notch
        </p>
        <div className="w-full m-auto lg:m-0 flex flex-row flex-wrap gap-2 group overflow-hidden cursor-pointer transition duration-500">
          {Service.map((item) => (
            <BoxContainer key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );

  function BoxContainer({ item }) {
    return (
      <div className="w-full lg:w-[49%] flex flex-wrap relative">
        <div className="w-[95%] m-auto overflow-hidden">
          <img
            src={item.img}
            alt=""
            className="group-hover:scale-[1.1] transition duration-500"
          />
        </div>
        <div className="w-[80%] m-auto bg-[white] relative bottom-14 p-[30px] flex flex-col justify-center gap-4 shadow-lg h-[350px] lg:h-[280px] before:content-[''] before:absolute before:w-full before:h-1 before:bg-orange before:top-0 before:left-0 before:hidden before:group-hover:block before:transition before:ease-in-out before:duration-500">
          <h1 className="text-center text-background text-2xl font-bold ">
            <a href="website">{item.label}</a>
          </h1>
          <p className="text-[#5e5e5e] w-full">
            <a href="harvoxx" className="text-orange">
              {item.link}
            </a>
            {item.content}
            {item.content1}
            <a href="website" className="text-orange">
              {item.link1}
            </a>
            {item.content2}
            <a href="website" className="text-orange">
              {item.link2}
            </a>
            {item.content3}
          </p>
          <div className="flex gap-4 items-center text-[10px]">
            <i>{item.icon}</i>
            <p>{item.read}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Services;
