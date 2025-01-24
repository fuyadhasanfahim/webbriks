'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="bg-black padding-x padding-y">
            <div className="container">
                <div className="w-full max-w-max lg:max-w-3xl space-y-6 md:space-y-10">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="text-white heading-one"
                    >
                        Stunning visuals to make a lasting impression
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="description text-white"
                    >
                        Graphic design encompasses a wide range of creative
                        services, all aimed at visually a brand’s message or
                        purpose. A key component is brand identity design, which
                        creating logos, business cards, and brand guidelines to
                        establish a consistent and memorable presence. Marketing
                        and advertising design services cover everything from
                        social media graphics and digital ads to brochures,
                        posters, and flyers, ensuring that marketing efforts are
                        engaging and aligned with the brand’s goals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Link href="/contact">
                            <button
                                className="button bg-orange-500 text-white"
                                variant={'outline'}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
