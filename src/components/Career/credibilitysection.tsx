import React from 'react';
// import Image from 'next/image';

const VenovoxCredibilitySection = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">

                {/* Red accent block – bottom left (desktop only) */}

                <div className="hidden md:block absolute bottom-0 left-0 w-40 h-24 bg-red-600"></div>

                <div className="relative z-10 flex items-center py-6 md:py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">

                        {/* Left Image */}
                        <div className="md:w-[40%] flex justify-center md:justify-start">
                            <img
                                src="/career1.jpg"
                                height={400}
                                width={400}
                                alt="Handshake with Tech Overlay"
                                className="object-contain h-auto"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-[60%] text-center md:text-left space-y-6 md:space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Why Join Us? Because
                                <br />
                                <span className="text-red-600"> Credibility is Key!</span>
                            </h2>

                            <p className="leading-relaxed text-justify [text-justify:inter-word] hyphens-none">
                                At VENOVOX, we believe trust is earned—and we help you build it from the ground up. By joining us, you&lsquo;re choosing a partner committed to transparency, accuracy, and integrity. Whether it&lsquo;s background screening, due diligence, or compliance checks, our work speaks for itself. We don’t just deliver reports—we deliver peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenovoxCredibilitySection;
