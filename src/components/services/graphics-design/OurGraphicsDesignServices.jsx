'use client';

import graphicsDesignServices from '@/data/graphicsDesignServices';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurGraphicsDesignServices() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mx-auto px-5 lg:px-20 text-gray-800 py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Photo Editing Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden max-w-7xl mx-auto h-full md:p-6">
                {graphicsDesignServices.map(
                    (
                        { title, description, price, image, image1, image2 },
                        index
                    ) => (
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={index}
                            className="flex flex-col justify-center items-center bg-white rounded-3xl md:shadow-lg min-h-full p-6 md:p-10 w-full max-w-[560px] mx-auto ring-1 ring-black/5"
                        >
                            <figure className="mb-4">
                                <Image
                                    src={image}
                                    alt={title}
                                    className="w-full h-full rounded-xl border border-black/25"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                />
                            </figure>

                            <h3 className="text-center text-xl md:text-2xl font-[600] mb-4">
                                {title}
                            </h3>

                            <p className="text-center text-gray-800 text-sm mb-6">
                                {description}
                            </p>

                            <div className="text-sm text-center my-6 flex items-end gap-1">
                                <span className="text-[#FFA726]">
                                    Starting at
                                </span>
                                <span className="font-semibold text-xl md:text-2xl">
                                    ${price}
                                </span>
                                <span className="text-[#FFA726]">
                                    per image
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href="/portfolio"
                                    className="px-8 py-4 border-2 border-black text-black rounded text-center text-md font-medium hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="/get-quote"
                                    className="px-8 py-4 border-2 border-orange-500 bg-orange-500 hover:bg-orange-700 text-white rounded text-center font-medium text-md transition-all duration-300"
                                >
                                    Get Quote
                                </a>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </motion.section>
    );
}
