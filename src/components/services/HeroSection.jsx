import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoTriangle } from 'react-icons/io5';

export default function ServicesHeroSection() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="flex flex-col gap-12 mx-auto">
                    <div className="flex items-center lg:items-start flex-col lg:flex-row justify-between gap-10">
                        <div className="w-full max-w-[552px]">
                            <h3 className="text-[#2b2121] text-4xl md:text-5xl font-semibold leading-[57.60px] text-center lg:text-left">
                                Service we Provide
                            </h3>
                            <p className="text-[#444444] text-lg font-normal leading-snug mt-6 text-center lg:text-left">
                                {`This growth led us to create "Web Briks LLC."
                                Now, we offer additional services, including
                                virtual assistance and web design.`}
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-10 w-full lg:w-auto">
                            <div className="w-full h-[324px] md:w-[268px] p-6 bg-white rounded-lg border justify-start items-center gap-2 inline-flex">
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="w-16 h-16 relative">
                                        <div className="w-16 h-16 left-0 top-0 absolute opacity-10 bg-[#ffa726] rounded-lg border" />
                                        <div className="w-10 h-10 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                                            <Image
                                                src={
                                                    '/icons/graphics-design.svg'
                                                }
                                                alt={`graphics-design-icon`}
                                                className="relative"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                                        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Graphics Design
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Creative and compelling graphic
                                                design services to make your
                                                brand stand out.
                                            </div>
                                        </div>
                                        {/* <Link
                                            href={'/services/graphics-design'}
                                            className="justify-start items-center gap-1 inline-flex hover:underline"
                                        >
                                            <div className="text-[#444444] text-base font-normal leading-tight">
                                                Explore More
                                            </div>
                                            <FiArrowUpRight className="text-[#444444]" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[324px] md:w-[268px] p-6 bg-white rounded-lg border justify-start items-center gap-2 inline-flex">
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="w-16 h-16 relative">
                                        <div className="w-16 h-16 left-0 top-0 absolute opacity-10 bg-[#ffa726] rounded-lg border" />
                                        <div className="w-10 h-10 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                                            <Image
                                                src={'/icons/photo-editing.svg'}
                                                alt={`photo-editing-icon`}
                                                className="relative"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                                        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Photo Editing
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Professional photo editing
                                                services to enhance your images
                                                to perfection.
                                            </div>
                                        </div>
                                        {/* <Link
                                            href={'/services/photo-editing'}
                                            className="justify-start items-center gap-1 inline-flex hover:underline"
                                        >
                                            <div className="text-[#444444] text-base font-normal leading-tight">
                                                Explore More
                                            </div>
                                            <FiArrowUpRight className="text-[#444444]" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[0px] border border-[#ebebeb]" />

                    <div className="flex items-center flex-col lg:flex-row justify-between gap-10">
                        <div className="flex flex-col md:flex-row items-center gap-10 w-full lg:w-auto">
                            <div className="w-full h-[324px] md:w-[268px] p-6 bg-white rounded-lg border justify-start items-center gap-2 inline-flex">
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="w-16 h-16 relative">
                                        <div className="w-16 h-16 left-0 top-0 absolute opacity-10 bg-[#ffa726] rounded-lg border" />
                                        <div className="w-10 h-10 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                                            <Image
                                                src={'/icons/video-editing.svg'}
                                                alt={`video-editing-icon`}
                                                className="relative"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                                        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Video Editing
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Creative and compelling video
                                                editing services to make your
                                                content stand out.
                                            </div>
                                        </div>
                                        {/* <Link
                                            href={'/services/video-editing'}
                                            className="justify-start items-center gap-1 inline-flex hover:underline"
                                        >
                                            <div className="text-[#444444] text-base font-normal leading-tight">
                                                Explore More
                                            </div>
                                            <FiArrowUpRight className="text-[#444444]" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[324px] md:w-[268px] p-6 bg-white rounded-lg border justify-start items-center gap-2 inline-flex">
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="w-16 h-16 relative">
                                        <div className="w-16 h-16 left-0 top-0 absolute opacity-10 bg-[#ffa726] rounded-lg border" />
                                        <div className="w-10 h-10 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                                            <Image
                                                src={
                                                    '/icons/web-development.svg'
                                                }
                                                alt={`web-development-icon`}
                                                className="relative"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                                        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Web Design Development
                                            </div>
                                            <div className="text-[#444444] text-base font-normal leading-tight">
                                                Professional web development
                                                services to build your online
                                                presence.
                                            </div>
                                        </div>
                                        {/* <Link
                                            href={
                                                '/services/web-design-and-development'
                                            }
                                            className="justify-start items-center gap-1 inline-flex hover:underline"
                                        >
                                            <div className="text-[#444444] text-base font-normal leading-tight">
                                                Explore More
                                            </div>
                                            <FiArrowUpRight className="text-[#444444]" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[560px] flex-col justify-start items-start gap-8 inline-flex">
                            <div className="self-stretch text-[#444444] text-lg font-normal leading-snug text-center lg:text-left">
                                Adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                eni, ad minim.
                            </div>
                            <div className="justify-center lg:justify-start items-center gap-4 inline-flex w-full">
                                <div className="w-16 h-16 bg-[#ffa726] rounded-[32px] justify-center items-center gap-2 flex">
                                    <IoTriangle className="text-white rotate-90" />
                                </div>
                                <div className="text-[#2b2121] text-lg font-normal leading-snug">
                                    Video Presentation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
