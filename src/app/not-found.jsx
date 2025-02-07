'use client';

import { motion } from 'framer-motion';

export default function NotFound() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delay: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-[#FFFBF4] flex flex-col items-center justify-center p-6"
        >
            <motion.h1
                variants={itemVariants}
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-9xl font-black text-orange-500 drop-shadow-lg"
            >
                404
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                Uh-oh!
            </motion.p>

            <motion.p
                variants={itemVariants}
                className="mt-4 text-gray-500 text-center"
            >
                {`The page you're looking for doesn't exist or has been moved.`}
            </motion.p>

            <motion.a
                href="/"
                variants={itemVariants}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block rounded bg-orange-600 px-5 py-3 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring transition-all duration-300"
            >
                Go Back Home
            </motion.a>
        </motion.div>
    );
}
