'use client';

import { motion } from 'framer-motion';

export default function ServicesHeroSection() {
    return (
        <section className="h-full bg-black px-6 overflow-hidden">
            <motion.div
                className="container space-x flex items-start flex-col justify-center h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div
                    className="flex flex-col gap-6 md:gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <motion.h1
                        className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-snug lg:leading-normal xl:leading-relaxed flex flex-col gap-6 md:gap-10 w-full lg:max-w-3xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Creative Design, Photo Editing, Video Editing, Web
                        Design & Development Services
                    </motion.h1>
                    <motion.p
                        className="text-[#727271] text-lg md:text-xl lg:text-2xl max-w-4xl text-start"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {`Our creative design agency helps brands and small
                        businesses to make top-quality designs, software,
                        websites, and videos. We help ecommerce brands and
                        photographers to create attractive product photos. We
                        focus on customer-centric approaches that draw
                        customer's attention to the designs and visuals. Let's
                        collaborate to grow your business with expert services.`}
                    </motion.p>
                    <motion.div
                        className="w-full md:w-96"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center flex-col bg-orange-500 rounded-full w-full">
                            <a
                                rel="nofollow"
                                href="/contact"
                                className="w-full"
                            >
                                <button className="px-4 py-2 text-lg font-medium text-black bg-orange-500 rounded-full w-full">
                                    Help My Business Growing Now
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
