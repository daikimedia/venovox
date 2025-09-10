"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence, Variants } from "framer-motion"
import servicesData from "@/data/our-services.json"
import Head from "next/head"


export default function OurServicesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})
    const headerRef = useRef(null)
    const isInView = useInView(headerRef, { once: true })

    // Get unique categories from services
    const categories = ["all", ...new Set(servicesData.services.map((service) => service.id.split("-")[0]))]

    // Filter services based on search term and category
    const filteredServices = servicesData.services.filter((service) => {
        const matchesSearch =
            service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.metaDescription.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = activeCategory === "all" || service.id.startsWith(activeCategory)

        return matchesSearch && matchesCategory
    })

    // Animation variants - properly typed
    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const fadeInUp: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 100,
            },
        },
    }

    const scaleIn: Variants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 100,
            },
        },
    }

    // Helper function to get image for each service
    const getServiceImage = (serviceId: string, image?: string) => {
        if (image) {
            return image.startsWith('/') ? image : `/images/${image}`
        }
        return '/images/placeholder.svg'
    }

    const handleImageError = (serviceId: string) => {
        setImgErrors(prev => ({ ...prev, [serviceId]: true }))
    }

    return (<>
        <Head>
            <link rel="canonical" href="https://venovox.com/my-en/our-services" />
        </Head>
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/services-hero.jpg"
                        alt="Our Services"
                        // fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    // priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                </div>

                <div className="container mx-auto px-4 py-24 mt-20 relative z-10">
                    <motion.div
                        ref={headerRef}
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            VENOVOX offers comprehensive solutions to protect your business, ensure continuity, and support
                            sustainable growth across the Asia-Pacific region.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/my-en/contact-us"
                                className="px-8 py-4 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                {/* Search and filter */}
                <div className="mb-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-300 focus:border-red-600 focus:outline-none text-gray-900"
                            />
                            <svg
                                className="absolute right-4 top-4 h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        {/* Category filters */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + searchTerm}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                className="group bg-white border border-gray-200 overflow-hidden flex flex-col h-full"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={imgErrors[service.id] ? '/images/placeholder.svg' : getServiceImage(service.id, service.image)}
                                        alt={service.title}
                                        // fill
                                        style={{ objectFit: "cover" }}
                                        onError={() => handleImageError(service.id)}
                                        className="group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h2 className="text-2xl font-bold mb-3 text-black group-hover:text-red-600 transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-700 mb-6 flex-grow text-justify [text-justify:inter-word] hyphens-none">

                                        {service.metaDescription.length > 120
                                            ? `${service.metaDescription.substring(0, 120)}...`
                                            : service.metaDescription}
                                    </p>
                                    <Link
                                        href={`/my-en/background-screening/${service.id}`}
                                        className="inline-flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Learn more
                                        <svg
                                            className="ml-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No results message */}
                {filteredServices.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <svg
                            className="mx-auto h-16 w-16 text-gray-400 mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all services</p>
                        <button
                            onClick={() => {
                                setSearchTerm("")
                                setActiveCategory("all")
                            }}
                            className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                        >
                            View All Services
                        </button>
                    </motion.div>
                )}

                {/* Call to action */}
                <motion.div
                    className="mt-24 bg-black text-white p-12"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-3xl font-bold mb-4">Ready to safeguard your business?</h3>
                            <p className="text-gray-300 text-lg max-w-2xl">
                                Our team of experts is ready to provide tailored solutions to address your specific business challenges
                                and help you stay ahead of risks.
                            </p>
                        </div>
                        <Link
                            href="/my-en/contact"
                            className="px-8 py-4 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Why choose us section */}
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why Choose VENOVOX</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Global Expertise",
                                description:
                                    "Our team brings international experience with local knowledge across the Asia-Pacific region.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Tailored Solutions",
                                description: "We customize our services to meet your specific business needs and challenges.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Proven Track Record",
                                description: "We've successfully served multinational corporations and government agencies worldwide.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cutting-Edge Technology",
                                description: "We employ the latest technologies and methodologies to deliver superior results.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex justify-center mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                                <p className="text-gray-700 text-justify [text-justify:inter-word] hyphens-none">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}