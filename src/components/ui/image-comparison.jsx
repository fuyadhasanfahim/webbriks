'use client';

import { cn } from '@/lib/utils';
import { useState, createContext, useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageComparisonContext = createContext(undefined);

const DEFAULT_SPRING_OPTIONS = {
    bounce: 0,
    duration: 0,
};

function ImageComparison({ children, className, enableHover, springOptions }) {
    const [isDragging, setIsDragging] = useState(false);
    const motionValue = useMotionValue(50);
    const motionSliderPosition = useSpring(
        motionValue,
        springOptions ?? DEFAULT_SPRING_OPTIONS
    );
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleDrag = (event) => {
        if (!isDragging && !enableHover) return;

        const containerRect = event.currentTarget.getBoundingClientRect();
        const x =
            'touches' in event
                ? event.touches[0].clientX - containerRect.left
                : event.clientX - containerRect.left;

        const percentage = Math.min(
            Math.max((x / containerRect.width) * 100, 0),
            100
        );
        motionValue.set(percentage);
        setSliderPosition(percentage);
    };

    return (
        <ImageComparisonContext.Provider
            value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
        >
            <div
                className={cn(
                    'relative select-none overflow-hidden',
                    enableHover && 'cursor-ew-resize',
                    className
                )}
                onMouseMove={handleDrag}
                onMouseDown={() => !enableHover && setIsDragging(true)}
                onMouseUp={() => !enableHover && setIsDragging(false)}
                onMouseLeave={() => !enableHover && setIsDragging(false)}
                onTouchMove={handleDrag}
                onTouchStart={() => !enableHover && setIsDragging(true)}
                onTouchEnd={() => !enableHover && setIsDragging(false)}
            >
                {children}
            </div>
        </ImageComparisonContext.Provider>
    );
}

const ImageComparisonImage = ({ className, alt, src, position }) => {
    const { motionSliderPosition } = useContext(ImageComparisonContext);
    const leftClipPath = useTransform(
        motionSliderPosition,
        (value) => `inset(0 0 0 ${value}%)`
    );
    const rightClipPath = useTransform(
        motionSliderPosition,
        (value) => `inset(0 ${100 - value}% 0 0)`
    );

    return (
        <motion.img
            src={src}
            alt={alt}
            className={cn(
                'absolute inset-0 h-full w-full object-cover',
                className
            )}
            style={{
                clipPath: position === 'left' ? leftClipPath : rightClipPath,
            }}
        />
    );
};

const ImageComparisonSlider = ({ className, children }) => {
    const { motionSliderPosition } = useContext(ImageComparisonContext);

    const left = useTransform(motionSliderPosition, (value) => `${value}%`);

    return (
        <motion.div
            className={cn(
                'absolute bottom-0 top-1/2 w-1 cursor-ew-resize bg-gray-500',
                className
            )}
            style={{
                left,
            }}
        >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-2 py-3 rounded-full shadow-md">
                <div className="flex items-center">
                    <ChevronLeft className="size-3" />
                    <ChevronRight className="size-3" />
                </div>
            </div>
            {children}
        </motion.div>
    );
};

export { ImageComparison, ImageComparisonImage, ImageComparisonSlider };
