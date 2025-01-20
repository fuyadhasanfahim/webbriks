'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurMostValuableClients() {
    const clients = [
        {
            id: 1,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761e4ef9625292ac52ba_SELITON.webp',
            alt: 'SELITON',
        },
        {
            id: 2,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761e84ac02253cff1b69_ondeck.webp',
            alt: 'ondeck',
        },
        {
            id: 3,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761e107238bf788fde75_sabersim.webp',
            alt: 'sabersim',
        },
        {
            id: 4,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761eef3d3e0c85273a4f_onelinl.webp',
            alt: 'onelinl',
        },
        {
            id: 5,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761e4dbf8fc5d0d64102_peel.webp',
            alt: 'peel',
        },
        {
            id: 6,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761e45fb7fdc0aab5cfb_wardobe.webp',
            alt: 'wardobe',
        },
        {
            id: 7,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6501538c9e1eb2f80ca2bcdc_Company%3Dinks.ai.webp',
            alt: 'inks.ai',
        },
        {
            id: 8,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506761edd20d1e0f8253fa9_panthre.webp',
            alt: 'panthre',
        },
        {
            id: 9,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/6506768364ee640218ce21e6_cissdm.webp',
            alt: 'cissdm',
        },
        {
            id: 10,
            logo: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/650676838eaeb28e204012bb_helpful.webp',
            alt: 'helpful',
        },
    ];

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section className="text-black">
            <div className="container py-10 md:py-20 lg:py-32 xl:py-44 space-y-10 md:space-y-20 lg:space-y-32">
                <div className="">
                    <motion.div
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[50px] text-gray-900"
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="section-title fz-72 color-white title-animation-top">
                            <h1>Our Most</h1>
                            <h1 className="text-black/70">Valuable Clients</h1>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-gradient-to-br from-[#f6d365] to-[#fda085] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-2"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {clients.map((client) => (
                        <motion.div
                            key={client.id}
                            className="z-0 border-t border flex items-center justify-center max-h-[245px] py-[98px] px-[40px] relative"
                            variants={itemVariants}
                        >
                            <Image
                                src={client.logo}
                                alt={client.alt}
                                width={200}
                                height={100}
                                loading="lazy"
                                className="client-logo"
                            />
                            <div className="client-item-border left"></div>
                            <div className="client-item-border"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
