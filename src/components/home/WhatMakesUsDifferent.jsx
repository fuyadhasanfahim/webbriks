import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const features = [
    {
        id: 1,
        icon: '/icons/expertise.svg',
        title: 'Expertise',
        description:
            'Our team has years of experience in delivering high-quality services.',
    },
    {
        id: 2,
        icon: '/icons/reliability.svg',
        title: 'Reliability',
        description:
            'We consistently deliver on our promises and meet deadlines.',
    },
    {
        id: 3,
        icon: '/icons/innovation.svg',
        title: 'Innovation',
        description:
            'We use the latest tools and techniques to stay ahead of the curve.',
    },
];

export default function WhatMakesUsDifferent() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="lg:w-1/3">
                        <h2 className="text-center md:text-start lg:text-5xl text-4xl text-[#2B2121] lg:leading-[58px] font-semibold lg:my-5 my-3">
                            What makes us different?
                        </h2>
                        <p className="text-center md:text-start text-[#444444] text-base font-normal mt-4 leading-relaxed">
                            We will take care of all your creative needs. No
                            inefficient freelancers. No lengthy hiring
                            procedures. No contracts. Just your work getting
                            done!
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                            <button
                                id="prev-button"
                                className="p-2 rounded-full border border-[#2b2121] flex items-center justify-center"
                            >
                                <FiArrowLeft />
                            </button>
                            <button
                                id="next-button"
                                className="p-2 rounded-full border border-[#2b2121] flex items-center justify-center"
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={20}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            navigation={{
                                prevEl: '#prev-button',
                                nextEl: '#next-button',
                            }}
                            className="w-full"
                        >
                            {features.map((feature) => (
                                <SwiperSlide key={feature.id}>
                                    <div className="w-full h-[314px] px-6 py-10 bg-white rounded-2xl border border-[#f1f1f1] shadow-sm flex flex-col items-center text-center">
                                        <div className="w-16 h-16 p-3 bg-[#fff7ec] rounded-full flex items-center justify-center mb-4">
                                            <Image
                                                src={feature.icon}
                                                alt={`${feature.title} icon`}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="text-black text-2xl font-medium mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-black font-normal leading-relaxed mb-4 self-stretch">
                                            {feature.description}
                                        </p>
                                        {/* <button className="text-[#444444] text-lg font-medium flex items-center gap-2">
                                            Learn More
                                            <FiArrowRight />
                                        </button> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
