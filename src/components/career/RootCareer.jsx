'use client';

import React, { useEffect, useState } from 'react';
import {
    MapPin,
    Building2,
    ArrowRight,
    Calendar,
    Users,
    NotepadText,
    Paperclip,
    ChevronLeft,
    ChevronRight,
    Search,
    Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JobCard = ({
    _id,
    title,
    company,
    location,
    datePosted,
    vacancies,
    hasLogo = false,
    index,
    notes,
    salary,
    employmentStatus,
}) => {
    const [showArrow, setShowArrow] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 },
            }}
            className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
            onClick={() => (window.location.href = `/job/${_id}`)}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-start justify-between relative z-10">
                <div className="flex items-start gap-4 flex-1">
                    {hasLogo ? (
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl p-3 flex-shrink-0 shadow-lg"
                        >
                            <Paperclip
                                strokeWidth={2}
                                className="p-1 bg-white rounded shadow-sm"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl p-3 flex-shrink-0 shadow-lg"
                        >
                            <Building2 size={20} className="text-white" />
                        </motion.div>
                    )}
                    <div className="flex-1 min-w-0">
                        <motion.h3
                            className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                        >
                            {title}
                        </motion.h3>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-orange-100 rounded-full p-1">
                                    <Building2
                                        size={12}
                                        className="text-orange-600"
                                    />
                                </div>
                                <span className="font-medium">{company}</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-blue-100 rounded-full p-1">
                                    <MapPin
                                        size={12}
                                        className="text-blue-600"
                                    />
                                </div>
                                <span>{location}</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-green-100 rounded-full p-1">
                                    <Users
                                        size={12}
                                        className="text-green-600"
                                    />
                                </div>
                                <span>{vacancies} Openings</span>
                            </motion.div>
                            {notes && (
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="bg-green-100 rounded-full p-1">
                                        <NotepadText
                                            size={12}
                                            className="text-cyan-600"
                                        />
                                    </div>
                                    <span>{notes}</span>
                                </motion.div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {salary && (
                                <motion.div
                                    className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-flex items-center gap-1"
                                    whileHover={{
                                        backgroundColor: '#FFF7ED',
                                        color: '#EA580C',
                                    }}
                                >
                                    <Calendar size={12} />
                                    {salary}
                                </motion.div>
                            )}
                            {employmentStatus && (
                                <motion.div
                                    className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-flex items-center gap-1"
                                    whileHover={{
                                        backgroundColor: '#FFF7ED',
                                        color: '#EA580C',
                                    }}
                                >
                                    <Calendar size={12} />
                                    {employmentStatus}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-right flex-shrink-0 flex flex-col items-end gap-4 ml-4">
                    {datePosted && (
                        <motion.div
                            className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 font-medium flex items-center gap-2"
                            whileHover={{
                                backgroundColor: '#F3F4F6',
                                scale: 1.05,
                            }}
                        >
                            <Calendar size={14} />
                            {new Date(datePosted).toLocaleDateString()}
                        </motion.div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <button className="text-gray-500 bg-gray-100 px-6 py-2.5 rounded-xl font-semibold relative">
                            Details
                        </button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#EA580C',
                                boxShadow:
                                    '0 10px 25px -5px rgba(234, 88, 12, 0.4)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-semibold relative overflow-hidden group/btn flex items-center gap-2 min-w-[100px]"
                        >
                            <span className="relative z-10">Apply</span>
                            <ArrowRight
                                size={16}
                                className={`transition-all duration-300 ${
                                    showArrow
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-2 opacity-0'
                                }`}
                            />

                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
        </motion.div>
    );
};

export default function JobListings() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalJobs: 0,
        hasNext: false,
        hasPrev: false,
    });
    const [filters, setFilters] = useState({
        search: '',
        page: 1,
        limit: 10,
        sort: 'createdAt',
        sortOrder: 'desc',
    });

    const fetchJobs = async () => {
        try {
            setIsLoading(true);

            // Build query string
            const queryParams = new URLSearchParams();
            Object.entries(filters).forEach(([key, value]) => {
                if (value) queryParams.append(key, value.toString());
            });

            const res = await fetch(`/api/job/get-jobs?${queryParams}`);

            if (!res.ok) {
                throw new Error('Failed to fetch jobs');
            }

            const data = await res.json();

            console.log(data);

            if (data.success) {
                setJobs(data.jobs || []);
                setPagination(
                    data.pagination || {
                        currentPage: 1,
                        totalPages: 1,
                        totalJobs: 0,
                        hasNext: false,
                        hasPrev: false,
                    }
                );
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setJobs([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const handleSearch = (e) => {
        setFilters((prev) => ({
            ...prev,
            search: e.target.value,
            page: 1, // Reset to first page on new search
        }));
    };

    const handlePageChange = (newPage) => {
        setFilters((prev) => ({
            ...prev,
            page: newPage,
        }));
    };

    const handleSortChange = (sortField, sortOrder) => {
        setFilters((prev) => ({
            ...prev,
            sort: sortField,
            sortOrder: sortOrder,
            page: 1,
        }));
    };

    const PaginationControls = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg"
        >
            <div className="text-sm text-gray-600">
                Showing {(filters.page - 1) * filters.limit + 1} to{' '}
                {Math.min(filters.page * filters.limit, pagination.total)} of{' '}
                {pagination.total} jobs
            </div>

            <div className="flex items-center gap-2">
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#F3F4F6' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={!pagination.hasPrev}
                    className="p-2 rounded-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </motion.button>

                {Array.from(
                    { length: Math.min(5, pagination.totalPages) },
                    (_, i) => {
                        const pageNum = i + 1;
                        return (
                            <motion.button
                                key={pageNum}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePageChange(pageNum)}
                                className={`px-3 py-2 rounded-xl font-medium ${
                                    filters.page === pageNum
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {pageNum}
                            </motion.button>
                        );
                    }
                )}

                {pagination.totalPages > 5 && (
                    <span className="px-2 text-gray-500">...</span>
                )}

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#F3F4F6' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={!pagination.hasNext}
                    className="p-2 rounded-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} />
                </motion.button>
            </div>
        </motion.div>
    );

    const SearchAndFilter = () => (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-6"
        >
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search jobs by title, company, or location..."
                        value={filters.search}
                        onChange={handleSearch}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>

                <div className="flex gap-2">
                    <motion.select
                        whileHover={{ scale: 1.02 }}
                        onChange={(e) =>
                            handleSortChange('createdAt', e.target.value)
                        }
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </motion.select>

                    <motion.select
                        whileHover={{ scale: 1.02 }}
                        onChange={(e) =>
                            handleSortChange('title', e.target.value)
                        }
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="">Sort by Title</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </motion.select>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-cyan-50/30 min-h-screen relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
                <div className="space-y-8">
                    {/* Animated Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-4 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-white relative z-10"
                            >
                                <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zM8 8v10h8V8H8zm2-4v2h4V4h-4z" />
                            </svg>
                        </motion.div>

                        <div>
                            <motion.h1
                                className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                            >
                                Open Job Positions
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-600 mt-2"
                            >
                                Discover amazing career opportunities
                            </motion.p>
                        </div>
                    </motion.div>

                    <SearchAndFilter />

                    {/* Animated Job Counter */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    {pagination.totalJobs} Available Positions
                                </motion.h2>
                                <p className="text-gray-600">
                                    Join our growing team
                                </p>
                            </div>
                            <motion.div
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="text-4xl"
                            >
                                🚀
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Loading State */}
                    {isLoading && (
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
                    )}

                    {/* Animated Job Cards */}
                    {!isLoading && (
                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                {jobs.length > 0 ? (
                                    <>
                                        {jobs.map((job, index) => (
                                            <JobCard
                                                key={job._id || index}
                                                {...job}
                                                index={index}
                                            />
                                        ))}
                                        <PaginationControls />
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12 bg-white rounded-2xl shadow-lg"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                            className="text-6xl mb-4"
                                        >
                                            🔍
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-700">
                                            No jobs found
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            Try adjusting your search or filters
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
