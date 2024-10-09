import React from 'react'
import logo from './Assets/grain.svg'
import './Common.scss'


const Header = () => {
  return (
//  <div className='flex justify-between items-center container mx-auto px-4 py-4'>
//    <div className="container mx-auto px-6">

  // <div className="logo flex">
  //   <img src={logo} alt="" />
  //   <h6>One View</h6>

  // </div>

//   <div className='menu'>
//     <ul className='flex items-center'>
//       <li>hi</li>
//       <li>hi</li>

//       <li>hi</li>

//       <li>hi</li>

//     </ul>

//   </div>
 
//  </div>
//  </div>
<nav className="bg-transparent py-4 text-[14px] sticky">
<div className="container mx-auto px-4 flex justify-evenly items-center">
<div className="logo flex">
    <img src={logo} alt="" />
    <h6>One View</h6>

  </div>
  <div className="flex space-x-3 text-[#0F1738]">
  <select className="custom-select">
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>

    <a href="#" className=" hover:underline">About</a>
    <a href="#" className=" hover:underline">Resources</a>

    
  </div>
  <div className="flex space-x-3">
 <button className='text-[#0F1738] p-2 border-2 border-[#0F1738] rounded-md hover:bg-[#0F1738]  hover:text-white'>
    LOGIN
</button>
<button className='bg-[#0F1738] text-white p-2  rounded-md hover:bg-transparent hover:border-[#0F1738] hover:border-2 hover:text-[#0F1738]'>
    START YOUR BUSINESS
</button>

  </div>
</div>
</nav>
  )
}

export default Header