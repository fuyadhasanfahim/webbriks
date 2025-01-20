'use client';

import { motion } from 'framer-motion';
import CallToAction from '../shared/CallToAction';

export default function RootContactPage() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <CallToAction />

            <motion.div
                className="bg-black text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="container mx-auto space-x space-y">
                    <motion.div
                        className="max-w-[960px] text-center md:text-left"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h1 className="heading !font-medium leading-relaxed">
                            Drop us an email to explore for Business{' '}
                            <span className="text-gray-600">
                                collaborations.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end gap-6 md:gap-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="text-center md:text-right">
                            <motion.a
                                href="mailto:info@webbriks.com"
                                className="inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="mb-4 text-2xl md:text-3xl font-medium leading-snug underline">
                                    info@webbriks.com
                                </div>
                            </motion.a>
                            <div className="text-gray-400 text-lg md:text-xl leading-6">
                                Projects, collaborations and queries.
                            </div>
                        </div>

                        <motion.div
                            className="px-6 py-3 md:px-10 md:py-4 text-white bg-orange-500 rounded-full cursor-pointer flex items-center justify-center w-[200px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="/contact"
                                className="text-base md:text-lg font-medium"
                            >
                                Contact Us
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
}
