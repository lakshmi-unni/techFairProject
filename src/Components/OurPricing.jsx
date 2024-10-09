import React, { useState } from 'react';

const OurPricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('default');

    const plans = {
        default: {
            title: 'Default Plan',
            price: 'Free',
            description: 'This plan gives new businesses all the features required to start.',
            features: [
                'Incorporate your company seamlessly',
                'Pay only government fees',
                'Access basic One View features',
            ],
        },
        yearly: {
            title: 'Yearly Plan',
            price: 'AED 5000/year',
            description: 'This plan gives new businesses all the features required to start with a discounted rate.',
            features: [
                'Incorporate your company seamlessly',
                'Pay only government fees',
                'Access basic One View features',
            ],
        },
    };

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='bg-[#FFFFFF] py-10'>
            <div className='text-center mb-8'>
                <h4 className='text-[14px] font-semibold text-[#223FBC]'>Our pricing</h4>
                <h1 className='text-[40px] font-bold'>
                    Absolute{' '}
                    <span className="bg-gradient-to-r from-custom-blue to-custom-pink bg-clip-text text-transparent">
                        transparency in our pricing;
                    </span>{' '}
                    we stick to our word!
                </h1>
                <p className='text-[15px] mb-4'>
                    Our default plan covers all your business needs for starting off, and Start and Grow covers all the services needed for growth.
                </p>
            </div>

            <div className="flex justify-center space-x-6">
                {/* Default Plan Card */}
                <div
                    onClick={() => handleSelectPlan('default')}
                    className={`border rounded-xl shadow-lg p-6 w-64 text-center cursor-pointer transition-all duration-300 
                        ${selectedPlan === 'default' ? 'bg-[#F8F9FF] text-[#000000] border-2' : 'bg-[#0F1738] text-[#FFFFFF] border-2'}`}
                >
                    <h2 className="text-[14px] bg-blue-300 text-[#353886] font-semibold mb-4 rounded-md">{plans.default.title}</h2>
                    <h3 className="bg-gradient-to-r from-custom-blue to-custom-pink bg-clip-text text-transparent text-[24px] font-bold mb-4">
                        {plans.default.price}
                    </h3>
                    <h4 className="text-sm text-gray-500 mb-6">Business start</h4>
                    <p>{plans.default.description}</p>
                    <ul className="text-left mb-6">
                        {plans.default.features.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Yearly Plan Card */}
                <div
                    onClick={() => handleSelectPlan('yearly')}
                    className={`border rounded-lg shadow-lg p-6 w-64 text-center cursor-pointer transition-all duration-300 
                        ${selectedPlan === 'yearly' ? 'bg-[#F8F9FF] text-[#000000] border-2' : 'bg-[#0F1738] text-[#C9CEE9] border-2'}`}
                >
                    <h2 className="text-[14px] bg-yellow-100 text-[#373807] font-semibold mb-4 rounded-md ">{plans.yearly.title}</h2>
                    <h3 className="bg-gradient-to-r from-custom-blue to-custom-pink bg-clip-text text-transparent text-[24px] font-bold mb-4">
                        {plans.yearly.price}
                    </h3>
                    <h4 className="text-sm text-gray-500 mb-6">Business start</h4>
                    <p>{plans.yearly.description}</p>
                    <ul className="text-left mb-6">
                        {plans.yearly.features.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurPricing;
