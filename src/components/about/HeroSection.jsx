'use client';

import { motion } from 'framer-motion';

const textContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 10,
            staggerChildren: 0.3,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

export default function HeroSection() {
    return (
        <motion.section
            className="bg-white text-black"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
        >
            <motion.div className="container py-10 md:py-20 lg:py-32 xl:py-44">
                <motion.div
                    className="leading-10 flex items-start flex-col"
                    variants={textContainerVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold"
                        variants={textVariants}
                        whilehover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                    >
                        Igniting Creativity
                    </motion.h1>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-600"
                        variants={textVariants}
                        whilehover={{
                            scale: 1.05,
                            color: '#000000',
                            transition: { duration: 0.2 },
                        }}
                    >
                        <span
                            className="text-black"
                            whilehover={{
                                rotate: 360,
                                transition: { duration: 0.5 },
                            }}
                        >
                            —
                        </span>
                        Crafting Impactful Designs
                    </motion.h1>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
