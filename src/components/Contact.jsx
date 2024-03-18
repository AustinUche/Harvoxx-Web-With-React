import React from "react";
import { ContactCards } from "./data";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gradWhite1 to-[white]">
      <div className="w-full lg:w-[80%] m-auto flex flex-col gap-5 py-[60px]">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl text-background text-center uppercase pb-[50px] font-bold relative before:content-[''] before:absolute before:h-[1px] before:w-[120px] before:top-[60%] before:left-[3%] lg:before:left-[45%] before:bg-slate-400 before:mt-[10px] after:content-[''] after:absolute after:bg-orange after:h-[3px] after:w-10 after:top-[60%] after:left-[35%] lg:after:left-[49%] after:mt-[9px]">
            contact
          </h2>
        </div>
        <div className="w-full flex flex-col gap-5">
          {ContactCards.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="w-[90%] m-auto flex flex-wrap justify-center shadow-[0_0_30px_rgba(214,215,216,0.6)]">
          <form
            action=""
            className="w-full shadow-[0_0_30px_rgba(214, 215, 216, 0.6)] bg-[white] py-[30px]"
          >
            <div className="w-[90%] m-auto flex flex-wrap gap-4 lg:gap-0 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full lg:w-[49%] border-solid border-[1px] text-[14px] p-[10px_20px] border-[0_0_30px_rgba(214,215,216,0.6)] mr-0 lg:mr-[2%]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full lg:w-[49%] border-solid border-[1px] text-[14px] p-[10px_20px] border-[0_0_30px_rgba(214,215,216,0.6)]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-solid border-[1px] text-[14px] p-[10px_20px] border-[0_0_30px_rgba(214,215,216,0.6)]"
              />
            </div>
            <textarea
              name="text"
              id="textarea"
              cols="10"
              rows="5"
              placeholder="Message"
              className="w-[90%] m-auto border-solid border-[1px] text-[14px] p-[10px_20px] border-[0_0_30px_rgba(214,215,216,0.6)] ml-[5%]"
            ></textarea>
          </form>
          <a
            href="send"
            className="border-solid border-[3px] border-orange p-[10px_30px] no-underline text-[14px] font-bold bg-orange cursor-pointer"
          >
            send
          </a>
        </div>
      </div>
    </div>
  );

  function Cards({ item }) {
    return (
      <div className="w-[90%] m-auto flex flex-col shadow-[0_0_30px_rgba(214,215,216,0.6)] bg-[white] items-center text-center p-[20px_10px_30px_10px]">
        <i className="text-[32px] font-extrabold mb-[10px] text-orange flex items-center">
          {item.icon}
        </i>
        <h2 className="text-[#77777] text-xl mb-[10px] font-[700]'">
          {item.label}
        </h2>
        <p className="text-[#777777] text-sm">{item.content1}</p>
        <p className="text-[#777777] text-sm">{item.content2}</p>
        <p className="text-[#777777] text-sm">{item.content3}</p>
        <a href="hello" className="text-sm text-background font-[700]">
          {item.link1}
        </a>
        <div className="flex gap-1">
          <a href="help" className="text-sm text-background font-[700]">
            {item.link2}
          </a>
          <a href="admin" className="text-sm text-background font-[700]">
            {item.link3}
          </a>
        </div>
      </div>
    );
  }
};

export default Contact;
