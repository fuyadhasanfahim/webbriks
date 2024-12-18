import Image from 'next/image';

export default function WhatClientThinkAboutUS() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="h-[489px] justify-start items-center gap-[57px] inline-flex flex-wrap">
                    <div className="w-[562px] flex-col justify-start items-start gap-12 inline-flex">
                        <div className="self-stretch h-[174px] flex-col justify-start items-start gap-8 flex">
                            <div className="w-[505px] h-[104px] flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch text-[#2b2121] text-5xl font-semibold leading-[57.60px]">
                                    What Client <br />
                                    Think about US
                                </div>
                            </div>
                            <div className="self-stretch text-[#2b2121] text-base font-normal leading-tight">
                                Our team of specialists helps businesses
                                navigate the complex landscape of modern
                                technology, ensuring they stay compliant,
                                innovative, and competitive.
                            </div>
                        </div>
                        <div className="h-14 px-6 py-3.5 bg-[#ffa726] rounded-lg justify-center items-center gap-2 inline-flex">
                            <div className="justify-start items-center gap-2 flex">
                                <div className="text-[#2b2121] text-xl font-medium leading-normal">
                                    Check All
                                </div>
                                <div className="w-5 h-5 relative origin-top-left rotate-[60.99deg]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[527px] h-[489px] relative">
                        <div className="w-[463px] h-[147px] left-0 top-[171px] absolute flex-col justify-start items-start gap-2 inline-flex">
                            <div className="w-[463px] h-[147px] bg-white rounded-2xl border border-[#ff8f20]/25 justify-start items-center gap-2 inline-flex" />
                            <div className="w-[461px] justify-start items-center gap-4 inline-flex">
                                <div className="w-[15px] h-[147px] bg-[#ffa726] rounded-tl-2xl rounded-bl-2xl" />
                                <div className="w-[406px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                        <Image
                                            className="rounded-full"
                                            src="/images/ceo-asad.jpg"
                                            alt="what our client think about us"
                                            width={92}
                                            height={92}
                                        />

                                        <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Madam Khadija
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Expert Designer exceeded my
                                                expectations with outstanding
                                                logo design work.{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[463px] h-[147px] left-[64px] top-[342px] absolute flex-col justify-start items-start gap-2 inline-flex">
                            <div className="w-[463px] h-[147px] bg-white rounded-2xl border border-[#ebebeb] justify-start items-center gap-2 inline-flex" />
                            <div className="w-[461px] justify-start items-center gap-4 inline-flex">
                                <div className="w-[15px] h-[147px] bg-[#ebebeb] rounded-tl-2xl rounded-bl-2xl" />
                                <div className="w-[406px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                        <Image
                                            className="rounded-full"
                                            src="/images/ceo-asad.jpg"
                                            alt="what our client think about us"
                                            width={92}
                                            height={92}
                                        />

                                        <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                Sad IBn Muaz
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Expert Designer exceeded my
                                                expectations with outstanding
                                                logo design work.{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[463px] h-[147px] left-[64px] top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                            <div className="w-[463px] h-[147px] bg-white rounded-2xl border border-[#ebebeb] justify-start items-center gap-2 inline-flex" />
                            <div className="w-[461px] justify-start items-center gap-4 inline-flex">
                                <div className="w-[15px] h-[147px] bg-[#ebebeb] rounded-tl-2xl rounded-bl-2xl" />
                                <div className="w-[406px] flex-col justify-start items-start inline-flex">
                                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                        <Image
                                            className="rounded-full"
                                            src="/images/ceo-asad.jpg"
                                            alt="what our client think about us"
                                            width={92}
                                            height={92}
                                        />

                                        <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                John Wick
                                            </div>
                                            <div className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                Expert Designer exceeded my
                                                expectations with outstanding
                                                logo design work.{' '}
                                            </div>
                                        </div>
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
