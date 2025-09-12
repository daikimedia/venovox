import React from 'react';
// import Image from 'next/image';

const FunTeamSection = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden min-h-[450px]">
            {/* Top Red Box */}
            <div className="absolute top-0 right-0 w-24 h-20 md:w-32 md:h-28 bg-red-600 z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">

                    {/* Left Text Section */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold text-white py-2">
                            Be Part of a <br />
                            <span className="ml-12">Credible</span>
                            <br className="hidden md:block" /> and Fun Team!
                        </h2>
                        <p className="text-gray-200 text-justify [text-justify:inter-word] hyphens-none max-w-xl mx-auto lg:mx-0">
                            We’re all about creating a supportive and engaging workplace
                            where your ideas are heard and your efforts are recognized.
                        </p>

                        <div className="mt-4">
                            <div className="bg-red-600 text-white inline-block px-4 py-2 md:px-6 md:py-4 text-base md:text-lg font-medium">
                                ESG & Corporate Responsibility
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section with Logo in Background */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        {/* Background Venovox Logo */}
                        <img
                            src="/venovox-logo.png"
                            alt="Venovox Logo"
                            className="absolute inset-0 w-full h-full object-contain opacity-10 z-0"
                        />

                        {/* Person Image */}
                        <img
                            src="/funteam.png"
                            alt="Team Member"
                            className="absolute inset-0 w-full h-full object-contain z-10"
                        />
                    </div>


                </div>
            </div>
        </section>

    );
};

export default FunTeamSection;
