'use client';

import Aos from 'aos';
import Image from 'next/image';
import { useEffect } from 'react';
import ServiceDetails from './ServiceDetails';
import ProcessOfWebDesignDevelopmentWork from './ProcessOfWebDesignDevelopmentWork';
import TransformingYourBrandDesignExcellenceWork from './TransformingYourBrandDesignExcellenceWork';

export default function RootGraphicsDesign() {
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
                    src={'/images/service-header-graphics-design.png'}
                    alt="service header image"
                    width={1600}
                    height={450}
                    className="w-full h-full object-cover"
                />
                <div className="absolute text-center">
                    <h1 className="text-white text-5xl font-semibold leading-[57.60px]">
                        Service Pages
                    </h1>
                    <div className="text-center flex items-center gap-1">
                        <span className="text-[#ffa726] text-xl font-medium leading-normal">
                            <a href={`/`}>Home</a>
                        </span>
                        <span className="text-white text-xl font-medium leading-normal">
                            / <a href={`/services`}>Services</a>
                        </span>
                        <span class="text-white text-xl font-medium leading-normal">
                            / Graphic Design
                            <a href={`/services/graphic-design`}>
                                Graphic Design
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-5 lg:py-10">
                <ServiceDetails />
            </div>
            <div className="py-5 lg:py-10">
                <ProcessOfWebDesignDevelopmentWork />
            </div>
            <div className="py-5 lg:py-10">
                <TransformingYourBrandDesignExcellenceWork />
            </div>
        </>
    );
}
