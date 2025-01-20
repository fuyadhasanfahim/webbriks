'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    hover: {
        scale: 1.05,
        backgroundColor: '#FF4500',
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

export default function CompanyOverview() {
    return (
        <motion.section
            className="bg-black"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="container py-10 md:py-20 lg:py-32 xl:py-44">
                <motion.div
                    className="flex flex-col items-start gap-6 md:gap-10 lg:gap-16 max-w-[1000px] mx-auto"
                    variants={containerVariants}
                >
                    {/* Title Section */}
                    <motion.div
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[50px] flex items-start gap-4"
                        variants={textVariants}
                    >
                        <motion.h1 className="text-white text-center">
                            <span className="text-white/70">Web Briks</span>{' '}
                            Creative Design Agency{' '}
                            <span className="text-white/70">
                                Turning Visions into Victories
                            </span>
                        </motion.h1>
                    </motion.div>

                    {/* Paragraph Section */}
                    <motion.div
                        className="space-y-6 md:space-y-10 lg:space-y-16 text-center"
                        variants={textVariants}
                    >
                        <motion.p
                            className="text-lg md:text-xl text-white/50"
                            variants={textVariants}
                        >
                            {`At Web Briks, we are dedicated to inspiring progress
                            and achieving excellence in everything we do. Over
                            the years, we've helped numerous brands grow and
                            thrive by delivering innovative solutions.`}
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-white/50"
                            variants={textVariants}
                        >
                            {`Our company has become a trusted partner for businesses looking to grow their brand and reach their goals. By combining creativity, expertise, and a deep understanding of market trends, we ensure that every project contributes to your long-term success. Let us help you accelerate your growth—together, we can build a strong foundation for your brand's future.`}
                        </motion.p>
                    </motion.div>

                    {/* Button Section */}
                    <motion.div
                        className="px-10 py-4 mx-auto text-white bg-orange-500 rounded-full cursor-pointer"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <motion.a
                            href="/contact"
                            className="text-lg md:text-xl"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
