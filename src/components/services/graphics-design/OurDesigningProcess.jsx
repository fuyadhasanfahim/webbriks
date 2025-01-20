'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Edit, Truck } from 'lucide-react';

const processSteps = [
    {
        step: 1,
        title: 'Quotation Request',
        description:
            "We listen to your requirements and analyze the photo to predict the full batch's needs.",
        icon: <ClipboardList className="size-12 text-[#FFA726]" />,
    },
    {
        step: 2,
        title: 'Designing',
        description:
            'Once our quotation is approved, we start designing your visuals.',
        icon: <Edit className="size-12 text-[#FFA726]" />,
    },
    {
        step: 3,
        title: 'Review & Revisions',
        description:
            'We provide multiple revisions to make sure you are 100% satisfied with the outcome.',
        icon: <CheckCircle className="size-12 text-[#FFA726]" />,
    },
    {
        step: 4,
        title: 'Delivery',
        description: 'We deliver high-quality images in your preferred format.',
        icon: <Truck className="size-12 text-[#FFA726]" />,
    },
];

export default function OurDesigningProcess() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-5 lg:px-20 text-gray-800 py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Designing Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {processSteps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`w-full min-w-[269px] rounded-2xl border bg-white p-6`}
                    >
                        <div
                            className={`text-end text-black/10 text-[32px] font-bold`}
                        >
                            0{index + 1}
                        </div>
                        <div className="flex flex-col justify-start items-start gap-8">
                            <div className="flex flex-col justify-start items-start gap-2.5">
                                <div className="flex flex-col justify-start items-start gap-6">
                                    <div className="w-12 h-12 py-[0.39px] flex justify-center items-center">
                                        {step.icon}
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
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
