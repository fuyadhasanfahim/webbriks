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
                        Best Photo Editing Services at Affordable Pricing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="description text-white"
                    >
                        Stunning visuals are essential for making a lasting
                        impression. For this, you must need professional photo
                        editing services that balance quality and affordability.
                        At Web Briks LLC, we specialize in photo editing
                        solutions that breathe new life into your images. Our
                        experts work hard to reduce your editing pressure
                        without losing quality. We are available 24/7 to assist
                        you with photo editing projects.
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
