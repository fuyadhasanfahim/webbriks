import Link from 'next/link';
import Image from 'next/legacy/image';
import { Mail, MapPin, Phone } from 'lucide-react';

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
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                            Our Sister Concern
                        </h3>
                        <ul className="space-y-3">
                            {[
                                {
                                    title: 'Graphics Action',
                                    link: 'https://www.graphicsaction.com',
                                },
                                {
                                    title: 'Clipping Path Action',
                                    link: 'https://www.clippingpathaction.com',
                                },
                                {
                                    title: 'Cut Out Expert',
                                    link: 'https://www.cutoutexpert.com',
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
                                'Terms and Conditions',
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
                        <div className="rounded-xl bg-zinc-900 space-y-4">
                            {/* Email */}
                            <div className="flex items-start gap-3 group">
                                <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-orange-500">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:info@webbriks.com"
                                        className="text-sm font-medium text-orange-500 hover:underline"
                                    >
                                        info@webbriks.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3 group">
                                <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-orange-500">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+17185771232"
                                        className="text-sm font-medium text-orange-500 hover:underline"
                                    >
                                        +1 718 577 1232
                                    </a>
                                </div>
                            </div>

                            {/* US Address */}
                            <div className="flex items-start gap-3">
                                <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-orange-500">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Address — USA
                                    </p>
                                    <address className="not-italic text-sm text-zinc-300">
                                        Web briks, LLC. 1209 Mountain Road PL
                                        NE, STE R, Albuquerque, NM 87110, US
                                    </address>
                                </div>
                            </div>

                            {/* BD Address */}
                            <div className="flex items-start gap-3">
                                <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-orange-500">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Address — Dhaka
                                    </p>
                                    <address className="not-italic text-sm text-zinc-300">
                                        115 Senpara Parbata (3rd floor of
                                        Sheltech Rubynur), Begum Rokeya Avenue,
                                        Mirpur, Dhaka 1216
                                    </address>
                                </div>
                            </div>
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
