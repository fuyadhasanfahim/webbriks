'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const faqs = [
    {
        id: 'faq-1',
        question: 'What makes your web design unique?',
        answer: `We focus on creating a unique design for each client. We don't use templates, so your website will be one of a kind.`,
    },
    {
        id: 'faq-2',
        question: 'Can you help with redesigning an existing website?',
        answer: `Yes, we can absolutely help with redesigning an existing website. Our team specializes in creating modern, user-friendly, and visually appealing designs customized to your brand's goals. We'll work closely with you to understand your needs, improve functionality, and enhance user experience. With our expertise, we'll make sure your redesigned website looks great and works perfectly. Let us bring your vision to life!`,
    },
    {
        id: 'faq-3',
        question: 'Do you offer mobile app development services?',
        answer: `No, we don't offer mobile app development services at the moment. However, we specialize in web design, development, graphic design, photo editing, and video editing to support your business needs.`,
    },
    {
        id: 'faq-4',
        question: 'Which file formats do you allow?',
        answer: `We allow various image file formats like JPG, PNG, PSD, and TIFF. You can send any type of format mentioned here.`,
    },
    {
        id: 'faq-5',
        question: 'I need fast service, can you do it?',
        answer: `If you need a basic and simple clipping path service, we can deliver it very fast. But, for multi-paths and complex images, we may need time to deliver. We will ensure delivery time before taking an order and will deliver it within the time frame.`,
    },
];

export default function Faq() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <motion.section
            className="w-full bg-white padding-x padding-y"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="space-y">
                <div className="w-full mx-auto heading-one text-center">
                    <h1>Frequently</h1>
                    <h1>Asked Question</h1>
                </div>

                <div className="container select-none">
                    {faqs.map(({ question, answer }, index) => (
                        <div
                            key={index}
                            className="border-t border-gray-400 border-dotted last:border-b py-6 md:py-8 lg:py-10 relative isolate group/faq"
                            onClick={() => {
                                setSelectedIndex(
                                    selectedIndex === index ? null : index
                                );
                            }}
                        >
                            <div
                                className={twMerge(
                                    'absolute h-0 w-full bottom-0 left-0 bg-gray-300 -z-10 group-hover/faq:h-full transition-all duration-700',
                                    index === selectedIndex && 'h-full'
                                )}
                            ></div>
                            <div
                                className={twMerge(
                                    'flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:hover:px-8',
                                    index === selectedIndex && 'px-8'
                                )}
                            >
                                <div className="text-2xl md:text-3xl lg:text-4xl">
                                    {question}
                                </div>
                                <div
                                    className={twMerge(
                                        'inline-flex items-center justify-center size-11 border border-gray-400 rounded-full transition-all duration-300 bg-gray-200 shrink-0',
                                        index === selectedIndex
                                            ? 'rotate-45'
                                            : ''
                                    )}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <AnimatePresence>
                                {index === selectedIndex && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: 'easeOut',
                                        }}
                                        className="overflow-hidden lg:px-8"
                                    >
                                        <p className="text-xl mt-4">{answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
