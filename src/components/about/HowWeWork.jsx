'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
};

const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const workSteps = [
    {
        image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64ec2d8fa1410b00862bee1a_Project-kickoff.svg',
        alt: 'Understanding Your Needs',
        title: 'Understanding Your Needs',
    },
    {
        image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64ec2d8e5eb38b96eb6d40a9_discover.svg',
        alt: 'Make Solutions',
        title: 'Make Solutions',
    },
    {
        image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64ec2d8e41720890517a09c9_design.svg',
        alt: 'Collaborative Feedback',
        title: 'Collaborative Feedback',
    },
    {
        image: 'https://cdn.prod.website-files.com/643f7373d3f6653157617339/64ec2d8e16981179a8d71fca_Implementation.svg',
        alt: 'On-Time Delivery & Ongoing Support',
        title: 'On-Time Delivery & Ongoing Support',
    },
];

const steps = [
    {
        id: 1,
        number: '01',
        icon: '/icons/consultation.svg',
        title: 'Consultation',
        description:
            'We start by understanding your needs and goals to tailor our services accordingly.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 2,
        number: '02',
        icon: '/icons/planning.svg',
        title: 'Planning',
        description:
            'We create a detailed plan and timeline to ensure the project stays on track.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 3,
        number: '03',
        icon: '/icons/execution.svg',
        title: 'Execution',
        description:
            'Our team executes the plan with precision and keeps you updated throughout.',
        link: '',
        bg: "bg-[url('/images/execution.png')] bg-cover bg-center",
        textColor: 'text-white',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 4,
        number: '04',
        icon: '/icons/deliver.svg',
        title: 'Deliver',
        description:
            'Our team executes the plan with precision and keeps you updated throughout.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
];

export default function HowWeWork() {
    return (
        <section className="h bg-black text-white">
            <div className="container py-10 md:py-20 lg:py-32 xl:py-44 space-y-10 md:space-y-20 lg:space-y-32">
                <motion.div
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="section-title-wrap"
                        variants={childVariants}
                    >
                        <motion.div
                            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[50px]"
                            variants={childVariants}
                        >
                            How
                        </motion.div>
                        <motion.div
                            className="pl-10 md:pl-16 lg:pl-20 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[50px] text-white/50"
                            variants={childVariants}
                        >
                            We Work
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="max-w-lg text-lg md:text-xl"
                        variants={childVariants}
                    >
                        Our working process is very simple. Our approach is
                        built on collaboration and excellence. From
                        understanding your needs to delivering final results, we
                        work closely with you to ensure every detail aligns with
                        your vision. Discover how our process drives your
                        business forward.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            className={`w-full min-w-[269px] h-[322px] ${step.bg} rounded-2xl border ${step.borderColor} p-6`}
                            variants={childVariants}
                        >
                            <div
                                className={`text-end text-black/10 text-[32px] font-bold ${
                                    step.number === '03' && 'text-white/60'
                                }`}
                            >
                                {step.number}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-8">
                                <div className="flex flex-col justify-start items-start gap-2.5">
                                    <div className="flex flex-col justify-start items-start gap-6">
                                        <div className="w-12 h-12 py-[0.39px] flex justify-center items-center">
                                            <Image
                                                src={step.icon}
                                                alt={`${step.title} icon`}
                                                width={48}
                                                height={47.22}
                                            />
                                        </div>
                                        <h4
                                            className={`text-xl font-semibold ${step.textColor}`}
                                        >
                                            {step.title}
                                        </h4>
                                    </div>
                                    <p
                                        className={`text-sm font-normal mt-2 ${
                                            step.textColor === 'text-white'
                                                ? 'text-white'
                                                : 'text-[#666666]'
                                        }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                <div className="">
                                    {/* <Link href={step.link}>
                                                            <span
                                                                className={`flex gap-1 items-center hover:underline ${step.textColor}`}
                                                            >
                                                                Learn More <FiArrowUpRight />
                                                            </span>
                                                        </Link> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
