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
                words={`Stunning visuals are essential for making a lasting impression.
                For this, you must need professional photo editing services that
                balance quality and affordability. At Web Briks LLC, we
                specialize in photo editing solutions that breathe new life into
                your images. Our experts work hard to reduce your editing
                pressure without losing quality. We are available 24/7 to assist
                you with photo editing projects.`}
            />
        </motion.section>
    );
}
