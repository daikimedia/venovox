"use client";
import { motion } from 'framer-motion';
// import Image from 'next/image';
import { ShieldCheck, Globe, Target, Check } from 'lucide-react';
import RecognizedBy from "@/components/home/recognitions-section";
import HeroSection from "@/components/home/hero-section";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Head>
        <link rel="canonical" href="https://venovox.com/my-en/background-screening" />
      </Head>
      {/* Hero Section */}
      <HeroSection />
      <RecognizedBy />


      {/* About Section */}
      <section id="about" className="py-20 px-6  bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="text-red-600">VENOVOX</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6  ">
                  VENOVOX is a premier risk management and background screening consultancy offering specialised services in due diligence, security advisory, background checks, and intelligence analysis across Malaysia, the Asia-Pacific regions, and globally.
                </p>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch]">
                  By leveraging local insight and global capabilities, we support businesses mitigate risk, ensure compliance, and enhance operational effectiveness.

                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/about-us.jpg"
                  alt="VENOVOX Global Team"
                  // fill
                  className="object-contain md:object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/vector2.png"
                  alt="International Standards"
                  // fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Rooted in <span className="text-red-600">Local Expertise</span>, Driven by <span className="text-red-600">International Standards</span>
                </h3>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6">
                  Founded in Malaysia back in 1999 and now headquartered in Texas, USA, VENOVOX has grown into a trusted leader in risk management solutions and background screening services.

                </p>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch]">
                  We specialize in identifying, assessing, authenticating, and mitigating risks to people, assets, operations, and reputations — empowering organisations to operate securely and confidently in complex environments.

                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screening Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Your Trusted Experts in <span className="text-red-600">Background Screening</span> and <span className="text-red-600">Risk Solutions</span>
                </h3>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch] mb-6">
                  Our enhanced screening process delivers accurate background check results with faster turnaround times – ensuring efficiency without compromising quality.

                </p>
                <p className="text-lg text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[70ch]">
                  With a seamless, stress-free experience and a proven track record of precision and timeliness, you can rely on us to support your hiring, verification, and authentication needs.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/vector1.png"
                  alt="Screening Process"
                  // fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-red-600">Core</span> Principles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-base text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[60ch]">
                  As an ISO 27001-certified company, we connect global security partners to deliver expert ground support and intelligence consulting across APAC and the global region.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Target className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-base text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[60ch]">
                  We deliver tailored risk management solutions that strengthen resilience, protect operations, and support strategic growth while upholding the highest ethical standards.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Values</h3>
                </div>
                <ul className="text-base text-gray-700 text-justify [text-justify:inter-word] hyphens-none max-w-[60ch]">
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reducing Risk – Proactively identify and mitigate threats</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supporting Compliance – Ensure adherence to standards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enhancing Efficiency – Strengthen processes and boost productivity</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl md:text-2xl italic text-gray-800 text-center">
              <p className="relative">
                <span className="absolute -left-6 -top-4 text-red-600 text-4xl">&quot;</span>
                Resilience is not about avoiding risks, instead, it is about responding effectively when they arise.
                <span className="absolute -right-6 -bottom-4 text-red-600 text-4xl">&quot;</span>
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </main>
  );
}