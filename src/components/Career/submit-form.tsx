"use client";
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { FiPhone, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Form() {
    const [formStatus] = useState("idle");

    return (
        <section className="py-16 bg-white" id="contact-form">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left: Info Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-red-700">
                            Are You VENOVOX?
                        </h2>
                        <div className="w-20 h-1 bg-red-700 mb-8"></div>
                        <p className="text-lg text-gray-600 mb-10 text-justify">
                            Can’t find the “fit” at your current workplace?
                            Being a VENOVOX might just be the solution! Express your interest below.
                        </p>

                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-start gap-5">
                                <div className="p-3 bg-red-700 rounded-lg text-white">
                                    <FiPhone className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1 text-black">Phone</h3>
                                    <p className="text-gray-600 mb-1">Contact our team:</p>
                                    <a href="tel:+60128008888" className="text-red-700 hover:underline">
                                        +6012 800 8888
                                    </a>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-5">
                                <div className="p-3 bg-red-700 rounded-lg text-white">
                                    <FiClock className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1 text-black">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday & Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">Join the Team</h2>
                        <p className="text-gray-600 mb-6">We’ll get back to you as soon as possible</p>

                        {formStatus === "idle" && (
                            <form className="space-y-5">
                                {/* First Name */}
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">
                                        <FaUser className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">
                                        <FaUser className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">
                                        <FaEnvelope className="text-lg" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">
                                        <FaPhone className="text-lg" />
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                                        required
                                    />
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">
                                        <FaLinkedin className="text-lg" />
                                    </div>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        placeholder="LinkedIn URL"
                                        className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                                    />
                                </div>

                                {/* Upload CV */}
                                <div className="flex items-center justify-between mt-4">
                                    <label className="bg-gray-300 text-white font-semibold px-6 py-3 rounded-md text-lg cursor-not-allowed uppercase">
                                        Upload CV
                                        <input className="hidden" type="file" />
                                    </label>
                                </div>

                                {/* Privacy Note */}
                                <p className="text-sm text-gray-500">
                                    *By clicking submit, you agree to the terms of Venovox Privacy Policy.
                                </p>

                                {/* Submit */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
                                    >
                                        <FiSend className="text-lg" />
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}

                        {formStatus === "sending" && (
                            <div className="h-80 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full mb-6 animate-spin" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sending...</h3>
                                <p className="text-gray-600">Please wait while we process your request...</p>
                            </div>
                        )}

                        {formStatus === "success" && (
                            <div className="h-80 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <FiCheckCircle className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Submitted Successfully!</h3>
                                <p className="text-gray-600">Thank you for showing interest in Venovox.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
