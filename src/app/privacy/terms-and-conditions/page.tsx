import PageBanner from "@/components/common/pagebanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Venovox",
    description: "At Venovox, we are committed to protecting the privacy and personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website www.venovox.com (&quot;Website&quot;). By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, you should not use the Website.",
    alternates: {
        canonical: "https://venovox.com/privacy/terms-and-conditions",
    },
}
export default function TermsAndConditionsPage() {
    return (
        <>
            <PageBanner />
            <div className="container mx-auto px-6 py-10 text-lg text-gray-800 text-justify [text-justify:inter-word] hyphens-none ">
                <h2 className="text-3xl font-semibold mb-6">Terms and Conditions</h2>

                <p className="mb-4 text-justify">
                    These terms and conditions (&quot;Terms&quot;) govern your use of the website www.venovox.com (&quot;Website&quot;) and any services or products provided through the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, you should not use the Website.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Website Use:</h2>
                <p className="mb-2 text-justify">1.1. You agree to use the Website in accordance with all applicable laws, regulations, and these Terms.</p>
                <p className="mb-2 text-justify">1.2. You are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                <p className="mb-2 text-justify">1.3. You must not use the Website for any illegal, unauthorized, or prohibited activities.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property:</h2>
                <p className="mb-2 text-justify">2.1. The Website and all its content, including but not limited to text, graphics, logos, images, software, and any other materials, are protected by intellectual property rights.</p>
                <p className="mb-2 text-justify">2.2. You may not copy, reproduce, distribute, transmit, display, perform, or create derivative works from any part of the Website without prior written permission from Venovox.</p>
                <p className="mb-2 text-justify">2.3. The trademarks, logos, and service marks displayed on the Website are the property of Venovox or third parties. You are prohibited from using any of these marks without the explicit permission of the respective owners.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Websites and Content:</h2>
                <p className="mb-2 text-justify">3.1. The Website may contain links to third-party websites or resources. Venovox does not endorse or control such websites or resources and is not responsible for their availability, content, or any damages or losses incurred as a result of using them.</p>
                <p className="mb-2 text-justify">3.2. Any content provided by third parties on the Website is the sole responsibility of those third parties. Venovox does not guarantee the accuracy, completeness, or reliability of any third-party content.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer of Warranties:</h2>
                <p className="mb-2 text-justify">4.1. The Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express or implied.</p>
                <p className="mb-2 text-justify">4.2. Venovox does not warrant that the Website will be error-free, uninterrupted, or free from viruses or other harmful components.</p>
                <p className="mb-2 text-justify">4.3. Venovox does not provide any warranty or guarantee regarding the accuracy, timeliness, or completeness of the information provided on the Website.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability:</h2>
                <p className="mb-2 text-justify">5.1. In no event shall Venovox or its directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website or the inability to use the Website.</p>
                <p className="mb-2 text-justify">5.2. You agree to indemnify and hold Venovox harmless from any claims, damages, liabilities, losses, costs, or expenses arising out of your use of the Website or any violation of these Terms.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Modifications:</h2>
                <p className="mb-2 text-justify">6.1. Venovox reserves the right to modify, suspend, or discontinue any part of the Website at any time without prior notice.</p>
                <p className="mb-2 text-justify">6.2. Venovox may update these Terms from time to time, and the updated Terms will be effective upon posting on the Website. Your continued use of the Website after any modifications to the Terms constitutes acceptance of those changes.</p>

                <p className="mt-6">
                    Please read these Terms carefully before using the Website. If you have any questions or concerns regarding these Terms, please contact us at <a href="mailto:administrator@venovox.com" className="text-blue-600 underline">administrator@venovox.com</a>.
                </p>
            </div>
        </>
    )
}