'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PhotoEditingStats() {
    return (
        <>
            <section className="bg-white padding-x padding-y">
                <div className="container space-y">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="heading-one text-center">
                            Numbers that define our Photo Editing capabilities!
                        </h1>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            {
                                id: 1,
                                bg: 'bg-yellow-300',
                                text: '10 M+ Images',
                                description:
                                    'We have successfully edited 10m+ images globally for our clients.',
                            },
                            {
                                id: 2,
                                bg: 'bg-gray-200',
                                text: '2000+ happy clients',
                                description:
                                    'We have worked with 2000+ clients globally. All are happy with us.',
                            },
                            {
                                id: 3,
                                bg: 'bg-green-400',
                                text: '10000+ project',
                                description:
                                    'We successfully completed 10000+ photo editing projects',
                            },
                            {
                                id: 4,
                                bg: 'bg-gray-200',
                                text: 'Panther - security with usability!',
                                description: '',
                                isButton: true,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.bg} to-black p-6 md:p-10 lg:p-16 space-y-3 md:space-y-5`}
                            >
                                <h1
                                    className={`text-2xl ${
                                        item.isButton
                                            ? ''
                                            : 'md:text-4xl lg:text-6xl'
                                    } font-semibold font-montserrat leading-relaxed`}
                                >
                                    {item.text}
                                </h1>
                                {item.description && (
                                    <p className="description-small">
                                        {item.description}
                                    </p>
                                )}
                                {item.isButton && (
                                    <button className="button bg-orange-500 text-white">
                                        <Link href={'/contact-us'}>
                                            Contact Us
                                        </Link>
                                    </button>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="bg-black padding-x padding-y"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-between">
                        <div className="w-full max-w-2xl space-y-6 md:space-y-10 flex-1">
                            <div className="space-y-6 md:space-y-10">
                                <h3 className="heading-two text-white lg:max-w-lg !font-semibold">
                                    Ready to edit photos that grabs attention?
                                    Let’s make it happen!
                                </h3>
                                <p className="description text-gray-300">
                                    We edit with passion. It’s not just about
                                    enhancing images—it’s about creating a
                                    visual impact that captivates viewers and
                                    turns them into loyal customers.
                                </p>
                            </div>

                            <button className="button bg-orange-500 text-white hover:bg-gray-500">
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </button>
                        </div>

                        <div className="flex-1 w-full">
                            <Image
                                src={
                                    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738907958/wlbdavejurkai3npvsqc.png'
                                }
                                alt="responsive design"
                                width={600}
                                height={450}
                                priority
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
