import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiCheckCircle } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";




const Slider = ({ title, id, data, desc }) => {
 

  const sliderLeft = (id) => {
    const slider = document.getElementById(id);
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = 1956;
    } else {
      slider.scrollLeft = slider.scrollLeft - 450;
    }
  };

  const sliderRight = (id) => {
    const slider = document.getElementById(id);
    if (slider.scrollLeft === 1956) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = slider.scrollLeft + 450;
    }
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <h4 className='text-3xl mt-10 font-bold'>{title}</h4>
        <span className="text-1xl font-medium">{desc}</span>
        <div className="w-50% px-2 mt-2">
          <div className="reletive flex items-center">
            <SlArrowLeft
              className="hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-3xl"
              onClick={() => sliderLeft(id)}
            />
            <div
              id={id}
              className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
            >
              {data.map((el) => (
                <>
                <Link to={`/${el.id}`}><div className="group inline-block relative w-[400px] md:w-[220px] lg:w-[270px]">
                  <img
                    className=" brightness-[80%] w-[400px] md:w-[220px] lg:w-[270px]  rounded-xl p-1 md:p-2 object-fill  cursor-pointer group-hover:scale-105 ease-out duration-300 "
                    src={el.img}
                    alt="Photo"
                  />
                  <span className="  z-20 font-bold text-2xl md:text-sm lg:text-base  max-sm:text-2xl text-[#F7F7F7] bottom-[8%]  right-0 left-0 text-center  absolute  group-hover:scale-105 ease-out duration-300  ">
                    {el.text}
                  </span>
                </div>
                </Link>
                <Outlet context={{bg:el.img}}/>
                </>
              ))}
            </div>
            <SlArrowRight
              className=" hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-3xl"
              onClick={() => sliderRight(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
