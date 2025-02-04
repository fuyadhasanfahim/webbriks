'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesWeProvide() {
    const data = [
        {
            id: 1,
            title: 'Photo Editing Service',
            tag: '01',
            description:
                'Stunning visuals are essential for making a lasting impression. We specialize in photo editing solutions that breathe new life into your images.',
            images: [
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
                    alt: 'photo editing example 1',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/olhxiczax99okzqxqhka.gif',
                    alt: 'photo editing example 2',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
                    alt: 'photo editing example 3',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
                    alt: 'photo editing example 4',
                },
            ],
            href: '/services/photo-editing',
        },
        {
            id: 2,
            title: 'Web Design & Development',
            tag: '02',
            description:
                'With the right mix of user experience and stunning design, we create websites that convert visitors into customers.',
            images: [
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738303791/stdbjnsjpxbsnsyi9bhu.png',
                    alt: 'web development example 1',
                    span: true,
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627330/pjhs2ojfquxy8unkux0k.webp',
                    alt: 'web development example 2',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626819/fcd5qheu55ikz5detmfk.svg',
                    alt: 'web development example 3',
                },
            ],
            href: '/services/web-design-and-development',
        },
        {
            id: 3,
            title: 'Graphics Design Service',
            tag: '03',
            description: `From brand identity to marketing materials, we create visually stunning designs that tell your brand's story.`,
            images: [
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/v8toq1bbc4hfe4otygyp.jpg',
                    alt: 'graphic design example 1',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711106/dlozgtxdh1dkohh0jj4c.jpg',
                    alt: 'graphic design example 2',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/ngkpdwxusa43ycleumts.jpg',
                    alt: 'graphic design example 3',
                },
                {
                    src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
                    alt: 'graphic design example 4',
                },
            ],
            href: '/services/graphics-design',
        },
    ];

    return (
        <section className="bg-neutral-100 padding-x padding-y">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Services
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Transforming visions into reality through creative
                        excellence and technical innovation
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {data.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -left-4 top-0 text-8xl font-bold text-neutral-200 mb-3">
                                {service.tag}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-bold">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 text-lg">
                                        {service.description}
                                    </p>
                                    <motion.button whileHover={{ x: 10 }}>
                                        <a
                                            href={service.href}
                                            className="flex items-center gap-2 text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors"
                                        >
                                            Learn more{' '}
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                →
                                            </motion.span>
                                        </a>
                                    </motion.button>
                                </div>

                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-4">
                                        {service.images.map(
                                            (image, imgIndex) => (
                                                <motion.div
                                                    key={image.alt}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: imgIndex * 0.1,
                                                    }}
                                                    className={`relative ${
                                                        image.span
                                                            ? 'col-span-2'
                                                            : ''
                                                    }`}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        width={500}
                                                        height={500}
                                                        className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-48"
                                                    />
                                                </motion.div>
                                            )
                                        )}
                                    </div>

                                    <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-orange-500/20 rounded-xl" />
                                    <div className="absolute -z-10 -right-8 -bottom-8 w-full h-full border-2 border-orange-500/10 rounded-xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
