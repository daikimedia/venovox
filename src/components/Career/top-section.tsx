import React from 'react';
// import Image from 'next/image';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-black text-white mt-24">
                <div className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-center py-6 md:py-12">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">

                            {/* Left Content */}
                            <div className="md:w-[60%] text-center md:text-left space-y-6 md:space-y-8">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Shape The Future Of Trust – <span className="text-red-600">Join Our Team!</span>
                                </h1>
                                <p className="leading-relaxed text-justify [text-justify:inter-word] hyphens-none">
                                    At VENOVOX, we are passionate about helping businesses make informed decisions through reliable background screening solutions. With branches in four countries and growing, we&apos;re looking for dedicated professionals to join us on this exciting journey and help expand our employee portfolio with credible, talented individuals.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="md:w-[40%] flex justify-center md:justify-end">
                                <img
                                    src="/venovoxx.jpg"
                                    alt="Join Our Team"
                                    width={400}
                                    height={400}
                                    className="object-contain h-auto"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default VenovoxHero;
