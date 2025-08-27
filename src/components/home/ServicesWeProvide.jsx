'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code, Paintbrush, ImageIcon, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactCompareImage from 'react-compare-image';

const data = [
    {
        icon: <ImageIcon size={24} />,
        title: 'Photo Editing Service',
        description:
            'Stunning visuals are essential for making a lasting impression. We specialize in photo editing solutions that breathe new life into your images.',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739852878/axo39au7ovqhkhi5qmud.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739852878/h6djvpdzpqb880zffyq7.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1740111189/at7rknmwk5kkbnself0u.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1740111188/llyvsjodqiu11rsp1fvm.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739853111/vljcttvrbkx9ubyc8tvd.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739852878/eduntw1ofiolbgnlwg7n.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744274807/wdn8ziakqrzmsieelug5.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744274807/j8xn0hgtr6gqkrzk5y7u.jpg',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        icon: <Code size={24} />,
        title: 'Web Design & Development',
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
        icon: <Paintbrush size={24} />,
        title: 'Graphics Design Service',
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
    {
        icon: <Video size={24} />,
        title: 'Video Editing Service',
        description: `From brand identity to marketing materials, we create visually stunning designs that tell your brand's story.`,
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737712835/xkv7o7psrnzqxsvzvyvn.jpg',
                alt: 'video editing example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738732949/eef9mfqpyss7n4soov6p.jpg',
                alt: 'video editing example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738733038/prsrtp8zeuq3js7aahwl.jpg',
                alt: 'video editing example 3',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738733134/saax6wkbccbgmk2xwmyd.jpg',
                alt: 'video editing example 4',
            },
        ],
        href: '/services/video-editing',
    },
];

export default function ServicesWeProvide() {
    const [selectedService, setSelectedService] = useState(data[0].title);

    return (
        <section className="bg-gray-200 padding-x padding-y">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Services
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Our services are designed to enhance your business with
                        innovative and customized solutions. We ensure secure,
                        efficient, and high-quality results to support your
                        success.
                    </p>
                </motion.div>

                <div
                    className="flex flex-col items-center justify-center"
                    id="services-we-provide"
                >
                    <div className="grid md:grid-cols-12 items-center gap-x-8">
                        <div className="md:col-span-4">
                            {data.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() =>
                                            setSelectedService(service.title)
                                        }
                                        className={cn(
                                            'w-full px-6 py-10 transition-all duration-300 flex items-center gap-4',
                                            selectedService === service.title
                                                ? 'bg-gradient-to-tr from-orange-500 to-orange-100 text-white shadow-lg'
                                                : 'bg-white hover:bg-orange-50',
                                            index === 0
                                                ? 'rounded-t-xl'
                                                : index === 3
                                                ? 'rounded-b-xl'
                                                : ''
                                        )}
                                    >
                                        {service.icon}
                                        <h3 className="font-semibold text-lg text-left">
                                            {service.title}
                                        </h3>
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <div className="md:col-span-8">
                            <AnimatePresence mode="wait">
                                {data.map((service) => {
                                    if (service.title !== selectedService)
                                        return null;

                                    return (
                                        <motion.div
                                            key={service.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white rounded-xl p-8 shadow-xl max-w-2xl"
                                        >
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {service.images.map(
                                                    (image, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    index * 0.1,
                                                            }}
                                                            className={cn(
                                                                'relative ring-1 ring-black/20 rounded-lg overflow-hidden',
                                                                image.alt ===
                                                                    'web development example 1' &&
                                                                    'col-span-2'
                                                            )}
                                                        >
                                                            {!image.before &&
                                                            !image.after ? (
                                                                <Image
                                                                    src={
                                                                        image.src
                                                                    }
                                                                    alt={
                                                                        image.alt
                                                                    }
                                                                    width={500}
                                                                    height={500}
                                                                    priority
                                                                    className={cn(
                                                                        'rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-48'
                                                                    )}
                                                                />
                                                            ) : (
                                                                <ReactCompareImage
                                                                    leftImage={
                                                                        image.before
                                                                    }
                                                                    rightImage={
                                                                        image.after
                                                                    }
                                                                    hover={true}
                                                                    leftImageLabel="Before"
                                                                    rightImageLabel="After"
                                                                />
                                                            )}
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-orange-500">
                                                {service.title}
                                            </h3>
                                            <p className="text-neutral-600 mb-6">
                                                {service.description}
                                            </p>
                                            <motion.a
                                                href={service.href}
                                                whilehover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                                            >
                                                View Details
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
