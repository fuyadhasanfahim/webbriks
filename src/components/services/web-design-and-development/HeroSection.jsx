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
                        Website Design and Development Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="description text-white"
                    >
                        Is your website confusing visitors instead of converting
                        them? With the right mix of user experience and stunning
                        design, you’ll ignite growth. Let us take you there.
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
                                Build Your Website Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
