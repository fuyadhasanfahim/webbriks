'use client';

import { motion } from 'framer-motion';

export default function BannerSection() {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center bg-[url('https://i.ibb.co.com/0Dv7smg/service-header-graphics-design.png')]">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white px-5">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-7xl mx-auto"
                >
                    Best Photo Editing Services at Affordable Pricing
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl"
                >
                    Stunning visuals to make a lasting impression
                </motion.p>
            </div>
        </section>
    );
}
