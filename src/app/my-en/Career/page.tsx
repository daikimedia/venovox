
import VenovoxCredibilitySection from "@/components/Career/credibilitysection";
import FunTeamSection from "@/components/Career/FunTeamSection";
import GrowWithUsSection from "@/components/Career/GrowWithUsSection";
import VenovoxHero from "@/components/Career/top-section";
import Form from "@/components/Career/submit-form";
import type { Metadata } from "next";

import React from "react"
export const metadata: Metadata = {
    title: "Careers at VENOVOX | Join Our Risk Management Team",
    description:
        "Explore exciting career opportunities at VENOVOX. Become part of a global leader in risk consultancy, security advisory, and intelligence analysis.",
    alternates: {
        canonical: "https://venovox.com/my-en/Career",
    },
};

export default function Careers() {
    return (
        <>

            < VenovoxHero />
            <VenovoxCredibilitySection />
            <GrowWithUsSection />
            <FunTeamSection />
            <Form />

        </>
    )
}
