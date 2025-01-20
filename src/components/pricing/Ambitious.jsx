'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const Ambitious = () => {
    const logos = [
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85b1b4d15e8ffb8ac02_image%20407%20(1).webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e860e54992a0cda41f75_Group%2048095399.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85d7bafb9ad18c1577c_image%20141.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85d1ba543a4bd0e3cab_image%20419.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85d53f7a8c6da35f535_image%20415.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85d4dbb1bf4c6789ebc_image%20401.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666e85de54992a0cda41cb8_Group%201171276333.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666ef9f27d6d7cfd61be471_I-Payout-logo_160x44%201.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666ef9f4d9cc12b225fbfa0_image%20406.webp',
        'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6666ef9fb144bfc480b52864_Group%201171276337.webp',
    ];

    // Animation variants for infinite scrolling
    const marqueeVariants = {
        animate: {
            x: ['0%', '-100%'], // Move from right to left
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                },
            },
        },
        animateReverse: {
            x: ['-100%', '0%'], // Move from left to right
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <section className="w-full space-x space-y">
            <div className="max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-center">
                    More than 200+ ambitious startups from different industries
                    count on us!
                </h3>
            </div>

            <div className="overflow-hidden relative w-full space-y-10">
                {/* First Row: Left to Right */}
                <motion.div
                    className="flex whitespace-nowrap"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="client logo"
                            className="h-8 mx-8"
                        />
                    ))}
                </motion.div>

                {/* Second Row: Right to Left */}
                <motion.div
                    className="flex whitespace-nowrap mt-4"
                    variants={marqueeVariants}
                    animate="animateReverse"
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="client logo"
                            className="h-8 mx-8"
                        />
                    ))}
                </motion.div>

                {/* Third Row: Left to Right */}
                <motion.div
                    className="flex whitespace-nowrap mt-4 ml-10"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="client logo"
                            className="h-8 mx-8"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Ambitious;
