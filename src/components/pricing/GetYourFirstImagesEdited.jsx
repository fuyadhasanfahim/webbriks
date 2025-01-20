'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function GetYourFirstImagesEdited() {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
        }
    }

    const getDirection = () => {
        containerRef.current.style.setProperty(
            '--animation-direction',
            'reverse'
        );
    };

    const getSpeed = () => {
        containerRef.current.style.setProperty('--animation-duration', '80s');
    };

    return (
        <section
            ref={containerRef}
            className="py-6 lg:py-10 bg-orange-50 my-6 lg:my-10 overflow-hidden"
        >
            <motion.div
                ref={scrollerRef}
                className="flex items-center gap-6 whitespace-nowrap"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    willChange: 'transform',
                }}
            >
                <h3 className="text-4xl text-orange-500">
                    Get your first two images edited, on us.
                </h3>
                <button className="flex items-center gap-3 px-8 py-4 bg-orange-500 rounded-xl text-white">
                    <span>Get 2 free edits</span>
                    <ArrowRight className="size-6" />
                </button>
            </motion.div>
        </section>
    );
}
