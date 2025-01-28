'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="bg-black text-white padding-x padding-y">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true }}
                className="container"
            >
                <div className="max-w-2xl space-y-6 md:space-y-10">
                    <h1 className="heading">Welcome to My Portfolio</h1>
                    <p className="description text-gray-400">
                        Explore my work in Graphics Design, Photo Editing, and
                        Web Design & Development.
                    </p>
                </div>
            </motion.section>
        </section>
    );
}
