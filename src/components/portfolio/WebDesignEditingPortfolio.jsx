'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    {
        image: 'https://iili.io/dsQhoNV.png',
    },
    {
        image: 'https://iili.io/dsQhxDB.png',
    },
    {
        image: 'https://iili.io/dsQhTV1.png',
    },
    {
        image: 'https://iili.io/dsQhIoP.png',
    },
    {
        image: 'https://iili.io/dsQhuiF.png',
    },
    {
        image: 'https://iili.io/dsQhRKg.png',
    },
];

export default function WebDesignEditingPortfolio() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="padding-x padding-y !py-10 bg-gray-100">
            <div className="container">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Photo Editing Service
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {images.map(({ image }, index) => (
                            <motion.div
                                key={index}
                                variants={imageVariants}
                                className="overflow-y-scroll w-[400px] h-[400px] rounded-lg shadow"
                                style={{
                                    scrollbarWidth: 'thin',
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={'graphics design image'}
                                    width={400}
                                    height={400}
                                    priority
                                    className=""
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
