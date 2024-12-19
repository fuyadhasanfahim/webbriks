import Image from 'next/image';

export default function TransformingYourBrandDesignExcellenceWork() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="flex items-start flex-col lg:flex-row justify-between gap-10">
                    <div className="w-full lg:w-[700px] flex-col justify-start items-start gap-[41px] inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch text-[#2b2121] text-5xl font-semibold leading-[57.60px]">
                                Transforming your brand design excellencet Work
                            </div>
                            <div className="self-stretch text-[#444444] text-base font-normal leading-snug">
                                Crafting compelling digital experiences that
                                captivate audiences and drive meaningful
                                connections. Our digital agency combines
                                innovation, strategy, and expertise to fuel your
                                online success. crafting compelling digital
                                exper-iences that captivate audiences and drive
                                meaningful connections. our digital agency
                                combines innovation, strategy, and expertise to
                                fuel your online success. the other hand we
                                denounce
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-loose">
                                Who Work with US?
                            </div>
                            <div className="h-[110.79px] flex items-center flex-wrap justify-center gap-10">
                                <Image
                                    src="/logo/brand-logo-1.png"
                                    alt="brand-logo-1"
                                    width={80}
                                    height={39}
                                />
                                <Image
                                    src="/logo/brand-logo-2.png"
                                    alt="brand-logo-2"
                                    width={72}
                                    height={43}
                                />
                                <Image
                                    src="/logo/brand-logo-3.png"
                                    alt="brand-logo-3"
                                    width={89}
                                    height={33}
                                />
                                <Image
                                    src="/logo/brand-logo-4.png"
                                    alt="brand-logo-4"
                                    width={102}
                                    height={29}
                                />
                                <Image
                                    src="/logo/brand-logo-5.png"
                                    alt="brand-logo-5"
                                    width={103}
                                    height={43}
                                />
                                <Image
                                    src="/logo/brand-logo-6.png"
                                    alt="brand-logo-6"
                                    width={95}
                                    height={31}
                                />
                                <Image
                                    src="/logo/brand-logo-7.png"
                                    alt="brand-logo-7"
                                    width={99}
                                    height={43}
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/images/transforming.png"
                        alt="transforming"
                        width={464}
                        height={546}
                        className="rounded-2xl mt-10 lg:mt-0 mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </div>
    );
}
