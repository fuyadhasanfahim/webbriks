import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const services = [
    {
        id: 1,
        title: 'Graphics Design',
        description:
            'Creative and compelling graphic design services to make your brand stand out.',
        icon: '/icons/graphics-design.svg',
        link: '/services/graphics-design',
    },
    {
        id: 2,
        title: 'Photo Editing',
        description:
            'Professional photo editing services to enhance your images to perfection.',
        icon: '/icons/photo-editing.svg',
        link: '/services/photo-editing',
    },
    {
        id: 3,
        title: 'Video Editing',
        description:
            'Transform your raw footage into stunning videos with our professional video editing services.',
        icon: '/icons/video-editing.svg',
        link: '/services/video-editing',
    },
    {
        id: 4,
        title: 'Web Design & Development',
        description:
            'Custom websites that are responsive, fast, and tailored to your business needs.',
        icon: '/icons/web-development.svg',
        link: '/services/web-design-and-development',
    },
];

export default function ServicesHome() {
    return (
        <div
            className="w-full bg-[#FFFBF4]"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="space-y-12 w-full mx-auto">
                    <div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
                        <div className="w-auto max-w-[522px] text-[#2b2121] text-4xl md:text-5xl font-semibold leading-10 md:leading-[57.60px]">
                            Our Comprehensive Suite Of Digital Marketing
                            Services
                        </div>

                        <div>
                            <div className="text-[#444444] text-xl font-normal leading-normal">
                                {`This growth led us to create "Web Briks LLC." Now,
                            we offer additional services, including virtual
                            assistance and web design.`}
                            </div>
                            <div>
                                <a
                                    href="/services"
                                    className="font-semibold underline mt-3 flex items-center gap-1"
                                >
                                    Our Works <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto w-full">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="w-full min-w-[269px] h-[297px] p-6 bg-white rounded-lg border"
                            >
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="w-16 h-16 relative">
                                        <div className="w-16 h-16 left-0 top-0 absolute opacity-10 bg-[#ffa726] rounded-lg border" />
                                        <div className="w-10 h-10 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                                            <Image
                                                src={service.icon}
                                                alt={`${service.title}-icon`}
                                                className="relative"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[155.12px] flex-col justify-start items-start gap-8 flex">
                                        <div className="self-stretch h-[102px] flex-col justify-start items-start gap-4 flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                {service.title}
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                {service.description}
                                            </div>
                                        </div>
                                        <div className="justify-start items-center gap-1 inline-flex">
                                            <div className="text-[#444444] text-base font-normal leading-tight hover:underline mt-3">
                                                <Link href={service.link}>
                                                    <span className="flex items-center gap-1">
                                                        Explore More
                                                        <FiArrowUpRight />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
