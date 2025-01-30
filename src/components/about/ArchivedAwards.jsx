'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ArchivedAwards() {
    const awards = [
        {
            id: '2042fe32-0776-aadf-68ec-573353b7ae6e',
            image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64f6b4f577ade53deb29ed44_behance.svg',
            alt: 'Behance',
            title: 'Behance',
            details: '2× Interaction Design awards',
        },
        {
            id: '1443c955-4902-34b4-369f-47eda754ca3e',
            image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64f6b52a7e97ba279419c1cd_Clutch.svg',
            alt: 'Clutch',
            title: 'Clutch',
            details: 'Top B2B Service Provider and UX Design Agency',
        },
        {
            id: '71af0398-1d04-3d6c-7232-681e822f2d10',
            image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64f6b4cbafa93a46866657e2_dribbble.svg',
            alt: 'Dribbble',
            title: 'Dribbble',
            details: 'One of the best Design Agency',
        },
        {
            id: 'ee4559b7-02e4-262f-5e8e-5d013e781bb4',
            image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64f6b49662069b424056bef3_upwork.svg',
            alt: 'Upwork',
            title: 'Upwork',
            details: 'Top Rated Design Agency',
        },
    ];

    // Animation variants for the titles
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    // Animation variants for the awards grid
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

    // Animation variants for each award item
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section className="bg-black text-white">
            <div className="container py-10 md:py-20 lg:py-32 xl:py-44">
                {/* Archived Title */}
                <motion.div
                    className="text-[60px] md:text-[100px] lg:text-[160px] xl:text-[200px] font-[700] lg:-mb-20"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Archived
                </motion.div>

                {/* Awards Grid */}
                <motion.div
                    className="z-10 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative overflow-hidden justify-between"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {awards.map((award) => (
                        <motion.div
                            key={award.id}
                            data-w-id={award.id}
                            className={`z-0 flex flex-col justify-between w-full p-10 transition-all duration-200 relative bg-[#ffffff] text-black`}
                            variants={itemVariants}
                        >
                            <div className="mb-[9.583vw]">
                                <Image
                                    src={award.image}
                                    loading="lazy"
                                    alt={award.alt}
                                    width={67}
                                    height={42}
                                    className="inline-block self-center"
                                />
                            </div>
                            <div className="">
                                <div className="mb-2 text-xl md:text-2xl font-medium">
                                    {award.title}
                                </div>
                                <div className="text-lg leading-6">
                                    {award.details}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Awards Title */}
                <motion.div
                    className="text-[60px] md:text-[100px] lg:text-[160px] xl:text-[200px] font-[700] text-end lg:-mt-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Awards
                </motion.div>
            </div>
        </section>
    );
}
