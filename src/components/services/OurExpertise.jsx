'use client';

import { motion } from 'framer-motion';
import { OurExpertiseCard } from './OurExpertiseCard';
import { useRef } from 'react';
import { useDrag } from '@use-gesture/react';

export default function OurExpertise() {
    const containerRef = useRef(null);

    const bind = useDrag(({ movement: [mx], direction: [dx], active }) => {
        if (active) {
            containerRef.current.scrollBy({
                left: -mx,
                behavior: 'smooth',
            });
        }
    });

    return (
        <section className="h-full bg-[url('https://i.ibb.co.com/KqdgV81/background.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-10 backdrop-blur-3xl pb-16 px-6">
            <div className="w-full max-w-7xl mx-auto h-full">
                <div className="pt-36 pb-20">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.h1
                            className="flex flex-col items-start justify-start gap-2 text-5xl font-semibold text-white max-w-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Our Expertise in Digital Product Design Across
                            Industries
                        </motion.h1>
                        <motion.p
                            className="text-xl max-w-[680px] text-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: 'easeOut',
                            }}
                        >
                            We’ve worked with dozens of app businesses across
                            industries to design digital product. Here are some
                            industries where we excel, but our expertise extends
                            far beyond:
                        </motion.p>
                        <motion.button
                            className="bg-orange-500 text-lg text-white px-8 py-2 rounded-xl"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#FF7F50',
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Get Quote
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6 md:gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, staggerChildren: 0.2 },
                        },
                    }}
                    {...bind()}
                >
                    {[...Array(6)].map((_, index) => (
                        <OurExpertiseCard
                            key={index}
                            title={'Enterprise'}
                            desc={'Cut through the red tape and watch your'}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
