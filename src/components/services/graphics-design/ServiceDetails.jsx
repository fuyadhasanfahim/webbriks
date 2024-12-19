import Image from 'next/image';

export default function ServiceDetails() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="flex items-start flex-col lg:flex-row justify-between gap-10">
                    <div>
                        <Image
                            src="/images/service-details-1.png"
                            alt="service details image"
                            width={643}
                            height={402}
                            className="rounded-lg"
                        />
                        <div className="mt-10">
                            <div className="text-[#2b2121] text-[32px] font-semibold leading-[38.40px] mb-5">
                                Service Details
                            </div>
                            <div className="w-full lg:max-w-[643px] text-[#444444] text-base font-normal leading-snug">
                                Graphic design encompasses a wide range of
                                creative services, all aimed at visually a
                                brand’s message or purpose. A key component is
                                brand identity design, which creating logos,
                                business cards, and brand guidelines to
                                establish a consistent and memorable presence.
                                Marketing and advertising design services cover
                                everything from social media graphics and
                                digital ads to brochures, posters, and flyers,
                                ensuring that marketing efforts are engaging and
                                aligned with the brand’s goals.
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/images/service-details-2.png"
                            alt="service details image"
                            width={463.19}
                            height={402.38}
                            className="rounded-lg"
                        />
                        <div className="mt-10">
                            <div className="text-[#2b2121] text-[32px] font-semibold leading-[38.40px] mb-5">
                                Service Details
                            </div>
                            <div className="w-full h-[184px] flex-col justify-start items-start gap-4 inline-flex">
                                <div className="justify-start items-center gap-4 inline-flex">
                                    <div className="w-6 h-6 pl-[2.62px] pr-[2.63px] pt-[2.64px] pb-[2.62px] justify-center items-center flex overflow-hidden">
                                        <Image
                                            src={'/icons/tick-mark.svg'}
                                            alt="Tick mark"
                                            width={18.75}
                                            height={18.73}
                                            className="relative"
                                        />
                                    </div>
                                    <div className="text-[#444444] text-base font-normal leading-tight">
                                        Logo, brand guidelines for cohesive
                                        visuals.
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-4 inline-flex">
                                    <div className="w-6 h-6 pl-[2.62px] pr-[2.63px] pt-[2.64px] pb-[2.62px] justify-center items-center flex overflow-hidden">
                                        <Image
                                            src={'/icons/tick-mark.svg'}
                                            alt="Tick mark"
                                            width={18.75}
                                            height={18.73}
                                            className="relative"
                                        />
                                    </div>
                                    <div className="text-[#444444] text-base font-normal leading-tight">
                                        Social media graphics, ads, flyers, and
                                        brochures.
                                    </div>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="w-6 h-6 pl-[2.62px] pr-[2.63px] pt-[2.64px] pb-[2.62px] justify-center items-center flex overflow-hidden">
                                        <Image
                                            src={'/icons/tick-mark.svg'}
                                            alt="Tick mark"
                                            width={18.75}
                                            height={18.73}
                                            className="relative"
                                        />
                                    </div>
                                    <div className="text-[#444444] text-base font-normal leading-tight">
                                        Website graphics, UI/UX design, and
                                        infographics.
                                    </div>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="w-6 h-6 pl-[2.62px] pr-[2.63px] pt-[2.64px] pb-[2.62px] justify-center items-center flex overflow-hidden">
                                        <Image
                                            src={'/icons/tick-mark.svg'}
                                            alt="Tick mark"
                                            width={18.75}
                                            height={18.73}
                                            className="relative"
                                        />
                                    </div>
                                    <div className="text-[#444444] text-base font-normal leading-tight">
                                        Creative packaging and label design for
                                        products.
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-4 inline-flex">
                                    <div className="w-6 h-6 pl-[2.62px] pr-[2.63px] pt-[2.64px] pb-[2.62px] justify-center items-center flex overflow-hidden">
                                        <Image
                                            src={'/icons/tick-mark.svg'}
                                            alt="Tick mark"
                                            width={18.75}
                                            height={18.73}
                                            className="relative"
                                        />
                                    </div>
                                    <div className="text-[#444444] text-base font-normal leading-tight">
                                        Print ads, presentations, and custom
                                        typography.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
