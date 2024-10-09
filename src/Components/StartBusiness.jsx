// import React from 'react';
// import DashBoardImg from './Assets/dashboard.png';

// const StartBusiness = () => {
//   return (
//     <div className='flex justify-center items-center min-h-screen absolute'>
//       <div className='dashboard '>
//         <img className='w-full h-auto' src={DashBoardImg} alt="Dashboard" />
//       </div>
//     </div>
//   );
// }

// export default StartBusiness;
import React from 'react';
import DashBoardImg from './Assets/dashboard.png';

const StartBusiness = () => {
  return (
    <div className='bg-[#F5F7FF]'>
    <div className='flex justify-center items-center min-h-screen relative ' >
      <div className='dashboard flex justify-center items-center absolute -top-8 '>
        <img className='max-w-full max-h-full' src={DashBoardImg} alt="Dashboard" />
      </div>
     
    </div>
     <div className='text-center '>
     <h4 className='text-[14px] font-semibold text-[#223FBC]'>Start and Grow</h4>
     <h1 className='text-[40px] font-bold'>Start your <span className="bg-gradient-to-r from-custom-blue to-custom-pink bg-clip-text text-transparent">
  business
</span> from scratch.</h1>
<p className='text-[15px] mb-4 '>We start your business and take care of all the documents and regulatory procedures in order to make your business fully functional in the UAE in only 2-3 weeks.</p>
<div className='my-7 mb-8'>
<button className='bg-[#0F1738] mb-5 text-white p-2  rounded-md hover:bg-transparent hover:border-[#0F1738] hover:border-2 hover:text-[#0F1738]'>
    START YOUR BUSINESS
</button>
</div>
   
   </div>
   </div>
  );
}

export default StartBusiness;
