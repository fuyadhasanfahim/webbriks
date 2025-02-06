'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Paintbrush, ImageIcon, Video } from 'lucide-react';

export default function HeroSection() {
    const services = [
        {
            icon: <ImageIcon className="w-8 h-8" />,
            title: 'Photo Editing',
            href: '#services-we-provide',
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Web Design & Development',
            href: '#services-we-provide',
        },
        {
            icon: <Paintbrush className="w-8 h-8" />,
            title: 'Graphics Design',
            href: '#services-we-provide',
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: 'Video Editing',
            href: '#services-we-provide',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-gray-50 to-orange-100 overflow-hidden padding-x padding-y md:!py-20">
            <div className="container">
                <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-block px-4 py-2 text-white bg-orange-500 rounded-full font-medium"
                        >
                            Welcome to Digital Excellence
                        </motion.div>

                        <motion.h1
                            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Bringing Your
                            <span className="text-orange-500">
                                {' '}
                                Digital Dreams
                            </span>{' '}
                            to Life
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            We specialize in creating stunning digital
                            experiences through expert web design & development,
                            professional photo editing & video editing, and
                            creative graphic design services.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a
                                href="/portfolio"
                                className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 
                                         transition-colors duration-300 inline-flex items-center justify-center gap-2 
                                         shadow-lg hover:shadow-orange-200"
                            >
                                View Portfolio
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                >
                                    →
                                </motion.span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * (index + 1) }}
                                className="backdrop-blur p-6 rounded-xl shadow
                                         hover:scale-105 transition-all duration-300 bg-white group"
                            >
                                <a href={service.href} className="block">
                                    <div className="flex flex-col items-center text-center gap-4">
                                        <div
                                            className="p-4 bg-orange-100 rounded-lg text-orange-500 
                                                      group-hover:bg-orange-500 group-hover:text-white 
                                                      transition-colors duration-300"
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {service.title}
                                        </h3>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
