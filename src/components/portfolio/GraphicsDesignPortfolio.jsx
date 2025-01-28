'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/ngkpdwxusa43ycleumts.jpg',
    },
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
    },
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/v8toq1bbc4hfe4otygyp.jpg',
    },
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711106/dlozgtxdh1dkohh0jj4c.jpg',
    },
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711123/bj7cbprxnbyrpx2e7q6y.png',
    },
    {
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711102/lyuwa7xguk1t6c0yvccb.png',
    },
];

export default function GraphicsDesignPortfolio() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="padding-x padding-y !py-10 bg-white">
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
                                className="overflow-hidden rounded-lg shadow"
                            >
                                <Image
                                    src={image}
                                    alt={'graphics design image'}
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
