'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
    {
        title: 'Photo Editing Service',
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
                alt: 'photo editing example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/m54ehpgiylrscmgiq30w.jpg',
                alt: 'photo editing example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
                alt: 'photo editing example 5',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
                alt: 'photo editing example 6',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/olhxiczax99okzqxqhka.gif',
                alt: 'photo editing example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/ilykcbydx8dqrsnsglu7.jpg',
                alt: 'photo editing example 3',
            },
        ],
    },
    {
        title: 'Web Design & Development Service',
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627919/vojdmpkxcgrficdf7auk.svg',
                alt: 'photo editing example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627469/pusocnvc8ggz5jpidid2.jpg',
                alt: 'photo editing example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627330/pjhs2ojfquxy8unkux0k.webp',
                alt: 'photo editing example 3',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737624746/wenbven6b27bc6omqaqr.svg',
                alt: 'photo editing example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626819/fcd5qheu55ikz5detmfk.svg',
                alt: 'photo editing example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626741/xhlo4zyjqcls00z0frj1.png',
                alt: 'photo editing example 5',
            },
        ],
    },
    {
        title: 'Graphic Design Service',
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
                alt: 'graphic design example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711102/lyuwa7xguk1t6c0yvccb.png',
                alt: 'graphic design example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711106/dlozgtxdh1dkohh0jj4c.jpg',
                alt: 'graphic design example 3',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/v8toq1bbc4hfe4otygyp.jpg',
                alt: 'graphic design example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/ngkpdwxusa43ycleumts.jpg',
                alt: 'graphic design example 5',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711114/srvrmldznif0hbz3e7ol.jpg',
                alt: 'graphic design example 6',
            },
        ],
    },
];

export default function OurPortfolio() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const buttonVariants = {
        initial: { opacity: 0.5, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    const imageVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="bg-white padding-x padding-y">
            <div className="container">
                <div className="mx-auto mb-8">
                    <h1 className="heading-one text-center !font-semibold">
                        Our Portfolio
                    </h1>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                    {data.map(({ title }, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                                selectedIndex === index
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                            }`}
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            {title}
                        </motion.button>
                    ))}
                </div>

                <div className="mt-8">
                    <h2 className="heading-two text-center mb-6">
                        {data[selectedIndex].title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                        {data[selectedIndex].images.map(
                            ({ src, alt }, index) => (
                                <motion.figure
                                    key={index}
                                    className="aspect-auto"
                                    variants={imageVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={400}
                                        height={400}
                                        priority
                                        className="rounded-lg shadow-md hover:scale-105 transition-all duration-300 ring-1 ring-black/5"
                                    />
                                </motion.figure>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
