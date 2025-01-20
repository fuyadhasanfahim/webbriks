'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-purple-500 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Photo Editing, Retouching Services Prices/Rates
                </motion.h1>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    - Start from 25¢/image photo editing
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="/get-quote"
                        className="bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300"
                    >
                        Get Quote
                    </a>
                    <a
                        href="/contact"
                        className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-orange-500 transition duration-300"
                    >
                        Contact
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
