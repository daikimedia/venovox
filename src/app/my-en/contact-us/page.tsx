import ContactUs from "@/components/contact-us/contact-us"
import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VENOVOX | Get in Touch with Our Risk Consultancy Experts",
  description:
    "Reach out to VENOVOX for tailored risk management, security advisory, and intelligence solutions. Our team is ready to assist you across APAC and globally.",
  alternates: {
    canonical: "https://venovox.com/my-en/contact-us",
  },

};

export default function Home() {
  return (
    <>
      <ContactUs />
    </>
  )
}
