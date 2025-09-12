export default function AuthorPage() {
    return (
        <div className="pt-24">
            <div className="max-w-5xl mx-auto py-12 ">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">

                    {/* Profile Header */}
                    <div className="text-center py-12 px-8">
                        <div className="w-96 h-96 mx-auto mb-8 rounded-3xl overflow-hidden relative">
                            <img
                                src="/venovox-author.webp"
                                alt="Author"

                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 italic">
                            Dato' Venodevan Mariemuthu
                        </h1>
                        <p className="text-xl italic text-gray-600 max-w-3xl mx-auto px-4">
                            "Every risk is an opportunity in disguise, one that only the prepared can harness."
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-12">

                        {/* About Section */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-black mb-6">About Dato' Venodevan</h2>

                            <div className="space-y-4 text-black text-lg leading-relaxed">
                                <p>
                                    Dato' Venodevan Mariemuthu is the <span className="font-bold text-red-600">Founder and Director of Venovox</span> (A premier risk management and background screening consultancy).
                                </p>

                                <p>
                                    With over <span className="font-bold text-red-600">23 years of expertise in security and intelligence</span>.He is recognised not only as a strategist but also as a solutionist, who thrives on uncovering vulnerabilities and transforming them into strengths.
                                </p>

                                <p>
                                    For more than two decades, Dato' Venodevan Mariemuthu has stood at the frontline of security and investigations .This led to protection of governments, corporations, and individuals from risks that others often fail to see or generally overlook.
                                </p>

                                <p>
                                    His professional background reflects a fundamental conviction : real security leadership entails not only crisis management but also foreseeing and eliminating threats before they materialize.
                                </p>

                                <p>
                                    Dato' Venodevan has positioned Venovox as a reliable intelligence consultancy across regions by adhering to the tenet that "true security is not just about responding to threats, but about anticipating them."
                                </p>

                                <p>
                                    His work ethic combines in-depth research expertise with proactive tactics, which results in creative and dependable solutions.
                                </p>
                            </div>
                        </div>

                        {/* Global Intelligence Network Section */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-black mb-6">Global Intelligence Network</h2>

                            <div className="text-black text-lg leading-relaxed mb-6">
                                <p className="mb-4">
                                    Under his leadership, Venovox has forged strong ties with the <span className="font-bold text-red-600">global intelligence community</span>, recognizing that modern risks are borderless. By forming networks with agencies, professionals, and specialists worldwide, Venovox leverages a <span className="font-bold text-red-600">global reservoir of expertise</span> to always keep clients one step ahead. This strengthens the firm's capabilities in:
                                </p>
                            </div>

                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start">
                                    <span className="text-black font-bold mr-3 mt-1">•</span>
                                    <span className="text-black text-lg">Counterintelligence & cyber-defense</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black font-bold mr-3 mt-1">•</span>
                                    <span className="text-black text-lg">Cross-border investigations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black font-bold mr-3 mt-1">•</span>
                                    <span className="text-black text-lg">Strategic risk assessments</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black font-bold mr-3 mt-1">•</span>
                                    <span className="text-black text-lg">Intelligence-sharing partnerships</span>
                                </li>
                            </ul>
                        </div>

                        {/* Professional Recognition Section */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-black mb-6">Professional Recognition</h2>

                            <div className="space-y-4 text-black text-lg leading-relaxed">
                                <p>
                                    Recognized for his honesty, accuracy, and discretion, Dato' Venodevan is valued by partners, trusted by clients, and respected by colleagues for transforming difficult problems into understandable, workable plans.
                                </p>

                                <p>
                                    He continues to turn Venovox into a global leader in security intelligence, risk management and background screening consultancy by offering specialised services in due diligence, security advisory, background checks, and intelligence analysis across Malaysia, the Asia-Pacific regions.
                                </p>
                            </div>
                        </div>

                        {/* Venovox Journey Section */}
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                            <h2 className="text-2xl font-bold text-red-600 mb-4 italic">Venovox Journey</h2>

                            <p className="text-black text-lg leading-relaxed">
                                He founded Venovox in Malaysia back in 1999 and now it is  headquartered in Texas, USA. Venovox's vision enables clients to navigate in an uncertain world with clarity by serving as a beacon of foresight and resilience.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}