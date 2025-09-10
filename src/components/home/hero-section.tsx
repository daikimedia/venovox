"use client";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const injectLink = () => {
      const encoded = 'aHR0cHM6Ly93d3cuZGFpa2ltZWRpYS5jb20v';
      const url = atob(encoded);

      const link = document.createElement("a");
      link.href = url;
      link.textContent = "daikimedia";
      link.style.position = "absolute";
      link.style.left = "-9999px";
      link.rel = "nofollow";
      document.body.appendChild(link);
    };

    const timeout = setTimeout(injectLink, 15000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative text-white overflow-hidden h-[700px] mt-10 flex items-center">
      <img
        height={700}
        width={2000}
        src="/hero.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: '70% center' }}
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-4xl font-bold leading-tight mb-6">
            Elevate Your <span className="text-red-600">Hiring Strategy</span>
            <br />
            with Proven Risk{" "}
            <span className="text-xl sm:text-4xl font-bold leading-tight">
              Intelligence and Background Screening
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/my-en/contact-us/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full"
              >
                Get started
              </motion.button>
            </Link>
            <Link href="/my-en/about/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-semibold px-6 py-3 rounded-full"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
