'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurWorldwidePresence() {
    return (
        <section className="bg-black padding-x padding-y">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <motion.div
                    className="max-w-4xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white max-w-md mb-6">
                        Our Worldwide Presence
                    </h1>
                    <p className="text-base md:text-lg text-gray-400">
                        Proudly serving satisfied customers across the USA,
                        Europe, United Kingdom, Australia, New Zealand,
                        Singapore, and India.
                    </p>
                </motion.div>
                <motion.figure
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Image
                        src={
                            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738666292/qut7hscemv67vszatnz1.png'
                        }
                        alt="world image"
                        width={640}
                        height={400}
                        priority
                    />
                </motion.figure>
            </div>
        </section>
    );
}
