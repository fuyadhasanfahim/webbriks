import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Madam Khadija',
        feedback:
            'Expert Designer exceeded my expectations with outstanding logo design work.',
        image: '/images/ceo-asad.jpg',
        borderColor: '#ff8f20',
        barColor: '#ffa726',
    },
    {
        id: 2,
        name: 'Sad Ibn Muaz',
        feedback:
            'Expert Designer exceeded my expectations with outstanding logo design work.',
        image: '/images/ceo-asad.jpg',
        borderColor: '#ebebeb',
        barColor: '#ffa726',
    },
    {
        id: 3,
        name: 'John Wick',
        feedback:
            'Expert Designer exceeded my expectations with outstanding logo design work.',
        image: '/images/ceo-asad.jpg',
        borderColor: '#ebebeb',
        barColor: '#ebebeb',
    },
];

export default function WhatClientThinkAboutUS() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="h-auto lg:h-[489px] flex flex-col lg:flex-row justify-center items-center gap-[57px]">
                    <div className="w-full lg:w-[562px] flex-col justify-start items-start gap-12 inline-flex overflow-hidden">
                        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                            <div className="w-full h-auto flex-col justify-start items-start gap-4 flex">
                                <h2 className="self-stretch text-[#2b2121] text-5xl font-semibold leading-[57.60px]">
                                    What Client <br /> Think about US
                                </h2>
                            </div>
                            <p className="self-stretch text-[#2b2121] text-base font-normal leading-tight">
                                Our team of specialists helps businesses
                                navigate the complex landscape of modern
                                technology, ensuring they stay compliant,
                                innovative, and competitive.
                            </p>
                        </div>
                        <button className="h-14 px-6 py-3.5 bg-[#ffa726] rounded-lg justify-center items-center gap-2 inline-flex">
                            <span className="text-[#2b2121] text-xl font-medium leading-normal">
                                Check All
                            </span>
                        </button>
                    </div>

                    <div className="w-full lg:w-[527px] h-auto lg:h-[489px] relative flex flex-col gap-4 overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`w-full lg:w-[463px] h-auto lg:h-[147px] relative flex-col justify-start items-start gap-2 inline-flex ${
                                    index === 0
                                        ? 'lg:absolute lg:top-[171px] lg:left-0'
                                        : ''
                                } ${
                                    index === 1
                                        ? 'lg:absolute lg:top-[342px] lg:left-[64px]'
                                        : ''
                                } ${
                                    index === 2
                                        ? 'lg:absolute lg:top-0 lg:left-[64px]'
                                        : ''
                                }`}
                            >
                                <div
                                    className={`w-full lg:w-[463px] h-auto lg:h-[147px] bg-white rounded-2xl border ${
                                        testimonial.highlight
                                            ? 'border-[#ff8f20]/25'
                                            : 'border-[#ebebeb]'
                                    } justify-start items-center gap-2 inline-flex`}
                                />
                                <div className="w-full lg:w-[461px] justify-start items-center gap-4 inline-flex">
                                    <div
                                        className={`w-[15px] h-auto lg:h-[147px] ${
                                            testimonial.highlight
                                                ? 'bg-[#ffa726]'
                                                : 'bg-[#ebebeb]'
                                        } rounded-tl-2xl rounded-bl-2xl`}
                                    />
                                    <div className="w-[406px] flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={92}
                                                height={92}
                                                className="rounded-full"
                                            />
                                            <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                                                <h3 className="self-stretch text-[#2b2121] text-2xl font-medium leading-[28.80px]">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="self-stretch text-[#444444] text-base font-normal leading-tight">
                                                    {testimonial.feedback}
                                                </p>
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
