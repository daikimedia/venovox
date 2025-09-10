import React from 'react';
// import Image from 'next/image';

const cardData = [
    {
        image: '/grow1.jpg',
        title: 'Comprehensive training to sharpen your skills',
        description: `Empower yourself with targeted, hands-on training designed to elevate your expertise and boost your confidence. Whether you're enhancing technical know-how, leadership capabilities, or analytical thinking, our comprehensive programs offer the real-world demand. Learn from experienced professionals, engage in practical sessions, and walk away with sharpened skills that make an impact.`,
    },
    {
        image: '/grow2.jpg',
        title: 'Career advancement opportunities in a growing industry',
        description: `Step into a future filled with potential. As industries evolve and expand, new doors are opening for professionals eager to grow. Whether you're entering the field or climbing to the next rung on your career ladder, this is your moment to seize. With a rapidly growing industry, the opportunities for advancement in this thriving sector are vast and rewarding.`,
    },
    {
        image: '/grow3.jpg',
        title: 'A chance to work with a diverse, international team',
        description: `Experience the power of global collaboration. Working with a team of professionals from different backgrounds, cultures, and perspectives not only broadens how we view problems but also enhances creativity, problem-solving, and innovation. At VENOVOX, you're not just part of a team — you're part of a community united by shared goals and diverse strengths.`,
    },
    {
        image: '/grow4.jpg',
        title: 'On-the-job expert training',
        description: `Gain practical knowledge where it matters most — on the job. With hands-on experience from seasoned professionals and real-world problem solving, our approach prioritizes growth and development. The real-world experience provided by VENOVOX helps bridge the gap between training and performance, resulting not just in learning, but in mastering real-world application.`,
    },
];

const GrowWithUsSection = () => {
    return (
        <section className="bg-white text-black">
            <div className="container mx-auto py-12 px-6 space-y-12">
                <h2 className="text-4xl md:text-6xl font-bold text-black">
                    Grow with Us, Globally!
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {cardData.map((card, idx) => (
                        <div key={idx} className="space-y-0">
                            {/* Image */}
                            <div className="relative overflow-hidden h-[296px]">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Red title strip - immediately below image */}
                            <div className="bg-red-600 text-white text-center py-2 font-semibold">
                                {card.title}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-justify [text-justify:inter-word] hyphens-none mt-4">

                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default GrowWithUsSection;
