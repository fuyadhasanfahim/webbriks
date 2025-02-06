'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const webDesignAndDevelopmentServices = [
    {
        id: 1,
        title: 'Fullstack Development',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626741/xhlo4zyjqcls00z0frj1.png',
    },
    {
        id: 2,
        title: 'Landing page Development',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626819/fcd5qheu55ikz5detmfk.svg',
    },
    {
        id: 3,
        title: 'Website Design and Re-design',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627919/vojdmpkxcgrficdf7auk.svg',
    },
    {
        id: 4,
        title: 'Responsive Design',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627469/pusocnvc8ggz5jpidid2.jpg',
    },
    {
        id: 5,
        title: 'eCommerce Development',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627330/pjhs2ojfquxy8unkux0k.webp',
    },
    {
        id: 6,
        title: 'SEO Focused Coding',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627413/cdwyvruj8kyk0aqqgafq.jpg',
    },
];

export default function WebDesignServices() {
    return (
        <>
            <motion.section
                className="bg-white px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-between">
                        <div className="flex-1">
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1737624746/wenbven6b27bc6omqaqr.svg"
                                alt="responsive design"
                                width={600}
                                height={500}
                                priority
                                className="w-full h-full sm:w-full sm:h-full md:w-auto md:h-auto"
                            />
                        </div>

                        <div className="w-full max-w-2xl space-y-6 md:space-y-10 flex-1">
                            <div className="space-y-6 md:space-y-10">
                                <h3 className="text-3xl md:text-4xl font-semibold lg:max-w-lg lg:leading-snug">
                                    Ready to reach more and make a bigger
                                    impact? Go responsive now!
                                </h3>
                                <p className="text-lg text-gray-600">
                                    {`If your website doesn't adapt to any device
                                    or screen size, you're losing a huge
                                    audience. We guarantee your design fits
                                    perfectly, every time, on every display.`}
                                </p>
                            </div>

                            <Link
                                href="/contact-us"
                                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="bg-black text-white px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                            Achieve success with our all-in-one web design and
                            development services
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                        {webDesignAndDevelopmentServices.map((service) => (
                            <motion.div
                                key={service.id}
                                className="flex flex-col gap-5 w-full max-w-[600px] mx-auto"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={600}
                                    height={400}
                                    priority
                                />
                                <h3 className="text-2xl font-semibold">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="bg-gray-200 px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-between">
                        <div className="w-full max-w-2xl space-y-6 md:space-y-10 flex-1">
                            <div className="space-y-6 md:space-y-10">
                                <h3 className="text-3xl md:text-4xl font-semibold lg:max-w-lg lg:leading-snug">
                                    Eye-catching visuals, seamless experience –
                                    we design your path to success!
                                </h3>
                                <p className="text-lg text-gray-600">
                                    {`We deliver the exact visuals your users want
                                    to see. With stunning designs, you'll
                                    capture attention and boost engagement with
                                    less effort.`}
                                </p>
                            </div>

                            <Link
                                href="/contact-us"
                                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className="flex-1 w-full">
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1737625315/tru9uqobvfbmdjymjnql.svg"
                                alt="responsive design"
                                width={600}
                                height={450}
                                priority
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
