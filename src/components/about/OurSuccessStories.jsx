'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const timelineItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function OurSuccessStories() {
    const sectionRef = useRef(null);
    const [countersVisible, setCountersVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const empoweringX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const successStoriesX = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section
            ref={sectionRef}
            className="bg-white overflow-hidden py-16 md:py-24"
        >
            <div className="container mx-auto px-4">
                {/* Header Section - Original Title Format */}
                <div className="mb-16">
                    <div className="space-y-4 md:space-y-6">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-900"
                            style={{ x: empoweringX }}
                        >
                            Inspiring Progress
                        </motion.h1>
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-orange-500 pl-4 sm:pl-10 md:pl-20 lg:pl-32"
                            style={{ x: successStoriesX }}
                        >
                            Achieving Excellence
                        </motion.h1>
                    </div>
                </div>

                {/* Content with Sticky Image */}
                <div className="relative flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sticky Image Container */}
                    <motion.div
                        className="w-full lg:w-1/2 lg:sticky lg:top-24 self-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            src="https://i.ibb.co/84jNwG8/earth.webp"
                            alt="Global digital services"
                            width={765}
                            height={969}
                            className="w-full h-auto rounded-xl"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            className="bg-orange-50 p-6 md:p-8 rounded-xl border border-orange-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={timelineVariants}
                            onViewportEnter={() => setCountersVisible(true)}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-orange-200">
                                From Pixels to Progress – We Build Digital
                                Success.
                            </h3>

                            <motion.div
                                className="relative"
                                variants={timelineItemVariants}
                            >
                                <div className="flex items-start mb-8">
                                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            2014 – A Freelancer&apos;s Vision
                                        </h4>
                                        <p className="text-gray-700 mt-2">
                                            Our journey began in 2014, when our
                                            Founder & Managing Director, Md.
                                            Ashaduzzaman, started as a
                                            passionate freelancer offering
                                            professional photo editing services
                                            to clients worldwide. With an
                                            unwavering commitment to quality and
                                            client satisfaction, he quickly
                                            built a reputation for delivering
                                            exceptional results.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start mb-8">
                                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            2018 – The Birth of Cut Out Expert
                                        </h4>
                                        <p className="text-gray-700 mt-2">
                                            As demand grew, we transformed this
                                            one-man effort into a dedicated
                                            company called Cut Out Expert. This
                                            marked our first major
                                            milestone—serving global businesses
                                            with high-end photo editing and
                                            retouching services, building
                                            long-term relationships, and
                                            becoming a trusted outsourcing
                                            partner in the creative industry.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start mb-8">
                                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            2023 – Expanding Horizons & The
                                            Birth of Web Briks LLC
                                        </h4>
                                        <div className="space-y-2">
                                            <p className="text-gray-700 font-semibold">
                                                Over time, our clients needs
                                                evolved. They sought more than
                                                just photo editing—they wanted
                                                complete digital solutions to
                                                grow their businesses. To meet
                                                this demand, we expanded our
                                                services to include:
                                            </p>
                                            <ul className="list-inside list-disc space-y-2 pl-4">
                                                <li className="text-gray-700">
                                                    Web Design & Development –
                                                    Modern, responsive websites
                                                    tailored for business
                                                    success.
                                                </li>
                                                <li className="text-gray-700">
                                                    Digital Marketing – SEO,
                                                    social media campaigns, and
                                                    data-driven strategies to
                                                    increase visibility.
                                                </li>
                                                <li className="text-gray-700">
                                                    Video Editing & Multimedia –
                                                    Creative content that
                                                    engages and converts.
                                                </li>
                                                <li className="text-gray-700">
                                                    Lead Generation & Business
                                                    Support – Helping clients
                                                    reach new markets and
                                                    customers.
                                                </li>
                                            </ul>
                                            <p className="text-gray-700">
                                                To reflect this evolution and
                                                operate on a truly global scale,
                                                we founded Web Briks LLC, a
                                                U.S.-registered company. This
                                                new identity represents who we
                                                are today—a full-service digital
                                                outsourcing partner empowering
                                                businesses worldwide with
                                                innovative, cost-effective
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Today – A Global Partner for Digital
                                            Growth
                                        </h4>
                                        <p className="text-gray-700 mt-2">
                                            From a freelancer in 2014 to a
                                            global service provider, Web Briks
                                            LLC continues to grow with the same
                                            passion, innovation, and
                                            client-first approach that fueled
                                            our journey from the very start.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start mt-6">
                                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Mission Statement:
                                        </h4>
                                        <p className="text-gray-700 mt-2">
                                            To empower businesses worldwide with
                                            innovative digital
                                            solutions—delivering quality,
                                            reliability, and growth through
                                            creativity and technology.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
