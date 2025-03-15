'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '@/data/blogs.json';
import { format } from 'date-fns';

export default function BlogsPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Our Latest</span>
                        <span className="block text-orange-600">
                            Blog Posts
                        </span>
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
                        Discover insights, tutorials, and stories from our team
                        of experts.
                    </p>
                </div> */}

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Blogs?.map((blog, index) => (
                        <Link
                            key={index}
                            href={`/blogs/details/${blog.id}`}
                            className="mt-auto"
                        >
                            <motion.div
                                variants={cardVariants}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                    {/* <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {blog.category}
                                </div> */}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-orange-600 text-sm font-medium mb-2">
                                        {blog.publishAt
                                            ? format(blog.publishAt, 'PPP')
                                            : 'N/A'}
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        {blog.excerpt}
                                    </p>

                                    <p className="inline-flex items-center text-orange-600 font-medium hover:text-orange-800">
                                        Read more
                                        <svg
                                            className="ml-1 w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
