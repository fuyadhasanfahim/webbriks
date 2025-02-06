import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/legacy/image';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-orange-100 via-gray-50 to-orange-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-600">
                            About Us
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We offer a range of services to help your business
                            succeed, from design and development to digital
                            marketing and more.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <Link
                                href="https://www.facebook.com/webbriks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center group hover:bg-orange-400 transition-all duration-300"
                            >
                                <FaFacebookF className="text-xl text-orange-400 group-hover:text-white transition-colors" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/webbriks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center group hover:bg-orange-400 transition-all duration-300"
                            >
                                <FaLinkedinIn className="text-xl text-orange-400 group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-600">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Terms & Conditions',
                                'Privacy Policy',
                                'Refund Policy',
                                'Disclaimer Policy',
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item
                                            .toLowerCase()
                                            .replace(/&|\s+/g, '-')}`}
                                        className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-600">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Photo Editing',
                                'Web Design & Development',
                                'Graphics Design',
                                'Video Editing',
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href={`/services/${service
                                            .toLowerCase()
                                            .replace(/&|\s+/g, '-')}`}
                                        className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">›</span>{' '}
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-600">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-600 flex items-start">
                                <span className="mr-2">📧</span>
                                <a
                                    href="mailto:info@webbriks.com"
                                    className="text-orange-500 hover:text-orange-600 hover:underline"
                                >
                                    info@webbriks.com
                                </a>
                            </p>
                            <p className="text-gray-600 flex items-start">
                                <span className="mr-2">📞</span>
                                +1 718 577 1232
                            </p>
                            <p className="text-gray-600 flex items-start">
                                <span className="mr-2">📍</span>
                                Web briks, LLC. 1209, Mountain Road PL NE, STE
                                R, ALBUQUERQUE, NM, 87110, US.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-gray-400 pt-8 mt-8">
                    <div className="text-center space-y-6">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-orange-600">
                                We Accept
                            </h4>
                            <div className="flex justify-center gap-4">
                                <Image
                                    src="https://iili.io/dsIkOsR.png"
                                    alt="Visa"
                                    width={50}
                                    height={50}
                                    className="hover:opacity-80 transition-opacity"
                                />
                                <Image
                                    src="https://iili.io/dsIkkfp.png"
                                    alt="Mastercard"
                                    width={50}
                                    height={50}
                                    className="hover:opacity-80 transition-opacity"
                                />
                            </div>
                        </div>

                        <p className="text-gray-500">
                            &copy; {new Date().getFullYear()}{' '}
                            <Link
                                href="/"
                                className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                            >
                                Webbriks
                            </Link>{' '}
                            LLC. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
