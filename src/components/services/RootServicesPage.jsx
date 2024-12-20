'use client';

import ServicesHeroSection from '@/components/services/HeroSection';
import HowWeWork from '@/components/shared/HowWeWork';
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function RootServicesPage() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div
                className="h-[450px] relative flex items-center justify-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Image
                    src={'/images/service-header.png'}
                    alt="service header image"
                    width={1600}
                    height={450}
                    className="w-full h-full object-cover"
                />
                <div className="absolute text-center">
                    <h1 className="text-white text-5xl font-semibold leading-[57.60px]">
                        Service Pages
                    </h1>
                    <div className="flex justify-center items-center gap-1 mt-2">
                        <span className="text-[#ffa726] text-xl font-medium leading-normal">
                            <a href={`/`}>Home</a>
                        </span>
                        <span className="text-white text-xl font-medium leading-normal">
                            / <a href={`/services`}>Services</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-5 lg:py-10">
                <ServicesHeroSection />
            </div>
            <div className="py-5 lg:py-10">
                <HowWeWork />
            </div>
        </>
    );
}
