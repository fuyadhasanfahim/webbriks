import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Banner() {
    return (
        <div
            className='w-full bg-[#FFFBF4] lg:bg-[url("https://iili.io/2uar8rJ.png")] bg-[length:100%_98%] bg-no-repeat bg-right-top relative'
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Image
                src="https://iili.io/2ubyQbR.png"
                width={80}
                height={21}
                alt=""
                className="absolute hidden md:block top-[15%] -left-3 h-auto w-auto"
            />
            <div className="w-[90%] mx-auto max-w-screen-2xl ">
                <div className="flex md:flex-row justify-between items-center lg:pt-10 flex-col-reverse">
                    <div className="md:w-1/2 relative">
                        <Image
                            src="https://iili.io/2um0J3B.png"
                            width={100}
                            height={90}
                            alt=""
                            className="absolute bottom-0 right-0 w-[20%] h-auto hidden md:block"
                        />
                        <h3 className="text-[#FFA726] text-xl">
                            Award wining Company{' '}
                        </h3>

                        <h1 className="lg:text-5xl text-4xl text-[#2B2121] lg:leading-[58px] font-semibold lg:my-5 my-3">
                            Transforming Your Vision into Creative Results
                        </h1>
                        <p>
                            We provide top notch Graphics design, Photo editing
                            and Web design and development services to help your
                            business thrive.
                        </p>

                        <div className="flex items-center gap-2 my-6">
                            <a
                                href="/get-quote"
                                className="bg-[#FFA726] text-[#2B2121] px-4 py-2 rounded hover:bg-[#2B2121] hover:text-white transition flex items-center gap-2"
                            >
                                <span>Get Started</span>
                                <span>
                                    <FiArrowUpRight />
                                </span>
                            </a>

                            <Link
                                href="https://api.whatsapp.com/send?phone=17185771232"
                                target="_blank"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:text-white transition flex items-center gap-2"
                            >
                                <span>
                                    <FaWhatsapp className="text-xl" />
                                </span>
                                <span>Whats App</span>
                            </Link>
                        </div>

                        <div className="flex justify-center items-center flex-col lg:items-start">
                            <p className="text-[#FFA726] flex items-center gap-1 mb-2 pt-1">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar />{' '}
                                <FaStar />
                            </p>
                            <p className="text-[14px]">
                                (3k+) Customer reviews{' '}
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center mb-5 lg:mb-0">
                        <div className="relative flex justify-center">
                            <Image
                                src="https://iili.io/2ulpnu1.png"
                                alt=""
                                height={67}
                                width={60}
                                className=" absolute lg:top-0 -top-2 lg:left-0 -left-3 w-auto h-auto"
                            />
                            <Image
                                src="https://iili.io/2u0Fz4n.png"
                                alt=""
                                height={50}
                                width={50}
                                className=" absolute top-0 right-0 w-auto h-auto"
                            />
                            <Image
                                src="https://iili.io/2u0fZkG.png"
                                alt=""
                                height={34}
                                width={180}
                                className="hidden lg:block absolute top-1/3 -right-[35%] z-20 w-auto h-auto "
                            />
                            <Image
                                src="https://iili.io/2u0oeDb.png"
                                alt=""
                                height={91}
                                width={192}
                                className=" absolute top-1/2 -left-[80px] z-20 w-auto h-auto"
                            />

                            <div className="absolute bg-[#FFA726] w-[70%] h-[55%] rounded-[50%] top-2 z-0"></div>

                            <Image
                                src="https://iili.io/2ulEgbR.png"
                                alt=""
                                width={300}
                                height={400}
                                className="z-10  ml-1 w-auto h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
