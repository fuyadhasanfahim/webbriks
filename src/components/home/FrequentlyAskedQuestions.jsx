'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiPlus, FiMinus } from 'react-icons/fi';

const FAQ_DATA = [
    {
        question: 'What services does your web agency offer?',
        answer: 'Our web agency provides services like web design, development, SEO, and maintenance for businesses of all sizes.',
    },
    {
        question: 'Can you help with redesigning an existing website?',
        answer: 'Yes, we specialize in redesigning websites to improve performance, usability, and aesthetics.',
    },
    {
        question: 'Do you offer mobile app development services?',
        answer: 'We offer mobile app development for both Android and iOS platforms, tailored to your specific needs.',
    },
    {
        question: 'Do you offer fixed pricing or hourly rates?',
        answer: 'We offer both fixed pricing for defined projects and hourly rates for ongoing support.',
    },
    {
        question: 'Do you offer any payment plans or financing options?',
        answer: 'Yes, we provide flexible payment plans to make our services more accessible.',
    },
];

export default function FrequentlyAskedQuestions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
                    <div className="w-full lg:w-[50%] flex flex-col gap-8">
                        {FAQ_DATA.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 bg-white rounded-lg border ${
                                    openIndex === index
                                        ? 'border-[#ffa726]'
                                        : 'border-[#ebebeb]'
                                } transition-transform duration-300 ease-linear`}
                            >
                                <button
                                    className="flex justify-between items-center cursor-pointer w-full"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="text-[#2b2121] text-xl font-medium">
                                        {item.question}
                                    </div>
                                    {openIndex === index ? (
                                        <FiMinus className="w-6 h-6" />
                                    ) : (
                                        <FiPlus className="w-6 h-6" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="mt-4 text-[#666666] text-base">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="h-14 px-6 py-3.5 bg-[#ffa726] rounded-lg text-[#2b2121] text-xl font-medium inline-flex items-center gap-2 self-start">
                            Learn More
                            <FiArrowUpRight />
                        </button>
                    </div>

                    <div className="w-[552px] h-[520px] relative hidden lg:block">
                        <div className="left-[219px] top-[78px] absolute">
                            <div className="w-[333px] h-[181px] -right-[70px] top-[194px] absolute bg-[#ffa726] rounded-2xl" />
                            <Image
                                src="/images/frequently-asked-questions.png"
                                alt="Frequently Asked Questions"
                                width={226.24}
                                height={442}
                                className="left-[70px] relative"
                            />
                        </div>
                        <div className="w-[463px] h-[206px] left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
                            <div className="self-stretch text-[#2b2121] text-5xl font-semibold leading-[57.60px]">
                                Frequently Asked Questions
                            </div>
                            <div className="w-[347px] h-[66px] text-[#2b2121] text-base font-normal leading-tight">
                                These FAQs address common concerns travelers may
                                have before booking. Let me know if you need
                                more or adjustments!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
