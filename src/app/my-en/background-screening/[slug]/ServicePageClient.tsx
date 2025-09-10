"use client";

import { type Key, useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface InternalLink {
    text: string;
    url: string;
}

interface ServiceHighlight {
    text: string;
    anchor: string;
}

interface Section {
    title: string;
    content: string[];
}

interface Service {
    id: string;
    title: string;
    url: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    tagline?: string;
    overview?: string;
    sections?: Section[];
    internalLinks: InternalLink[];
    serviceHighlights?: ServiceHighlight[];
    h2?: string[];
    h3?: string[];
    content?: string[];
}

import servicesData from "@/data/our-services.json";

interface ServicePageClientProps {
    slug: string;
}



export default function ServicePageClient({ slug }: ServicePageClientProps) {
    const [service, setService] = useState<Service | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const foundService = servicesData.services.find(
            (service) => service.id === slug
        );
        setService(foundService || null);
    }, [slug]);

    useEffect(() => {
        if (isMounted && service) {
            document.title = service.metaTitle;
            const metaDescription = document.querySelector(
                'meta[name="description"]'
            );
            if (metaDescription) {
                metaDescription.setAttribute("content", service.metaDescription);
            }
        }
    }, [service, isMounted]);

    const scrollToSection = (anchor: string) => {
        const element = document.querySelector(anchor);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const pageTransition: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 },
        },
        exit: { opacity: 0, transition: { duration: 0.4 } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const fadeInUp: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const scaleIn: Variants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            },
        },
    };

    if (!isMounted) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="w-16 h-16 relative">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-red-600 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white">
                <h1 className="text-3xl font-bold mb-4 text-black">
                    Service Not Found
                </h1>
                <p className="mb-6 text-gray-700">
                    The service you are looking for does not exist.
                </p>
                <Link
                    href="/my-en/background-screening/our-services"
                    className="px-8 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors duration-300"
                >
                    Back to Services
                </Link>
            </div>
        );
    }

    const getServiceImage = (serviceId: string) => {
        return `/placeholder.svg?height=400&width=600&text=${serviceId
            .replace(/-/g, " ")
            .toUpperCase()}`;
    };

    // Function to create anchor ID from text
    const createAnchorId = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .replace(/\s+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const renderContent = (content: string[]) => {
        return content.map((item, index) => {
            if (item.trim().startsWith("✔") || item.trim().startsWith("✅")) {
                const cleanItem = item.trim();
                const isIndented = item.startsWith("    ");
                return (
                    <div
                        key={index}
                        className={`flex items-start gap-2 mb-3 group ${isIndented ? "ml-6" : ""}`}
                    >
                        <span className="text-black text-2xl relative -top-1 transform group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                            •
                        </span>
                        <p className="text-gray-700  leading-relaxed">
                            {cleanItem.substring(2)}
                        </p>
                    </div>

                );
            }

            // Check for any emoji at the start and replace with bullet point
            if (/^[🔍🛡💼⚖📊🔄🏢📉💰🌍🔒📦🛒📁🔹✔⚖️🎙📝🛠⚖️📋🏛📜⚖🔎]/u.test(item.trim())) {
                const cleanItem = item.trim();
                const isIndented = item.startsWith("    ");
                // Remove the emoji and get the rest of the text
                const textWithoutEmoji = cleanItem.replace(/^[\u{1F000}-\u{1F6FF}][\u{2000}-\u{206F}]?/u, '').trim();
                return (
                    <div key={index} className="flex items-center gap-4 my-6">
                        <div className={`flex items-start group ${isIndented ? "ml-6" : ""}`}>
                            <span className="text-black text-xl relative -top-0 ml-4 "> ➜  </span>
                            <p className="text-gray-800 font-medium leading-relaxed ml-2">
                                {textWithoutEmoji}
                            </p>
                        </div>
                    </div>

                );
            }

            // Check if this is an h2 heading from the h2 array
            if (service.h2?.includes(item.trim())) {
                const anchorId = createAnchorId(item.trim());
                return (
                    <h2
                        key={index}
                        id={anchorId}
                        className="text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-42"
                    >
                        {item}
                    </h2>
                );
            }

            // Check if this is an h3 heading from the h3 array
            if (service.h3?.includes(item.trim())) {
                const anchorId = createAnchorId(item.trim());
                return (
                    <h3
                        key={index}
                        id={anchorId}
                        className="text-xl font-semibold mt-6 mb-3 text-gray-800 scroll-mt-24"
                    >
                        {item}
                    </h3>
                );
            }

            return (
                <p
                    key={index}
                    className="mb-4 text-gray-700 leading-relaxed text-justify"
                >
                    {item}
                </p>
            );
        });
    };

    return (
        <motion.div
            className="bg-white min-h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
        >
            {/* Hero section */}
            <div className="relative mt-20 w-full h-[45vh] overflow-hidden">
                <img
                    src={getServiceImage(service.id) || "/placeholder.svg"}
                    alt={service.title}
                    // fill
                    style={{ objectFit: "cover" }}
                    // priority
                    className="brightness-50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
                    <div className="text-center px-4 max-w-4xl">
                        {service.tagline && (
                            <motion.p
                                className="text-red-400 text-lg font-medium mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                {service.tagline}
                            </motion.p>
                        )}
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {service.h1}
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Breadcrumb navigation */}
            <div className="bg-gray-50 py-4 px-4 border-b border-gray-200">
                <div className="container mx-auto ">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link
                            href="/my-en/background-screening"
                            className="hover:text-red-600 transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link
                            href="/my-en/background-screening/our-services"
                            className="hover:text-red-600 transition-colors duration-200"
                        >
                            Our Services
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">{service.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content column */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Overview Section */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-8 bg-red-600 mr-4"></div>
                                <h2 className="text-3xl font-bold text-black">Overview</h2>
                            </div>
                        </motion.div>

                        {/* Services Sections */}
                        {service.content && (
                            <motion.div
                                variants={fadeInUp}
                                className="prose prose-p:text-justify prose-p:[text-justify:inter-word] prose-p:hyphens-none prose-p:leading-relaxed prose-p:tracking-normal text-gray-800 max-w-none"
                            >
                                {renderContent(service.content)}
                            </motion.div>
                        )}

                        {/* Call to action */}
                        <motion.div
                            className="mt-16 bg-gradient-to-r from-gray-900 to-black text-white p-8 shadow-lg"
                            variants={scaleIn}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0">
                                    <h3 className="text-2xl font-bold mb-2">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-gray-300 text-justify max-w-md mr-10">
                                        Let our experts help you navigate the complexities of your
                                        business challenges with tailored solutions.
                                    </p>
                                </div>
                                <Link
                                    href="/my-en/contact-us"
                                    className="px-8 py-4 bg-red-600 text-white text-center font-medium hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Request a Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Sidebar column */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="sticky top-[170px] space-y-8">
                            {/* Service quick info */}
                            <div className="bg-gray-50 border border-gray-200 shadow-sm">
                                <div className="bg-red-600 text-white p-4">
                                    <h3 className="text-lg font-bold">Service Highlights</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {service.serviceHighlights?.map(
                                            (
                                                highlight: ServiceHighlight,
                                                index: Key | null | undefined
                                            ) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                    <button
                                                        onClick={() => scrollToSection(highlight.anchor)}
                                                        className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left cursor-pointer"
                                                    >
                                                        {highlight.text}
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Related services */}
                            {service.internalLinks && service.internalLinks.length > 0 && (
                                <div className="bg-white border border-gray-200 shadow-sm">
                                    <div className="bg-gray-900 text-white p-4">
                                        <h3 className="text-lg font-bold">Related Services</h3>
                                    </div>
                                    <div className="p-6">
                                        <ul className="space-y-4">
                                            {service.internalLinks.map((link, index) => (
                                                <li key={index} className="group">
                                                    <Link
                                                        href={link.url}
                                                        className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
                                                    >
                                                        <div className="w-1 h-4 bg-red-600 mr-3 group-hover:h-6 transition-all duration-300"></div>
                                                        <span className="group-hover:font-medium transition-all duration-200">
                                                            {link.text}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Contact box */}
                            <div className="bg-gradient-to-br from-gray-900 to-black text-white shadow-lg">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4">
                                        Need Expert Assistance?
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-justify">
                                        Our team of specialists is ready to provide personalized
                                        solutions for your unique business requirements.
                                    </p>
                                    <Link
                                        href="/my-en/contact-us"
                                        className="block w-full py-3 bg-red-600 text-center text-white font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Contact Our Experts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}