import AboutUs from "@/components/about/AboutUs"
import React from "react"
export const metadata = {
  title: "About VENOVOX | Risk Management Consultancy Since 1999",
  description:
    "Learn about our journey from Texas headquarters to becoming APAC's premier risk consultancy offering security advisory and intelligence analysis.",
  alternates: {
    canonical: "https://venovox.com/my-en/about",
  },
};
export default function Home() {
  return (
    <>

      <AboutUs />

    </>
  )
}
