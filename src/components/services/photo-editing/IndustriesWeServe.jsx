'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import { Camera, Home, Megaphone, Shirt, Utensils } from 'lucide-react';

const industries = [
    {
        name: 'Product Photography',
        icon: <Camera className="w-6 h-6" />,
        description:
            'Enhance product images to attract customers and increase conversion rates with our precise editing services.',
    },
    {
        name: 'Fashion & Apparel',
        icon: <Shirt className="w-6 h-6" />,
        description:
            'Showcase clothing with ghost mannequin and model retouching services to make your brand stand out.',
    },
    {
        name: 'Real Estate',
        icon: <Home className="w-6 h-6" />,
        description:
            'Elevate property listings with stunning image enhancements to captivate potential buyers.',
    },
    {
        name: 'Advertising & Marketing',
        icon: <Megaphone className="w-6 h-6" />,
        description:
            'Our services help create visually striking promotional materials that resonate with target audiences.',
    },
    {
        name: 'Food & Beverage',
        icon: <Utensils className="w-6 h-6" />,
        description:
            'Make dishes irresistible with expert photo editing that highlights colors and textures.',
    },
];

export default function IndustriesWeServe() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-5 lg:px-20 text-gray-800 py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Industries We Serve
            </h2>
            <div>
                <InfiniteMovingCards
                    items={industries}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                    className="mt-8"
                />
            </div>
        </motion.section>
    );
}
