'use client';

import React, { useEffect, useState } from 'react';
import {
    MapPin,
    Building2,
    Calendar,
    Users,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

const JobCard = ({ title, company, location, deadline, vacancies }) => {
    const safeTitle = slugify(title);

    return (
        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition p-6">
            <div className="flex items-center justify-between">
                {/* Left side */}
                <div className="flex flex-col gap-2">
                    <Link
                        href={`/job/${safeTitle}`}
                        className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition"
                    >
                        {title}
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <Building2 size={14} className="text-orange-500" />
                            {company}
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-blue-500" />
                            {location}
                        </span>
                    </div>
                </div>

                <div className="border h-full min-h-14" />

                <div className="flex flex-col items-end text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-gray-500" />
                        {deadline && format(deadline, 'PPP')}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users size={14} className="text-green-600" />
                        {vacancies} Vacancies
                    </span>
                </div>

                <div className="border h-full min-h-14" />

                <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default function JobListings() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 1,
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setIsLoading(true);

                const res = await fetch(
                    `/api/job/get-jobs?page=${pagination.page}&limit=${pagination.limit}`
                );

                if (!res.ok) throw new Error('Failed to fetch jobs');

                const data = await res.json();

                if (data.success) {
                    setJobs(data.jobs || []);
                    setPagination((prev) => ({
                        ...prev,
                        page: data.pagination.page,
                        limit: data.pagination.limit,
                        total: data.pagination.total,
                        totalPages: data.pagination.totalPages,
                    }));
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setJobs([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, [pagination.limit, pagination.page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setPagination((prev) => ({
                ...prev,
                page: newPage,
            }));
        }
    };

    const PaginationControls = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg"
        >
            <div className="text-sm text-gray-600">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)}{' '}
                of {pagination.total} jobs
            </div>

            <div className="flex items-center gap-2">
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#F3F4F6' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="p-2 rounded-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </motion.button>

                {Array.from(
                    { length: pagination.totalPages },
                    (_, i) => i + 1
                ).map((pageNum) => (
                    <motion.button
                        key={pageNum}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-2 rounded-xl font-medium ${
                            pagination.page === pageNum
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {pageNum}
                    </motion.button>
                ))}

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#F3F4F6' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.totalPages}
                    className="p-2 rounded-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} />
                </motion.button>
            </div>
        </motion.div>
    );

    return (
        <section className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-cyan-50/30 min-h-screen relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
                            Open Job Positions
                        </h1>
                    </motion.div>

                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 bg-white rounded-2xl shadow-lg"
                        >
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-gray-700">
                                Loading jobs...
                            </h3>
                        </motion.div>
                    ) : (
                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                {jobs.length > 0 ? (
                                    <>
                                        {jobs.map((job, index) => (
                                            <JobCard
                                                key={job._id || index}
                                                {...job}
                                            />
                                        ))}
                                        {pagination.totalPages > 1 && (
                                            <PaginationControls />
                                        )}
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12 bg-white rounded-2xl shadow-lg"
                                    >
                                        <h3 className="text-xl font-bold text-gray-700">
                                            No jobs found
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            Try again later
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
