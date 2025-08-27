'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const SisterConcern = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const concerns = [
        {
            title: 'Graphics Action',
            link: 'https://www.graphicsaction.com',
            logo: 'https://res.cloudinary.com/dny7zfbg9/image/upload/wqrhqtltsgqzttjrcndp.png',
            description: 'Premium graphic design solutions',
        },
        {
            title: 'Clipping Path Action',
            link: 'https://www.clippingpathaction.com',
            logo: 'https://res.cloudinary.com/dny7zfbg9/image/upload/kfy97edfe8oi1sam6vju.png',
            description: 'Professional image background removal',
        },
        {
            title: 'Cut Out Expert',
            link: 'https://www.cutoutexpert.com',
            logo: 'https://res.cloudinary.com/dny7zfbg9/image/upload/pska72ncvhgkfrkjhbm6.png',
            description: 'Precision cutout services',
        },
        {
            title: 'The Clipping Path Services',
            link: 'https://theclippingpathservices.com',
            logo: 'https://res.cloudinary.com/dny7zfbg9/image/upload/jhruvuyhinxdtklttc0m.png',
            description: 'Complete image editing solutions',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 inline-block mb-3"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        whilehover={{ scale: 1.1 }}
                    >
                        Sister Concerns
                    </motion.h2>

                    <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="text-gray-600 dark:text-gray-300 mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Discover our family of premium services and specialized
                        solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {concerns.map((concern, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whilehover={{
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <a
                                href={concern.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg group h-full flex flex-col">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10 p-6 flex flex-col items-center h-full">
                                        <div className="relative mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                                            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                                            <div className="relative">
                                                <Image
                                                    src={concern.logo}
                                                    alt={concern.title}
                                                    width={120}
                                                    height={120}
                                                    priority
                                                    className="rounded-full bg-white dark:bg-gray-700 p-1"
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                            {concern.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 text-center">
                                            {concern.description}
                                        </p>

                                        <div className="mt-auto pt-5">
                                            <motion.span
                                                className="inline-flex items-center text-orange-500 font-medium text-sm"
                                                animate={
                                                    hoveredIndex === index
                                                        ? { x: [0, 5, 0] }
                                                        : {}
                                                }
                                                transition={{
                                                    repeat:
                                                        hoveredIndex === index
                                                            ? Infinity
                                                            : 0,
                                                    duration: 1.2,
                                                }}
                                            >
                                                Visit website
                                                <svg
                                                    className="ml-1 w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SisterConcern;
