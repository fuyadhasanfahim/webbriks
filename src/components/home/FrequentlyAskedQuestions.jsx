'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiPlus, FiMinus } from 'react-icons/fi';

const FAQ_DATA = [
    {
        question: 'What services does your web agency offer?',
        answer: (
            <ul className="list-disc ml-6">
                <li>
                    <strong>Web Design and Development:</strong> Creating
                    modern, responsive websites with React/Next.js.
                </li>
                <li>
                    <strong>WordPress Web Design:</strong> Fully customized
                    WordPress web design with fast page loading speed.
                </li>
                <li>
                    <strong>Graphic Design:</strong> Crafting visually appealing
                    designs to enhance your brand.
                </li>
                <li>
                    <strong>Photo Editing:</strong> Providing professional
                    editing services for flawless images.
                </li>
                <li>
                    <strong>Video Editing:</strong> Producing polished videos
                    that captivate your audience.
                </li>
            </ul>
        ),
    },
    {
        question: 'Can you help with redesigning an existing website?',
        answer: `Yes, we can absolutely help with redesigning an existing website. Our team specializes in creating modern, user-friendly, and visually appealing designs customized to your brand's goals. We’ll work closely with you to understand your needs, improve functionality, and enhance user experience. With our expertise, we’ll make sure your redesigned website looks great and works perfectly. Let us bring your vision to life!`,
    },
    {
        question: 'Do you offer mobile app development services?',
        answer: `No, we don’t offer mobile app development services at the moment. However, we specialize in web design, development, graphic design, photo editing, and video editing to support your business needs. `,
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
                <div className="flex flex-col lg:flex-row items-start justify-between gap-14">
                    <div className="w-full lg:w-[50%] flex flex-col gap-8">
                        {FAQ_DATA.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 bg-white rounded-lg border ${
                                    openIndex === index
                                        ? 'border-[#ffa726] shadow-md'
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
                        {/* <button className="h-14 px-6 py-3.5 bg-[#ffa726] rounded-lg text-[#2b2121] text-xl font-medium inline-flex items-center gap-2 self-start">
                            Learn More
                            <FiArrowUpRight />
                        </button> */}
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
