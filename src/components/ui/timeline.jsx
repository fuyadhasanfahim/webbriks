'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            ref={containerRef}
            className="w-full bg-gray-200 font-sans overflow-hidden padding-x padding-y"
        >
            <div className="container">
                <h2 className="heading-one text-center leading-relaxed mb-4 md:mb-6">
                    Services We Provide
                </h2>
            </div>
            <div ref={ref} className="relative container">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-md lg:max-w-lg md:w-full">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center"
                            >
                                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                            </motion.div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-800">
                                {item.title}
                            </h3>
                        </div>
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.3,
                                }}
                                viewport={{ once: true }}
                                className="text-gray-700"
                            >
                                {item.content}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
                <div
                    style={{ height: height + 'px' }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gray-300"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-orange-500 to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
