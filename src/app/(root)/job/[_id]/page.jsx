'use client';

import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ApplyNowBtn from '@/components/job/ApplyNowBtn';

export default function JobDetailsPage({ params }) {
    const { _id } = params;

    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState({});

    const router = useRouter();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);

                const res = await fetch(`/api/job/get-job/${_id}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch job');
                }

                const data = await res.json();

                if (data.success) {
                    setJob(data.job || null);
                } else {
                    setJob(null);
                }
            } catch (error) {
                console.error('Error fetching job:', error);
                setJob(null);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [_id, setJob]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                <span className="ml-3 text-gray-600 font-medium">
                    Loading job details...
                </span>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Job Not Found
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                        Go back to jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex-1 mb-8 md:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1757952280/dswndmppltiswsqvxd7v.png"
                                    alt="Hiring Illustration"
                                    width={320}
                                    height={256}
                                />
                            </motion.div>
                        </div>
                        <div className="flex-1 text-center md:text-right">
                            <motion.h1
                                className="text-white text-4xl font-bold mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                We&apos;re Hiring
                            </motion.h1>
                            <motion.h2
                                className="text-white text-3xl font-bold mb-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {job?.title || 'Untitled Job'}
                            </motion.h2>
                            <motion.div
                                className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded"></div>
                                <span className="font-bold text-gray-800">
                                    {job?.company || 'Company Name'}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-4 group"
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft
                        size={20}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Jobs
                </motion.button>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-lg p-6 shadow-sm border sticky top-6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">
                                        {job?.company?.charAt(0) || 'C'}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        {job?.company || 'Company Name'}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {job?.location || 'Location'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Job Title
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.title}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Experience
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.experience || 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Vacancies
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.vacancies || 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Salary
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.salary || 'Negotiable'}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Office time
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.employmentStatus || 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Location
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.location || 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Job Type
                                    </label>
                                    <p className="text-gray-900">
                                        Permanent{' '}
                                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs ml-2">
                                            {job?.workplace || 'Office'}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Deadline
                                    </label>
                                    <p className="text-gray-900">
                                        {job?.datePosted || 'N/A'}
                                    </p>
                                </div>

                                {job?.notes && (
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">
                                            Notes
                                        </label>
                                        <p className="text-gray-900">
                                            {job.notes}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <ApplyNowBtn job={job} />
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white rounded-lg p-8 shadow-sm border"
                        >
                            {/* Responsibilities */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">👨‍💼</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        As{' '}
                                        {job?.title?.split('(')[0] ||
                                            'Employee'}
                                        , You Will:
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {job?.responsibilities?.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-orange-500 mt-2">
                                                    •
                                                </span>
                                                <span className="text-gray-700">
                                                    {item}
                                                </span>
                                            </li>
                                        )
                                    ) || <p>No responsibilities listed.</p>}
                                </ul>
                            </div>

                            {/* Skills & Experience */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">💡</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Skills & Experience That You Should
                                        Have:
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {job?.requirements?.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-orange-500 mt-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                {item}
                                            </span>
                                        </li>
                                    )) || <p>No requirements listed.</p>}
                                </ul>
                            </div>

                            {/* Benefits */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">🎁</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Benefits
                                    </h2>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-4">
                                    Perks & Benefits That You Will Get:
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {job?.compensation?.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-orange-500 mt-1">
                                                •
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    )) || <p>No benefits listed.</p>}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
