"use client";
import aos from "aos";
import Link from "next/link";
import { useEffect } from "react";


const PrivacyPolicyPage = () => {

    useEffect(() => {
        aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="bg-gray-100 text-justify">
            {/* Hero Section */}
            <section
                data-aos="fade-up"
                style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
                className="bg-no-repeat bg-center bg-cover"
            >
                <div className="text-white py-10 lg:py-16 text-center bg-about-top">
                    <div className="container mx-auto px-5">
                        <h1 className="text-4xl font-bold mb-4">Our Privacy Policy</h1>
                        <p className="text-xl mb-6">
                            Please review our Privacy Policy carefully.
                        </p>
                    </div>
                </div>
            </section>


            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16">
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <div className="space-y-5">
                    <p>
                        {`
                    Web Briks LLC ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our services. It applies to our global clientele, website users, or any other digital platform we manage.
                    `}
                    </p>
                    <p>
                        {`
                   By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
                    `}
                    </p>

                </div>
            </section>

            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-4">a. Personal Information:</h2>
                    <p>
                        We may collect personal information such as your name, email address, contact number, billing details, and company name when you engage with our Services.
                    </p>

                    <h2 className="text-xl font-bold mb-4">b. Usage Data:</h2>
                    <p>
                        We collect information about how you interact with our Services, including but not limited to your IP address, browser type, operating system, referral URLs, and pages visited.
                    </p>
                    <h2 className="text-xl font-bold mb-4">c. Cookies and Tracking Data:</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to enhance user experience. These technologies may track browsing activity, device information, and other usage data.
                    </p>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-4">We use the personal information we collect for the following purposes:</h2>
                    <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
                        <li>
                            Service Delivery: To provide, maintain, and support our Services.</li>
                        <li>
                            Communication: To communicate with you about project updates, support, and marketing offers.
                        </li>
                        <li>
                            Improvement and Analytics: To monitor the performance of our website and Services, improve user experience, and analyze usage trends.
                        </li>
                        <li>
                            Legal and Compliance: To comply with legal obligations, respond to government requests, and resolve disputes.
                        </li>
                    </ul>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">3. Sharing Your Information</h2>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-4">We may share your information with third parties only in the following circumstances:</h2>
                    <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
                        <li>
                            Service Providers: We may engage trusted third-party companies to assist in providing the Services (e.g., payment processors, hosting services, etc.).
                        </li>
                        <li>
                            Legal Compliance: If law requires, we may disclose your information to regulatory authorities.

                        </li>
                        <li>
                            Business Transfers: If we merge or sell part of the business, your data may be transferred as part of that transaction.
                        </li>

                    </ul>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
                <div className="space-y-5">
                    <p>
                        We prioritize the security of your data and employ industry-standard security measures to protect it from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                    </p>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">5. International Data Transfers</h2>
                <div className="space-y-5">
                    <p>
                        As a global service provider, your personal information may be transferred to and processed in countries other than yours. This may include our primary office in the USA and our secondary office in Bangladesh. We will take appropriate safeguards to ensure that your information remains protected in accordance with this Privacy Policy.
                    </p>

                </div>
            </section>

            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">6. Your Data Protection Rights</h2>
                <div className="space-y-5">
                    <h2 className="text-xl font-bold mb-4">Depending on your location, you may have the following rights regarding your data:</h2>
                    <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
                        <li>
                            Access: You have the right to request a copy of the personal information we hold about you.
                        </li>
                        <li>
                            Correction: You can ask us to correct or update your information if it is inaccurate or incomplete.

                        </li>
                        <li>
                            Deletion: You may request that we delete your data, subject to legal obligations.
                        </li>
                        <li>
                            Opt-Out: You can opt out of receiving marketing communications at any time.
                        </li>

                    </ul>

                </div>
            </section>

            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">{`7. Children's Privacy`}</h2>
                <div className="space-y-5">
                    <p>
                        Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that a child under 18 has provided us with personal information, please get in touch with us, and we will take steps to delete such information.
                    </p>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
                <div className="space-y-5">
                    <p>
                        {`We reserve the right to update this Privacy Policy as necessary. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy periodically to stay informed.`}
                    </p>

                </div>
            </section>
            <section data-aos="fade-up" className="container mx-auto px-5 lg:px-20 text-gray-800 py-8">
                <h2 className="text-3xl font-bold mb-4">9. Contact Us
                </h2>
                <div className="space-y-5">
                    <p>
                        If you have any questions or concerns about this Privacy Policy or your data, please get in touch with us at: <Link href="mailto:info@webbriks.com"  className="text-blue-500 underline">info@webbriks.com</Link>
                    </p>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;