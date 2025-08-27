'use client';

import { cn } from '@/lib/utils';
import { IconAdjustmentsBolt, IconHeart, IconHelp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { BadgePlus, DollarSign, ShieldCheck, UsersRound } from 'lucide-react';

export default function Featured() {
    const features = [
        {
            title: '24/7 customer support',
            description:
                'Our customer support team is always ready to provide top notch support. We are available in live chat, email, skype and over phone support. You will experience the best support every day, every hour.',
            icon: <IconHelp />,
        },
        {
            title: 'Faster Service',
            description:
                'We pride ourselves on delivering faster services to keep your business moving forward. Our streamlined approach ensures rapid and efficient solutions. Experience the perfect blend of speed and quality with Web Briks',
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: 'Pricing like no other',
            description:
                'We offer pricing like no other and ensure you receive exceptional value for every service.Our rates are designed to empower your business without breaking the bank.',
            icon: <DollarSign />,
        },
        {
            title: 'Expert team',
            description:
                'We have experienced professionals with diverse skill sets. With years of industry expertise, the team ensures delivering top-quality results with continuous learning.',
            icon: <UsersRound />,
        },
        {
            title: 'Customer centric approach',
            description:
                'We know every customer has unique needs. We actively listen to your feedback and continuously refine our services to ensure they align perfectly with your business goals.',
            icon: <IconHeart />,
        },
        {
            title: 'And everything else',
            description:
                'Customer satisfaction is our top priority. We do everything to satisfy our clients. It means if you work with us, your final delivery will satisfy you and help to grow your business.',
            icon: <BadgePlus />,
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="bg-gradient-to-b from-gray-100 to-gray-200 padding-x padding-y relative overflow-hidden">
            <div className="z-10 mb-6 md:mb-10 mx-auto max-w-5xl space-y-6">
                <h1 className="heading-one text-center !font-semibold">
                    Beyond Limits, Everything You Need and More
                </h1>
                <p className="description text-center">
                    Web Briks goes beyond the basics and delivers top-tier
                    services. From seamless execution to innovative solutions,
                    we ensure you have everything you need—and more.
                </p>
            </div>

            <div className="container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 rounded-xl bg-white/80 backdrop-blur-sm shadow"
                >
                    {features.map((feature, index) => (
                        <Feature
                            key={feature.title}
                            {...feature}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const Feature = ({ title, description, icon, index }) => {
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className={cn(
                'flex flex-col lg:border-r py-10 relative group/feature hover:bg-white/90 transition-all duration-300 rounded-xl',
                (index === 0 || index === 4) &&
                    'lg:border-l dark:border-neutral-800',
                index < 4 && 'lg:border-b dark:border-neutral-800'
            )}
        >
            {/* Gradient overlays */}
            {index < 4 ? (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-50/50 to-transparent pointer-events-none" />
            ) : (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none" />
            )}

            {/* Icon */}
            <motion.div
                variants={iconVariants}
                className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-orange-500 transition-colors duration-200"
            >
                {icon}
            </motion.div>

            {/* Title */}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <motion.div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center"
                    whilehover={{ scale: 1.2 }}
                />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 group-hover/feature:text-neutral-700">
                {description}
            </p>
        </motion.div>
    );
};
