import React from 'react'
import price from "../images/price.jpg"

const Prices = () => {
    return (
      <div className="w-full bg-gradient-to-b from-gradWhite to-[white]">
        <div className="w-full lg:w-[80%] m-auto py-10 flex flex-col gap-5">
          <h2 className="text-3xl text-background text-center uppercase pb-[50px] font-bold relative before:content-[''] before:absolute before:h-[1px] before:w-[120px] before:top-[60%] before:left-[34%] lg:before:left-[45%] before:bg-slate-400 before:mt-[10px] after:content-[''] after:absolute after:bg-orange after:h-[3px] after:w-10 after:top-[60%] after:left-[45%] lg:after:left-[49%] after:mt-[9px]">
            pricing
                </h2>
            <img src={price} alt="" className='w-full ' />
        </div>
      </div>
    );
}

export default Prices