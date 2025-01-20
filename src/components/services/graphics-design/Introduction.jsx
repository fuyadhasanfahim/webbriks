'use client';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';

export default function Introduction() {
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
            className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
        >
            <TextGenerateEffect
                words={`Graphic design encompasses a wide range of creative services, all aimed at visually a brand’s message or purpose. A key component is brand identity design, which creating logos, business cards, and brand guidelines to establish a consistent and memorable presence. Marketing and advertising design services cover everything from social media graphics and digital ads to brochures, posters, and flyers, ensuring that marketing efforts are engaging and aligned with the brand’s goals.`}
            />
        </motion.section>
    );
}
