import PrivateBanner from "@/components/common/pagebanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Venovox",
    description: "At Venovox, we are committed to protecting the privacy and personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website www.venovox.com (&quot;Website&quot;). By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, you should not use the Website.",
    alternates: {
        canonical: "https://venovox.com/privacy/privacy-policy",
    },
}
export default function PrivacyPolicyPage() {
    return (
        <>
            <PrivateBanner />
            <div className="container mx-auto px-6 py-10 text-lg text-gray-800 text-justify [text-justify:inter-word] hyphens-none ">

                <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>

                <p className="mb-4">
                    At Venovox, we are committed to protecting the privacy and personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website www.venovox.com (&quot;Website&quot;). By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, you should not use the Website.
                </p>

                <p className="mb-4">
                    In compliance with Malaysia&apos;s Personal Data Protection Act 2010 (PDPA), any personal data provided by companies or individuals will be protected in accordance with the Act.
                </p>

                <p className="mb-4">
                    VENOVOX is dedicated to safeguarding the privacy of users of its official website. We strive to ensure a secure and safe online environment. Your data will be stored and processed in Malaysia. By accessing VENOVOX&apos;s website from a foreign country, you consent to the transfer of your data from your country to Malaysia.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Your Privacy</h2>
                <p className="mb-4">
                    This page outlines the privacy policy regarding the use and protection of information provided by visitors.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
                <p className="mb-2">1.1. <strong>Personal Information:</strong> Name, email address, contact info, etc.</p>
                <p className="mb-2">1.2. <strong>Usage Information:</strong> IP address, browser type, OS, etc.</p>
                <p className="mb-2">1.3. <strong>Cookies:</strong> Used to collect browsing data; managed via browser settings.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Information Not Collected</h2>
                <p className="mb-4">
                    No personal information is collected while you browse unless submitted through forms or emails.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Use of Information</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Provide and personalize services</li>
                    <li>Communicate and respond to inquiries</li>
                    <li>Improve Website and user experience</li>
                    <li>Analyze usage patterns</li>
                    <li>Prevent fraud or unauthorized use</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">Disclosure of Information</h2>
                <p className="mb-4">
                    We may share your information with third parties in cases like consent, legal obligations, or service support.
                </p>
                <p className="mb-4">
                    Examples include service providers (developers, analysts), auditors, regulators, and government if required by law.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
                <p className="mb-4">
                    VENOVOX uses reasonable technical and organizational measures to protect your data, but cannot fully guarantee against unauthorized access.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Websites</h2>
                <p className="mb-4">
                    We are not responsible for the privacy practices of third-party websites. Please review their policies individually.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Children&apos;s Privacy</h2>
                <p className="mb-4">
                    We do not knowingly collect data from children under 13. If found, the data will be deleted.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    This policy may be updated periodically. Please review regularly for updates.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Your Data Rights</h2>
                <p className="mb-4">
                    You may request access, correction, or limitations to your data by writing to us at <a href="mailto:screen@venovox.com" className="text-blue-600 underline">screen@venovox.com</a>.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Storage Security</h2>
                <p className="mb-4">
                    Electronic data is safeguarded using appropriate technologies.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">What Happens When I Link to Another Website?</h2>
                <p className="mb-4">
                    This policy only applies to venovox.com. Other sites may have different rules.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Log File</h2>
                <p className="mb-4">
                    General data like browser type or visited pages may be logged for analytics but not tied to individuals.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
                <p className="mb-4">
                    Cookies improve usability and remember preferences. You may accept or decline them in your browser settings.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
                <p className="mb-4">
                    Updates will be posted here. Regular reviews are encouraged.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Feedback</h2>
                <p className="mb-4">
                    Feedback from visitors is always welcome.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
                <p>
                    If you have any questions or concerns, email us at <a href="mailto:administrator@venovox.com" className="text-blue-600 underline">administrator@venovox.com</a>.
                </p>

                <p className="mt-6">
                    By using the Website, you acknowledge that you have read and understood this Privacy Policy.
                </p>
            </div>

        </>
    )
}