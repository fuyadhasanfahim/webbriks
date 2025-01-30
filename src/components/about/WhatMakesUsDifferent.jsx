import { IconBrand4chan } from '@tabler/icons-react';

export default async function WhatMakesUsDifferent() {
    return (
        <section className="bg-white">
            <div className="container py-10 md:py-20 lg:py-32 xl:py-44 space-y-10 md:space-y-20 lg:space-y-32">
                <div className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[50px] text-gray-900">
                    <h1>
                        Why Choose Us:{' '}
                        <span className="text-black/50">
                            The Web Briks Advantage
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-16 items-center justify-between">
                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Customized Solutions for Every Brand
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`Our services are customized to meet the unique needs of your business. We ensure that every design, edit, and website is crafted with your goals in mind.`}
                        </p>
                    </div>

                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Expert Team with Diverse Skills
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`We have experienced professionals in graphic design, photo editing, and web development. With diverse expertise, we bring innovative solutions to the table.`}
                        </p>
                    </div>

                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Proven Track Record of Success
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`We have helped numerous brands grow and succeed over time. Our portfolio showcases a history of transforming businesses with effective design and development solutions that deliver measurable results.`}
                        </p>
                    </div>

                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Collaborative Approach
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`Your input matters. We work closely with you throughout the process and make sure your vision is at the heart of every decision. Our transparent, collaborative approach ensures you’re always in the loop.`}
                        </p>
                    </div>

                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Commitment to Quality & Detail
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`We take pride in delivering high-quality work that stands out. Whether it’s a simple photo edit or a complex web development project, we ensure attention to detail and top-notch craftsmanship in every project.`}
                        </p>
                    </div>

                    <div className="w-full max-w-[360px] mx-auto space-y-4 flex flex-col items-center md:items-start">
                        {/* <div>
                <IconBrand4chan />
            </div> */}
                        <h3 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-semibold">
                            Long-Term Partnership & Support
                        </h3>
                        <p className="text-lg text-center md:text-start">
                            {`Our commitment to your success doesn’t end with project completion. We offer ongoing support and guidance and help your business stay ahead. With Web Briks, you gain a reliable partner for the long run.`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
