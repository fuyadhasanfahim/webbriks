'use client';

import React, { useState } from 'react';
import {
    MapPin,
    Building2,
    ArrowRight,
    Search,
    Filter,
    Calendar,
    Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Function to generate slug from title
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};

const JobCard = ({
    title,
    company,
    location,
    datePosted,
    vacancies,
    hasLogo = false,
    index,
}) => {
    const [showArrow, setShowArrow] = useState(false);
    const jobSlug = generateSlug(title);

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
            onClick={() => (window.location.href = `/job/${jobSlug}`)}
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
                            <div className="w-6 h-6 bg-white rounded transform rotate-45 shadow-sm"></div>
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
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <motion.div
                                className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-flex items-center gap-1"
                                whileHover={{
                                    backgroundColor: '#FFF7ED',
                                    color: '#EA580C',
                                }}
                            >
                                <Calendar size={12} />
                                {datePosted}
                            </motion.div>

                            <motion.div
                                className="text-xs text-cyan-600 bg-cyan-50 rounded-full px-3 py-1"
                                whileHover={{ scale: 1.05 }}
                            >
                                /job/{jobSlug}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="text-right flex-shrink-0 flex flex-col items-end gap-4 ml-4">
                    <motion.div
                        className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 font-medium flex items-center gap-2"
                        whileHover={{ backgroundColor: '#F3F4F6', scale: 1.05 }}
                    >
                        <Calendar size={14} />
                        {datePosted}
                    </motion.div>

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

            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
        </motion.div>
    );
};

export default function JobListings() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLocation, setFilterLocation] = useState('All');
    const [filterDepartment, setFilterDepartment] = useState('All');

    const jobs = [
        {
            title: 'Content Marketing Executive (Junior)',
            company: 'Startise',
            location: 'Dhaka, Bangladesh',
            datePosted: '11 Oct, 2025',
            vacancies: '4',
            hasLogo: true,
            department: 'Marketing',
        },
        {
            title: 'Technical Support Engineer- WordPress (Roster Shift)',
            company: 'Startise',
            location: 'Dhaka, Bangladesh',
            datePosted: '30 Sep, 2025',
            vacancies: '1',
            hasLogo: true,
            department: 'Technical',
        },
        {
            title: 'Communication Executive',
            company: 'Startise',
            location: 'Mirpur DOHS, Bangladesh',
            datePosted: '11 Oct, 2025',
            vacancies: '1',
            hasLogo: false,
            department: 'Communication',
        },
        {
            title: 'Content Marketing Executive (Senior)',
            company: 'Startise',
            location: 'Dhaka, Bangladesh',
            datePosted: '11 Oct, 2025',
            vacancies: '2',
            hasLogo: false,
            department: 'Marketing',
        },
        {
            title: 'Copywriter',
            company: 'Startise',
            location: 'Mirpur DOHS, Bangladesh',
            datePosted: '11 Oct, 2025',
            vacancies: '2',
            hasLogo: false,
            department: 'Content',
        },
        {
            title: 'Paid Media Executive',
            company: 'Startise',
            location: 'Dhaka, Bangladesh',
            datePosted: '11 Oct, 2025',
            vacancies: '2',
            hasLogo: false,
            department: 'Marketing',
        },
    ];

    // Get unique locations and departments for filters
    const locations = ['All', ...new Set(jobs.map((job) => job.location))];
    const departments = ['All', ...new Set(jobs.map((job) => job.department))];

    // Filter jobs based on search and filters
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation =
            filterLocation === 'All' || job.location === filterLocation;
        const matchesDepartment =
            filterDepartment === 'All' || job.department === filterDepartment;

        return matchesSearch && matchesLocation && matchesDepartment;
    });

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
                                    {filteredJobs.length} Available Positions
                                    {searchTerm ||
                                    filterLocation !== 'All' ||
                                    filterDepartment !== 'All'
                                        ? ' (Filtered)'
                                        : ''}
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

                    {/* Animated Job Cards */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <JobCard
                                        key={index}
                                        {...job}
                                        index={index}
                                    />
                                ))
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

                    {/* Call to action */}
                    {filteredJobs.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: filteredJobs.length * 0.1 + 0.5,
                            }}
                            className="text-center py-12"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow:
                                        '0 20px 40px -10px rgba(234, 88, 12, 0.3)',
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">
                                    View More Opportunities
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
