import React from 'react'
import RIghtImg from './Assets/right-image.png'
import ToggleButton from './ToggleButton'

const BgContent = () => {
  return (
  <div className="container px-64 py-28">
      <div className='flex'>
        <div className='left-content'>
      <h2 className='text-[#1E1F21] font-bold text-[70px] leading-[70px]'> Build your business here and now.</h2>
      <p className='text-base font-normal leading-[24px]'>We help you <span className='font-semibold'>start</span>,<span className='font-semibold'> grow</span>, and build your <span className='font-semibold'>dream business</span> in the UAE.
      Just a few steps, and you’ll be right on track!</p>
      {/* <div className="flex items-center border  rounded-md overflow-hidden w-[474px]"> 
    <input
        type="text"
        placeholder="Enter your company name"
        className="flex-1 p-2 border-none outline-none text-[#0F1738] placeholder-[#C9CEE] w-full" 
       
    />
    <button className="bg-gradient-to-r from-custom-blue to-custom-pink text-white p-2  transition duration-300">
        Get Started
    </button>

    <div className="flex">
        <ToggleButton/>
    </div>
   
</div> */}
{/* <div className="flex items-center border rounded-md overflow-hidden w-[474px]">
    <input
        type="text"
        placeholder="Enter your company name"
        className="flex-1 p-2 border-none outline-none text-[#0F1738] placeholder-[#C9CEE] pr-16" 
    />
    <button className="bg-gradient-to-r from-custom-blue to-custom-pink text-white h-full p-2">
        Get Started
    </button>
</div> */}
<div className="flex">
        <ToggleButton/>
    </div>



        </div>
       
        <div className="right-content">
       <img className='w-full h-full' src={RIghtImg} alt="" />
        </div>


    </div>
  </div>
  )
}

export default BgContent