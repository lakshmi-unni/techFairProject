import React, { useState } from 'react';

const ToggleButton = () => {
    const [isExistingCompany, setIsExistingCompany] = useState(true);

    const toggleInput = () => {
        setIsExistingCompany((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center w-[474px]">
           
            <div className="flex items-center border rounded-md overflow-hidden w-full">
                <input
                    type="text"
                    placeholder={isExistingCompany ? "Enter your existing company name" : "Enter your new company name"}
                    className="flex-1 p-2 border-none outline-none text-[#0F1738] placeholder-[#C9CEE] w-full"
                />
                <button className="bg-gradient-to-r from-custom-blue to-custom-pink text-white p-2 transition duration-300">
                    Get Started
                </button>
            </div>
            <div className="flex items-center justify-between w-full mb-4 p-3">
                <label className={`cursor-pointer ${isExistingCompany ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
                    Existing Company
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={isExistingCompany}
                        onChange={toggleInput}
                    />
                    <div className={`w-16 h-8 rounded-full shadow-inner ${isExistingCompany ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                    <div
                        className={`absolute w-7 h-7 bg-white rounded-full shadow left-1 transition ${isExistingCompany ? 'transform translate-x-0' : 'translate-x-8'}`}
                    ></div>
                </label>
                <label className={`cursor-pointer ${!isExistingCompany ? 'text-blue-600' : 'text-gray-400'}`}>
                    New Company
                </label>
            </div>
        </div>
    );
};

export default ToggleButton;
