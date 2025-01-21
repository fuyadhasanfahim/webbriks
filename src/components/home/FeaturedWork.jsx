import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function FeaturedWork() {
    return (
        <div
            className="w-full bg-[#FFFBF4]"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto justify-items-center">
                    <div className="overflow-scroll overflow-x-hidden h-[552px]">
                        <Image
                            src={`https://i.ibb.co.com/xmR3V02/book-haven.webp`}
                            alt="computer image"
                            width={348}
                            height={552}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="w-full max-w-[402px]">
                        <Image
                            src={`/images/books.png`}
                            alt="books image"
                            width={402}
                            height={300}
                            className="rounded-2xl mx-auto"
                        />
                        <div className="text-center mt-10">
                            <h2 className="text-center text-[#2b2121] text-2xl xl:text-[40px] font-semibold leading-[48px]">
                                Featured Work
                            </h2>
                            <p className="text-center text-[#444444] text-md lg:text-lg font-normal leading-normal mt-2 xl:mt-4">
                                A showcase of our recent projects across various
                                industries, demonstrating our expertise and
                                commitment to quality.
                            </p>
                            <div className="text-[#2b2121] mt-8 text-xl font-medium leading-normal flex items-center justify-center">
                                {/* <Link href={''}>
                                        <span className="flex items-center gap-1 hover:underline">
                                            Learn More <FiArrowUpRight />
                                        </span>
                                    </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-scroll overflow-x-hidden h-[552px]">
                        <Image
                            src={`https://i.ibb.co.com/rvTS03m/natural-craft.png`}
                            alt="airplane image"
                            width={348}
                            height={552}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="w-full max-w-[348px] bg-[#ffa726] rounded-2xl px-6 flex items-center justify-center flex-col gap-3 mx-auto py-10">
                        <h3 className="text-center text-[#2b2121] text-2xl font-semibold leading-[28.80px]">
                            Logo Branding
                        </h3>
                        <p className="text-center text-[#2b2121] text-base font-normal leading-tight">
                            A showcase of our recent projects across various
                            industries, demonstrating our expertise and
                            commitment to quality.
                        </p>
                    </div>
                    <Image
                        src={`/images/website.png`}
                        alt="website image"
                        width={402}
                        height={290}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src={`/images/deer.png`}
                        alt="deer image"
                        width={348}
                        height={290}
                        className="rounded-2xl mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}
