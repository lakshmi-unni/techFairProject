import React from "react";
import "./Common.scss";
import firstImg from './Assets/firstimg.png'
import secondImg from './Assets/2ndimg.png'
import thirdImg from './Assets/3rdimg.png'
import forthImg from './Assets/4thimg.png'
import fifthImg from './Assets/5thimg.png'

const StartAndGrow = () => {
  return (
    <div className="bg-image container mx-auto">
      <div className="text-center mb-8">
        <h4 className="text-[14px] font-semibold text-[#223FBC]">
          Start and Grow
        </h4>
        <h1 className="text-[40px] font-bold">
          Focus on your growth and we’ll take care of the rest.
        </h1>
        <p className="text-[15px] mb-4">
          We incorporate your business in the UAE and take all the hassle off of
          your hands. Hand it all over to us and you can focus on your growth.
          Our products and add-ons come together to provide you with everything
          you need.
        </p>
        <button className="bg-[#0F1738] mb-5 text-white p-2 rounded-md hover:bg-transparent hover:border-[#0F1738] hover:border-2 hover:text-[#0F1738]">
          START YOUR BUSINESS
        </button>
      </div>
    <div className="container px-80">
          <div className="grid grid-cols-3 gap-6 px-6">
        <div className="flex items-center justify-center  h-auto">
          <img src={firstImg} alt="Image 1" className="object-cover h-full w-full" />
        </div>
        <div className="flex items-center justify-center  h-auto">
          <img src={secondImg} alt="Image 2" className="object-cover h-full w-full" />
        </div>
        <div className="flex items-center justify-center bg-gray-200h-auto">
          <img src={thirdImg} alt="Image 3" className="object-cover h-full w-full" />
        </div>
        <div className="flex items-center justify-center bg-gray-200 h-auto col-span-2">
          <img src={forthImg} alt="Image 4" className="object-cover h-full w-full" />
        </div>
        <div className="flex items-center justify-center bg-gray-200 h-auto">
          <img src={fifthImg} alt="Image 5" className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default StartAndGrow;
