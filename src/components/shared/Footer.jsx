import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/legacy/image';

const paymentMethods = [
    { name: 'Visa', src: 'https://iili.io/dsIkOsR.png' },
    { name: 'Mastercard', src: 'https://iili.io/dsIkkfp.png' },
    {
        name: 'American Express',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/hklpute6ezasekoxnv8z.png',
    },
    {
        name: 'PayPal',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/lmorky7yushlhpe5kcwb.png',
    },
    {
        name: 'Apple Pay',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/dn8keqailjnb0oxzjawf.png',
    },
    {
        name: 'Google Pay',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/jhn5oz8xrxwcdky4rtyo.png',
    },
    {
        name: 'Citibank',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/k78aul6ejngfooeg4bz4.png',
    },
    {
        name: 'Bank Transfer',
        src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739862435/kjhd2naribxi2wquwjq2.png',
    },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                            Our Other Consern
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            We offer a range of services to help your business
                            succeed, from design and development to digital
                            marketing and more.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <Link
                                href="https://www.facebook.com/webbriks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border-2 border-orange-500 rounded-full flex items-center justify-center group hover:bg-orange-500 transition-all duration-300"
                            >
                                <FaFacebookF className="text-xl text-orange-500 group-hover:text-white transition-colors" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/webbriks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border-2 border-orange-500 rounded-full flex items-center justify-center group hover:bg-orange-500 transition-all duration-300"
                            >
                                <FaLinkedinIn className="text-xl text-orange-500 group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div> */}

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                            Our Other Concern
                        </h3>
                        <ul className="space-y-3">
                            {[
                                {
                                    title: 'Graphics Action',
                                    link: 'https://www.graphicsaction.com',
                                },
                                {
                                    title: 'Clipping Path Action',
                                    link: 'https://www.clippingpath.com',
                                },
                                {
                                    title: 'Cut Out Expert',
                                    link: 'https://www.cutoutexport.com',
                                },
                                {
                                    title: 'The Clipping Path Services',
                                    link: 'https://www.theclippingpathservices.com',
                                },
                            ].map(({ title, link }, index) => (
                                <li key={index}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">›</span> {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
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
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
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
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">›</span>{' '}
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 flex items-start">
                                <span className="mr-2">📧</span>
                                <a
                                    href="mailto:info@webbriks.com"
                                    className="text-orange-500 hover:underline"
                                >
                                    info@webbriks.com
                                </a>
                            </p>
                            <p className="text-gray-300 flex items-start">
                                <span className="mr-2">📞</span>
                                <a
                                    href="tel:+17185771232"
                                    className="text-orange-500 hover:underline"
                                >
                                    +1 718 577 1232
                                </a>
                            </p>
                            <p className="text-gray-300 flex items-start">
                                <span className="mr-2">📍</span>
                                Web briks, LLC. 1209, Mountain Road PL NE, STE
                                R, ALBUQUERQUE, NM, 87110, US.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="bg-gray-300 backdrop-blur p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-orange-500 text-center mb-6">
                                We Accept
                            </h4>

                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-center mx-auto">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.name}
                                        className="group relative w-20 h-20 flex items-center justify-center"
                                    >
                                        <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        <Image
                                            src={method.src}
                                            alt={method.name}
                                            width={50}
                                            height={50}
                                            className="relative transform transition-transform duration-200 group-hover:scale-105"
                                        />
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {method.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Secure payments powered by industry-leading
                                encryption
                            </p>
                        </div>

                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()}{' '}
                            <Link
                                href="/"
                                className="text-orange-500 hover:text-white transition-colors duration-300"
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
