'use client';

import { cn } from '@/lib/utils';
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function Featured() {
    const features = [
        {
            title: 'Built for developers',
            description:
                'Built for engineers, developers, dreamers, thinkers and doers.',
            icon: <IconTerminal2 />,
        },
        {
            title: 'Ease of use',
            description:
                "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <IconEaseInOut />,
        },
        {
            title: 'Pricing like no other',
            description:
                'Our prices are best in the market. No cap, no lock, no credit card required.',
            icon: <IconCurrencyDollar />,
        },
        {
            title: '100% Uptime guarantee',
            description: 'We just cannot be taken down by anyone.',
            icon: <IconCloud />,
        },
        {
            title: 'Multi-tenant Architecture',
            description:
                'You can simply share passwords instead of buying new seats',
            icon: <IconRouteAltLeft />,
        },
        {
            title: '24/7 Customer Support',
            description:
                'We are available a 100% of the time. Atleast our AI Agents are.',
            icon: <IconHelp />,
        },
        {
            title: 'Money back guarantee',
            description:
                'If you donot like EveryAI, we will convince you to like us.',
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: 'And everything else',
            description:
                'I just ran out of copy ideas. Accept my sincere apologies',
            icon: <IconHeart />,
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
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_70%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full filter blur-3xl opacity-30" />

            <div className="container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 rounded-xl bg-white/80 backdrop-blur-sm shadow"
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
                    whileHover={{ scale: 1.2 }}
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
