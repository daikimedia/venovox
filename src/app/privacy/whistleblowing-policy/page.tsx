import PageBanner from "@/components/common/pagebanner"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Whistleblowing Policy | Venovox",
    description: "At Venovox, we are committed to protecting the privacy and personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website www.venovox.com (&quot;Website&quot;). By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, you should not use the Website.",
    alternates: {
        canonical: "https://venovox.com/privacy/whistleblowing-policy",
    },
}
export default function WhistleblowingPolicyPage() {
    return (
        <>
            <PageBanner />
            <div className="container mx-auto px-6 py-10 text-lg text-gray-800 text-justify [text-justify:inter-word] hyphens-none ">
                <h2 className="text-3xl font-sensibold mb-6">Whistleblowing Policy</h2>

                <p className="mb-4">
                    VENOVOX is committed to a high level of ethical standards and integrity in conducting its business and we encourage ethical conduct as part of our corporate culture with emphasis on sincerity, transparency and fairness. This serves to enhance the trust and confidence in the business operations and performance.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Purpose</h2>
                <p className="mb-4">
                    This Whistleblower Policy and Procedure (&quot;Policy&quot;) seeks to enhance corporate governance by fostering an environment of integrity and ethical behavior, allowing any illegality, improper conduct, or wrongdoing in the company to be exposed. It provides a formal, confidential channel for employees, vendors, contractors, or agents to report in good faith without fear of Detrimental Action.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Scope</h2>
                <p className="mb-4">
                    This Policy applies to all employees and related parties. Reports can be made by internal or external individuals who are aware of any improper conduct committed by an employee.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Oversight and Ownership</h2>
                <p className="mb-4">
                    The Audit Committee oversees this Policy, while day-to-day responsibility lies with the Internal Auditor, who is responsible for updates and distribution.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. What is Whistleblowing</h2>
                <p className="mb-4">
                    Whistleblowing is the voluntary disclosure of malpractice or wrongdoing. Improper Conduct includes criminal acts, financial misstatements, ethical breaches, corruption, or significant harm to the company or individuals.
                </p>

                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Criminal acts (e.g., breach of trust, extortion, sabotage)</li>
                    <li>Financial misrepresentation or fraud</li>
                    <li>Corruption or unauthorized disclosure of confidential information</li>
                    <li>Abuse of power, misconduct, or concealment of the above</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Whistleblower Protection</h2>
                <p className="mb-4">
                    Protection is granted unless it is found that the report was made with malicious intent or bad faith.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Confidentiality</h2>
                <p className="mb-4">
                    Whistleblower identity and information are kept confidential, only shared on a need-to-know basis with approval from the Audit and Risk Committee.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Anonymous Disclosure</h2>
                <p className="mb-4">
                    Anonymous reports are accepted and encouraged to contain as many details as possible for effective investigation.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Rewards</h2>
                <p className="mb-4">
                    VENOVOX may reward whistleblowers (if identity is known) for disclosures that lead to detection of improper conduct.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Reporting Procedure</h2>
                <p className="mb-4">
                    Reports must be factual, with as much detail as possible. Whistleblowers can report via meeting, phone, email, or post to:
                </p>

                <div className="bg-gray-100 p-4 rounded mb-4">
                    <p className="font-medium">Director / CEO</p>
                    <p>Venovox Sdn Bhd,</p>
                    <p>E-7-03, Block E, Oasis Square,</p>
                    <p>No 2, Jalan PJU 1A/7, Ara Damansara,</p>
                    <p>47301 Petaling Jaya, Selangor</p>
                    <p>Email: <a href="mailto:administrator@venovox.com" className="text-blue-600 underline">administrator@venovox.com</a></p>
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Investigation</h2>
                <p className="mb-4">
                    Investigations will be led by the Internal Audit Department or independent function as assigned. Results will be reported to the Audit and Risk Committee and updates shared with the Board of Directors. Whistleblowers (if identified) will be informed of the outcome.
                </p>
            </div>
        </>
    )
}