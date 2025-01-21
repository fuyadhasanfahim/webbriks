'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Expertise in web design',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Reliable development process',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Quality assurance',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Timely delivery',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Dedicated support',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Competitive pricing',
        description: 'Lorem ipsum dolor sit amet consectetur.',
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
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function WhyPickingWebbriks() {
    return (
        <section className="w-full bg-black space-x space-y overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-start max-w-[660px]"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Why picking Webbriks is the smarter choice?
                    </h1>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex-1 bg-white rounded-3xl p-6 lg:p-8"
                    >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
                            Web Briks
                        </h3>
                        <ul className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="pt-6 first:pt-0 border-t first:border-t-0"
                                >
                                    <div className="flex items-center gap-4">
                                        <Check
                                            size={24}
                                            className="text-green-500 mt-1 flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">
                                                {feature.title}
                                            </h4>
                                            <p className="text-base text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex-1 bg-white rounded-3xl p-6 lg:p-8"
                    >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
                            Others
                        </h3>
                        <ul className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="pt-6 first:pt-0 border-t first:border-t-0"
                                >
                                    <div className="flex items-center gap-4">
                                        <Check
                                            size={24}
                                            className="text-green-500 mt-1 flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">
                                                {feature.title}
                                            </h4>
                                            <p className="text-base text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
