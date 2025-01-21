'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
};

const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function OurSuccessStories() {
    const sectionRef = useRef(null);

    // Scroll progress for the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Responsive Transform Animations
    const empoweringX = useTransform(scrollYProgress, [0, 1], [-30, 50]);
    const successStoriesX = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="bg-white overflow-hidden">
            <div className="container pt-10 md:pt-20">
                <div className="space-y-4 md:space-y-6">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-900"
                        style={{ x: empoweringX }}
                    >
                        Inspiring Progress
                    </motion.h1>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-500 pl-4 sm:pl-10 md:pl-20 lg:pl-32"
                        style={{ x: successStoriesX }}
                    >
                        Achieving Excellence
                    </motion.h1>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={contentVariants}
                    >
                        <Image
                            src="https://i.ibb.co.com/84jNwG8/earth.webp"
                            alt="Earth image"
                            width={765}
                            height={969}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Text and Counters */}
                    <motion.div
                        className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={contentVariants}
                    >
                        <motion.p
                            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-12"
                            variants={contentVariants}
                        >
                            {`In early 2018, we started our journey as a small photo editing company called "Cut Out Expert." Back then, our focus was simple—providing high-quality photo editing services to clients around the world. As more clients discovered our work, we realized there was a chance to grow and offer even more. So, we decided to take the next big step and created "Web Briks LLC." This new chapter will allow us to expand our services beyond photo editing, reaching more businesses globally.`}
                            <br />
                            <br />
                            {`Our story is one of steady growth, driven by a
                            strong dedication to quality and a passion for
                            helping our clients succeed through outsourcing. We
                            started small, but over time, we've grown into a
                            company that offers many different services.`}
                            <br />
                            <br />
                            {`From the beginning, we've focused on delivering high-quality solutions that adapt to our clients' changing needs. With each step forward, we've worked to improve what we do, build strong relationships, and help our clients' businesses thrive. Our journey shows that with hard work, new ideas, and always putting our clients first, we can truly make a difference.`}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
