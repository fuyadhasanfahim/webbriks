'use client';

import { motion } from 'framer-motion';

export default function loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFBF4]">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                }}
                className="text-6xl font-bold text-[#FFA726] mb-8"
            >
                <span className="inline-block animate-bounce">L</span>
                <span className="inline-block animate-bounce delay-100">O</span>
                <span className="inline-block animate-bounce delay-200">A</span>
                <span className="inline-block animate-bounce delay-300">D</span>
                <span className="inline-block animate-bounce delay-400">I</span>
                <span className="inline-block animate-bounce delay-500">N</span>
                <span className="inline-block animate-bounce delay-600">G</span>
            </motion.div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
                className="h-2 bg-[#FFA726] rounded-full w-1/2"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-8 text-black text-lg font-medium"
            >
                Please wait while we prepare your experience...
            </motion.p>
        </div>
    );
}
