'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ['start start', 'end start'],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="h-[28rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scrollbar-hide w-full"
            ref={ref}
        >
            <div className="div relative flex items-start justify-between px-4">
                <div className="max-w-3xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-24">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg max-w-sm mt-6"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                className={cn(
                    'hidden lg:block h-[320px] w-[400px] rounded-md sticky top-10 overflow-hidden',
                    contentClassName
                )}
            >
                <div className="absolute inset-0 z-0" />
                {content[activeCard].image && (
                    <div className="relative h-full w-full">
                        {content[activeCard].image.includes(
                            'mennl8ixaydsfcvueyae'
                        ) ? (
                            <div className="overflow-scroll overflow-x-hidden h-[552px]">
                                <Image
                                    src={`https://res.cloudinary.com/dny7zfbg9/image/upload/v1737712762/mennl8ixaydsfcvueyae.png`}
                                    alt="computer image"
                                    width={348}
                                    height={552}
                                    priority
                                    className="rounded-2xl"
                                />
                            </div>
                        ) : (
                            <Image
                                src={content[activeCard].image}
                                alt={content[activeCard].title}
                                fill
                                priority
                                className="object-cover"
                            />
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
