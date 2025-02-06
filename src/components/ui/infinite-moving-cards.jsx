'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);

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
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s'
                );
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s'
                );
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative w-full z-20 max-w-[1800px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <div
                ref={scrollerRef}
                className={cn(
                    'flex min-w-full shrink-0 gap-8 py-8 w-max flex-nowrap',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[300px] bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center gap-4 border border-gray-100 hover:border-[#FFA726]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#FFA726] rounded-full text-white">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {item.name}
                            </h3>
                        </div>
                        <p className="text-gray-600 text-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
