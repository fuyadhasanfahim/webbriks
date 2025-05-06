'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepValue = value / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                setCounter(
                    Math.min(Math.round(stepValue * currentStep), value)
                );

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{counter}</span>;
};

export default function Stats() {
    const stats = [
        { value: 2000, label: 'Happy Clients', suffix: '+' },
        { value: 10000, label: 'Projects Completed', suffix: '+' },
        { value: 42, label: 'Dedicated Members', suffix: '' },
        { value: 5, label: 'Awards Won', suffix: '+' },
    ];

    return (
        <div className="pb-20">
            <motion.div
                className="bg-orange-500 padding-x padding-y !pt-0 mb-10 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container w-full flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center flex-col">
                        <motion.div
                            className="mt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                                By the numbers
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 z-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                                <AnimatedNumber value={stat.value} />
                                {stat.suffix}
                            </h2>
                            <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
