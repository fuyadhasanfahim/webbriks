/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128330/jfx6vodd8auej6czpbno.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128330/p493plgmvchxs1z0e9h5.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128326/djasgy114vevsjp4wvyy.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128309/m4pysaj73xrcaomeefd5.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/vj6cbe0kozg5yrv24qyu.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/jmhoz7iuukj0cerjhdjs.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/ic1wlv39vwbdsyictaua.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/hkr30et622h7m1rvtqdw.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/aipabehkirzotvpncmzr.png',
    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/oup43fduugwgzb2uoq4e.png',
];

export default function Ambitious() {
    const marqueeVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <section className="w-full py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 mb-16">
                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Trusted by 200+ ambitious startups across industries
                </motion.h3>
            </div>

            <div className="relative overflow-hidden py-8">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFFBF4] to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFFBF4] to-transparent z-20" />

                <motion.div
                    className="flex whitespace-nowrap items-center gap-16"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={logo}
                                alt="client logo"
                                className="h-12 w-auto"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <span className="inline-block px-6 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Innovating together since 2020
                </span>
            </motion.div>
        </section>
    );
}
