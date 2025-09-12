"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";


const ContactUs = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const openWhatsApp = () => window.open("https://wa.me/60128008888", "_blank");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center pt-8">
          <div className="inline-block mb-4 px-6 py-2 bg-red-50 rounded-full text-red-700 font-medium">
            We&lsquo;re here to help
          </div>

          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
            >
              <span className="text-red-600">Contact</span>   Us</motion.h2>

            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4 rounded-full" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
            >
              <span className="text-center text-base text-gray-700">
                Get in touch with our expert team for personalized assistance
                <br />
                and premium support
              </span>
            </motion.p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Send Message Button */}
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
            >
              <FiSend className="text-lg" />
              Send Message
            </button>

            {/* Call Us Button */}
            <a
              href="tel:+60128008888"
              className="flex items-center gap-2 px-6 py-3 bg-white text-red-700 border-2 border-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              <FiPhone className="text-lg" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div >
              <h2 className="text-3xl font-bold mb-4 text-red-700">
                Reach Out To Us
              </h2>

              <div className="w-20 h-1 bg-red-700 mb-8"></div>

              <p className="text-lg text-gray-600 mb-10">
                Our dedicated team is ready to assist you with any inquiries or support needs.
                We pride ourselves on prompt, professional service.
              </p>

              <div className="space-y-8">


                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black">Phone</h3>
                    <p className="text-gray-600 mb-1">Customer support:</p>
                    <a
                      href="tel:+60378000088"
                      className="text-red-700 hover:underline"
                    >
                      +603 7800 0088
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-red-700 rounded-lg text-white">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We&lsquo;ll get back to you as soon as possible</p>

              {formStatus === "idle" && (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="johndoe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50 appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition bg-gray-50"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
                    >
                      <FiSend className="text-lg" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}

              {formStatus === "sending" && (
                <div className="h-80 flex flex-col items-center justify-center text-center">
                  <div
                    className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full mb-6"
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sending your message</h3>
                  <p className="text-gray-600">Please wait while we process your request...</p>
                </div>
              )}

              {formStatus === "success" && (
                <div className="h-80 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <FiCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&lsquo;ll get back to you shortly.</p>
                </div>
              )}

              <div className="mt-10 text-center border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Prefer to speak with someone?
                </h3>
                <p className="text-gray-600">
                  Call us directly at{" "}
                  <a href="tel:+60128008888" className="text-red-700 font-medium hover:underline">
                    +6012 800 8888
                  </a>
                  , we&apos;re here to help!
                </p>
              </div>


            </div>

          </div>
        </div>
      </section>


    </div>
  );
}

export default ContactUs;