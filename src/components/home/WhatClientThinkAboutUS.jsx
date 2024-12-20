import Image from 'next/image';
import { AnimatedTestimonials } from '../ui/animated-testimonials';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Thompson',
        position: 'CEO, TrendyWear',
        feedback: `Webbriks LLC has been a game-changer for our e-commerce business. Their photo editing services are second to none—flawless background removals, perfect color corrections, and timely delivery every single.`,
        image: '/avatar/avatar-1.png',
    },
    {
        id: 2,
        name: 'David Brown',
        position: 'Marketing Director, CreativeHive',
        feedback: `The graphic design team at Webbriks LLC exceeded our expectations! They brought our ideas to life with creative designs that truly captured our brand identity. Their attention to detail and quick turnaround time have made them our go-to partner for all design needs.`,
        image: '/avatar/avatar-2.jpeg',
    },
    {
        id: 3,
        name: 'Emily Johnson',
        position: 'Founder, Wellness Bloom',
        feedback: `Working with Webbriks LLC on our website redesign was an absolute pleasure. Their team created a stunning, user-friendly website that perfectly reflects our brand. We’ve seen a significant increase in customer engagement since the launch. Highly recommend their web design and development services!`,
        image: '/avatar/avatar-3.png',
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
                <div className="h-auto overflow-hidden flex flex-col xl:flex-row justify-between items-start gap-10">
                    <div className="w-full xl:w-[562px] flex-col justify-start items-start gap-12 inline-flex overflow-hidden ">
                        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                            <div className="w-full h-auto flex-col justify-start items-start gap-4 flex">
                                <h2 className="lg:text-5xl text-4xl text-[#2B2121] lg:leading-[58px] font-semibold lg:my-5 my-3">
                                    What Our Clients Say About Webbriks LLC
                                </h2>
                            </div>
                            <p className="self-stretch text-[#2b2121] text-base font-normal leading-tight">
                                Discover why businesses worldwide trust Webbriks
                                LLC for photo editing, graphic design, and
                                website solutions. Read their experiences and
                                success stories with our expert services.
                            </p>
                        </div>
                        <button className="h-14 px-6 py-3.5 bg-[#ffa726] rounded-lg justify-center items-center gap-2 inline-flex">
                            <span className="text-[#2b2121] text-xl font-medium leading-normal">
                                Check All
                            </span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* {testimonials.map((testimonial) => {
                            const { id, name, feedback, position, image } =
                                testimonial;

                            return (
                                <div
                                    key={id}
                                    className={`flex justify-start items-center gap-4 border border-l-0 rounded-2xl transform transition-all duration-300 ease-in-out hover:-translate-x-10 hover:shadow hover:scale-105 hover:border-[#ff8f20] group`}
                                >
                                    <div className="w-[50px] h-[147px] rounded-l-2xl bg-[#ebebeb] group-hover:bg-[#ff8f20]" />
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-center gap-4 inline-flex flex-col ">
                                            <Image
                                                src={image}
                                                alt="user image"
                                                width={92}
                                                height={92}
                                                className="rounded-full object-cover bg-center"
                                            />
                                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                                <div className="self-stretch text-[#2b2121] text-lg font-medium leading-[28.80px] flex items-center gap-1">
                                                    {name}
                                                    <span className="text-sm italic">
                                                        {`(${position})`}
                                                    </span>
                                                </div>
                                                <div className="self-stretch text-[#444444] text-sm font-normal leading-tight italic pr-4">
                                                    {`"${feedback}"`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })} */}
                        <AnimatedTestimonials
                            testimonials={testimonials}
                            autoplay
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
