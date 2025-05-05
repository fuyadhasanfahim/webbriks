'use client';

import { ClipboardList, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageEditingTrialPage() {
    return (
        <>
            <section className="bg-black">
                <div className="padding-x padding-y container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="heading-one text-white">
                                5 Free Photo Edits to Prove Our Quality —{' '}
                                <span className="text-orange-500">
                                    No Commitment
                                </span>
                            </h1>

                            <p className="description !text-gray-400">
                                With over 10 million images edited across
                                60,000+ jobs, our quality speaks for itself. Try
                                5 edits free — and see the difference.
                            </p>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2" />
                                <span>Start Free Trial</span>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl overflow-hidden shadow"
                        >
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/rAD6sKGxCVI?si=9SdyFPL7dUUJOVoc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-300"
                    >
                        {[
                            {
                                title: 'Proven Framework',
                                description:
                                    'A step-by-step client acquisition system that consistently delivers results',
                            },
                            {
                                title: 'Expert Support',
                                description:
                                    'Get direct access to our team of marketing specialists',
                            },
                            {
                                title: 'Guaranteed Results',
                                description:
                                    "If you don't see new clients in 60 days, we'll refund 100% of your investment",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="p-4">
                                <h3 className="heading-three text-gray-200 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="description !text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </motion.div> */}
                </div>
            </section>

            <section>
                <div className="padding-x padding-y container space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row gap-6 items-center"
                    >
                        {['Alisha Cooper', 'Henry Jack'].map((name, i) => (
                            <div key={i} className="lg:w-1/2 w-full">
                                <div className="bg-white border rounded-xl p-6">
                                    <Quote className="size-10 text-orange-600" />
                                    <p className="description mt-4">
                                        When our designs need an expert opinion
                                        or approval, I know I can rely on your
                                        agency. Thank you for all your help—I
                                        will be recommending you to everyone.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-14 h-14 border-2 border-orange-500 rounded-full overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1738220314/p1ljpnndchofo0w6whak.jpg"
                                            width={60}
                                            height={60}
                                            className="rounded-full"
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-800">
                                            {name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {i === 0
                                                ? 'Developer'
                                                : 'UI/UX Designer'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center pt-6"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <h4 className="heading-three text-center">
                                Want this kind of result?
                            </h4>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2" />
                                <span>Start Free Trial</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="padding-x padding-y bg-gray-200">
                <div className="container space-y lg:!space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <h3 className="heading-two !font-semibold !leading-normal">
                                No More Guesswork. Flawless Photo Editing from
                                Experts.
                            </h3>
                            <div className="description-small space-y-2">
                                <p>
                                    In today’s fast-moving digital world,
                                    high-quality visuals aren’t a luxury —
                                    they’re a necessity.
                                </p>
                                <p>
                                    Whether you&apos;re an eCommerce manager
                                    juggling thousands of product images, a
                                    photographer aiming to focus more on
                                    shooting than retouching, or an agency owner
                                    struggling to meet tight deadlines — we get
                                    it.
                                </p>
                                <p>
                                    That’s why we built a scalable photo editing
                                    system trusted by top brands and agencies,
                                    with over 10 million images edited across
                                    60,000+ projects.
                                </p>
                                <p>
                                    Now, we want to show you what we can do —
                                    starting with 5 high-end edits, completely
                                    free.
                                </p>
                                <p>
                                    No commitments. No credit card. Just
                                    quality, speed, and consistency from day
                                    one.
                                </p>
                                <p>
                                    Featured in Forbes, Inc, Entrepreneur and
                                    more
                                </p>
                            </div>
                        </div>

                        <figure className="relative aspect-square">
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614858/kmgstakxkut8sq1qvxgb.jpg"
                                alt=""
                                fill
                                className="rounded-lg object-cover"
                            />
                        </figure>
                    </motion.div>
                </div>
            </section>

            <section className="padding-x padding-y">
                <div className="container space-y lg:!space-y-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-one text-center"
                    >
                        Why choose us?
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center"
                    >
                        <figure className="relative aspect-square">
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614858/kmgstakxkut8sq1qvxgb.jpg"
                                alt=""
                                fill
                                className="rounded-full object-cover"
                            />
                        </figure>

                        <div className="description-small !font-semibold space-y-4 text-center max-w-lg">
                            <p>
                                Trusted photo editing partner for 60,000+
                                projects across the globe
                            </p>
                            <p>
                                Edited over 10 million images for eCommerce
                                brands, photographers, and agencies
                            </p>
                            <p>
                                Powering photo workflows for top studios and
                                fast-scaling retailers
                            </p>
                            <p>
                                10+ years of experience delivering consistent,
                                high-end results under tight deadlines
                            </p>
                            <p>
                                Lightning-fast turnaround times without
                                sacrificing quality
                            </p>
                            <p>
                                Dedicated team of professional editors trained
                                in eCommerce, fashion, product, and portrait
                                retouching
                            </p>
                            <p>
                                Flexible and scalable — from 5 images to 5,000+,
                                we’ve got you covered
                            </p>
                            <p>
                                Free trial available: 5 expertly edited images,
                                100% free with no commitment
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <div className="padding-x padding-y bg-gray-200">
                    <div className="container space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col lg:flex-row gap-6 items-center"
                        >
                            {['Alisha Cooper', 'Henry Jack'].map((name, i) => (
                                <div key={i} className="lg:w-1/2 w-full">
                                    <div className="bg-white border rounded-xl p-6">
                                        <Quote className="size-10 text-orange-600" />
                                        <p className="description mt-4">
                                            When our designs need an expert
                                            opinion or approval, I know I can
                                            rely on your agency. Thank you for
                                            all your help—I will be recommending
                                            you to everyone.
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-14 h-14 border-2 border-orange-500 rounded-full overflow-hidden">
                                            <Image
                                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1738220314/p1ljpnndchofo0w6whak.jpg"
                                                width={60}
                                                height={60}
                                                className="rounded-full"
                                                alt="profile"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-800">
                                                {name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {i === 0
                                                    ? 'Developer'
                                                    : 'UI/UX Designer'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center padding-x padding-y"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <h4 className="heading-three text-center">
                                    Want this kind of result?
                                </h4>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center">
                                    <ClipboardList className="w-5 h-5 mr-2" />
                                    <span>Start Free Trial</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
