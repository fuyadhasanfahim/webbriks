import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa';
import Image from 'next/legacy/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-100 pt-16">
            <div className="container mx-auto text-center md:text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We offer a range of services to help your business
                            succeed, from design and development to digital
                            marketing and more.
                        </p>

                        <div className="flex gap-2 justify-center md:justify-start mt-5">
                            <div className="border rounded-md hover:bg-white p-1">
                                <Link
                                    href="https://www.facebook.com/webbriks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="text-2xl hover:text-[#316FF6] text-orange-400 transition-colors" />
                                </Link>
                            </div>

                            <div className="border rounded-md hover:bg-white p-1">
                                <Link
                                    href="https://www.linkedin.com/company/webbriks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="text-2xl hover:text-[#0077B5] text-orange-400 transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:ml-10">
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link
                                    href="/terms-and-conditions"
                                    className="hover:text-white transition-colors"
                                >
                                    Term & Condition
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/refund-policy"
                                    className="hover:text-white transition-colors"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/disclaimer-policy"
                                    className="hover:text-white transition-colors"
                                >
                                    Disclaimer Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:ml-10">
                        <h3 className="text-xl font-semibold mb-4">
                            Our Services
                        </h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link
                                    href="/services/graphics-design"
                                    className="hover:text-white transition-colors"
                                >
                                    Graphics-design
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/services/photo-editing"
                                    className="hover:text-white transition-colors"
                                >
                                    Photo Editing
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/services/web-design-and-development"
                                    className="hover:text-white transition-colors"
                                >
                                    Web Design & Development
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/services/virtual-assistant"
                                    className="hover:text-white transition-colors"
                                >
                                    Virtual Assistant
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Us
                        </h3>
                        <p className="text-gray-400 mb-2">
                            Email:{' '}
                            <a
                                href="mailto:info@webbriks.com"
                                className="text-orange-400 hover:underline"
                            >
                                info@webbriks.com
                            </a>
                        </p>
                        <p className="text-gray-400 mb-2">
                            Phone: +1 718 577 1232
                        </p>
                        <p className="text-gray-400">
                            Address: Web briks, LLC. 1209, Mountain Road PL NE,
                            STE R, ALBUQUERQUE, NM, 87110, US.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 py-8 text-center">
                    <div>
                        <h4 className="text-xl">We accept</h4>
                        <div className="flex justify-center gap-2">
                            <Image
                                src="https://iili.io/dsIkOsR.png"
                                alt="Visa"
                                width={50}
                                height={50}
                            />
                            <Image
                                src="https://iili.io/dsIkkfp.png"
                                alt="Mastercard"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>

                    <p className="text-gray-500 mt-5">
                        &copy; {new Date().getFullYear()}{' '}
                        <Link
                            href="/"
                            className="text-gray-200 hover:text-orange-400"
                        >
                            Webbriks
                        </Link>{' '}
                        LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
