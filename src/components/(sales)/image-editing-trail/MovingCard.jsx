'use client';

import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const MovingCard = ({
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
                'scroller relative w-full z-20 max-w-[2000px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
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
                {items.map((t, index) => (
                    <div key={index} className="group max-w-md w-full">
                        <div className="border rounded-2xl p-6 shadow space-y-4 md:space-y-6">
                            <div className="flex items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    {t.image ? (
                                        <div className="relative">
                                            <Image
                                                src={t.image}
                                                alt="Testimonial image"
                                                width={64}
                                                height={64}
                                                loading="lazy"
                                                className="rounded-full ring-2 ring-orange-500 ring-offset-2"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-green-500 font-sans flex items-center justify-center text-2xl font-semibold ring-2 ring-orange-500 ring-offset-2">
                                            <span className="text-white">
                                                K
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-lg md:text-xl font-medium">
                                            {t.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <Image
                                                    src={t.flag}
                                                    alt="Testimonial image"
                                                    width={24}
                                                    height={24}
                                                    loading="lazy"
                                                    decoding='async'
                                                    className="border"
                                                />
                                            </div>

                                            <h6>{t.country}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p>{t.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
