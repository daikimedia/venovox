'use client';

// import Image from 'next/image';
import { motion } from 'framer-motion';

const recognizedByLogos = [
  { src: '/ism.jpeg', alt: 'ISM Logo', width: 160, height: 60 },
  { src: '/isms1.jpeg', alt: 'ISM Logo', width: 150, height: 70 },
  { src: '/isms2.jpeg', alt: 'ISM Logo', width: 180, height: 60 },
  { src: '/isms3.jpeg', alt: 'ISM Logo', width: 160, height: 80 },
  { src: '/napbs-logo.png', alt: 'PBSA Logo', width: 110, height: 30 },
  { src: '/md-status.png', alt: 'Malaysia Digital Logo', width: 130, height: 30 },
  { src: '/mof.png', alt: 'MOF Registered Logo', width: 140, height: 40 },
  { src: '/hrd.png', alt: 'HRD Corp Logo', width: 130, height: 60 },
];

const RecognizedBy = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
          >
            <span className="text-red-600">Recognized</span> & Trusted Worldwide
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
          >
            Endorsed by global leaders, our excellence speaks through every certification.
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          >
            {[...recognizedByLogos, ...recognizedByLogos].map((logo, index) => (
              <div key={index} className="min-w-[160px] h-[120px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
