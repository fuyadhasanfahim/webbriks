'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Upload,
    Plus,
    Trash2,
    Calendar,
    FileText,
    User,
    Mail,
    Phone,
    Briefcase,
    Send,
    AlertCircle,
    Link,
    Facebook,
    Linkedin,
    CheckCircle,
    XIcon,
} from 'lucide-react';
import { toast } from 'react-toastify';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function ApplyNowBtn({ job }) {
    const [hasExperience, setHasExperience] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cv: null,
        coverLetter: '',
        portfolioUrl: '',
        facebook: '',
        linkedin: '',
        experiences: [
            {
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                currentlyWorking: false,
                description: '',
            },
        ],
    });

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cv: null,
            coverLetter: '',
            portfolioUrl: '',
            facebook: '',
            linkedin: '',
            experiences: [
                {
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false,
                    description: '',
                },
            ],
        });
        setHasExperience(null);
        setIsSubmitting(false);
    };

    const closeModal = () => {
        document.getElementById('apply-modal').close();
        resetForm();
    };

    const openModal = () => {
        document.getElementById('success-modal').showModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleExperienceChange = (index, e) => {
        const { name, value, type, checked } = e.target;
        const updatedExperiences = [...formData.experiences];

        if (type === 'checkbox') {
            updatedExperiences[index][name] = checked;
            if (name === 'currentlyWorking' && checked) {
                updatedExperiences[index].endDate = '';
            }
        } else {
            updatedExperiences[index][name] = value;
        }

        setFormData((prev) => ({
            ...prev,
            experiences: updatedExperiences,
        }));
    };

    const addExperience = () => {
        setFormData((prev) => ({
            ...prev,
            experiences: [
                ...prev.experiences,
                {
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false,
                    description: '',
                },
            ],
        }));
    };

    const removeExperience = (index) => {
        if (formData.experiences.length === 1) return;

        setFormData((prev) => ({
            ...prev,
            experiences: prev.experiences.filter((_, i) => i !== index),
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (
            file &&
            (file.type === 'application/pdf' ||
                file.type === 'application/msword' ||
                file.type ===
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        ) {
            setFormData((prev) => ({
                ...prev,
                cv: file,
            }));
        } else {
            toast.error('Please upload a PDF or Word document only.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            const submitData = new FormData();

            submitData.append('firstName', formData.firstName);
            submitData.append('lastName', formData.lastName);
            submitData.append('email', formData.email);
            submitData.append('phone', formData.phone);
            submitData.append('jobId', job._id);
            submitData.append('jobTitle', job.title);
            submitData.append('company', job.company);
            submitData.append('hasExperience', hasExperience);
            submitData.append('coverLetter', formData.coverLetter || '');
            submitData.append('portfolioUrl', formData.portfolioUrl || '');
            submitData.append('facebook', formData.facebook || '');
            submitData.append('linkedin', formData.linkedin || '');

            if (!formData.cv) {
                toast.error('Upload your CV. This is required.');
                setIsSubmitting(false);
                return;
            }

            if (formData.cv) {
                submitData.append('cv', formData.cv);
            }

            if (
                hasExperience &&
                formData.experiences &&
                formData.experiences.length > 0
            ) {
                const validExperiences = formData.experiences.filter(
                    (exp) =>
                        exp.company?.trim() &&
                        exp.position?.trim() &&
                        exp.startDate
                );

                submitData.append(
                    'experiences',
                    JSON.stringify(validExperiences)
                );
            }

            const response = await fetch('/api/job/new-job-application', {
                method: 'POST',
                body: submitData,
            });

            const result = await response.json();

            if (!response.ok) {
                toast.error(
                    result.message || 'Something went wrong. Try again later.'
                );
                return;
            }

            toast.success('Application submitted successfully!');
            closeModal();
            openModal();
        } catch (error) {
            toast.error(
                error.message || 'Something went wrong. Try again later.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleExperienceSelection = (hasExp) => {
        setHasExperience(hasExp);
        if (!hasExp) {
            setFormData((prev) => ({
                ...prev,
                experiences: [
                    {
                        company: '',
                        position: '',
                        startDate: '',
                        endDate: '',
                        currentlyWorking: false,
                        description: '',
                    },
                ],
            }));
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div>
            <motion.button
                whileHover={{
                    scale: 1,
                    boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 rounded-md transition-all duration-300 shadow-md"
                onClick={() =>
                    document.getElementById('apply-modal').showModal()
                }
            >
                Apply Now
            </motion.button>

            <dialog id="apply-modal" className="modal">
                <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white rounded-t-2xl">
                        <div className="flex justify-between items-center">
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="font-bold text-2xl"
                            >
                                Apply for {job.title}
                            </motion.h3>
                            <motion.button
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeModal}
                                className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-0"
                            >
                                <X size={20} />
                            </motion.button>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-2 text-orange-100"
                        >
                            Join the {job.company} team
                        </motion.p>
                    </div>

                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            {hasExperience === null ? (
                                <motion.div
                                    key="experience-question"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Briefcase
                                            className="text-orange-500"
                                            size={28}
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold mb-6 text-gray-800">
                                        Do you have relevant work experience?
                                    </h4>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow:
                                                    '0 5px 15px -3px rgba(0, 0, 0, 0.1)',
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                handleExperienceSelection(true)
                                            }
                                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-md"
                                        >
                                            Yes, I have experience
                                        </motion.button>
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow:
                                                    '0 5px 15px -3px rgba(0, 0, 0, 0.1)',
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                handleExperienceSelection(false)
                                            }
                                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-8 py-3 rounded-xl transition-colors border border-gray-200"
                                        >
                                            No experience
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="application-form"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Personal Information */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name *
                                            </label>
                                            <div className="relative">
                                                <User
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name *
                                            </label>
                                            <div className="relative">
                                                <User
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <Mail
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <div className="relative">
                                                <Phone
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Social Links */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Facebook (Optional)
                                            </label>
                                            <div className="relative">
                                                <Facebook
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="url"
                                                    name="facebook"
                                                    value={formData.facebook}
                                                    onChange={handleInputChange}
                                                    placeholder="https://facebook.com/yourprofile"
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                LinkedIn (Optional)
                                            </label>
                                            <div className="relative">
                                                <Linkedin
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                    size={18}
                                                />
                                                <input
                                                    type="url"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleInputChange}
                                                    placeholder="https://linkedin.com/in/yourprofile"
                                                    className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Portfolio URL */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Portfolio URL (Optional)
                                        </label>
                                        <div className="relative">
                                            <Link
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                size={18}
                                            />
                                            <input
                                                type="url"
                                                name="portfolioUrl"
                                                value={formData.portfolioUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://yourportfolio.com"
                                                className="pl-10 input input-bordered w-full rounded-xl py-3.5"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* CV Upload */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload CV (PDF or Word) *
                                        </label>
                                        <motion.label
                                            whileHover={{
                                                scale: isSubmitting ? 1 : 1.01,
                                            }}
                                            className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl transition-all duration-300 bg-gray-50 hover:bg-orange-50/50 ${
                                                isSubmitting
                                                    ? 'cursor-not-allowed opacity-50'
                                                    : 'cursor-pointer hover:border-orange-500'
                                            }`}
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                {formData.cv ? (
                                                    <>
                                                        <FileText
                                                            className="text-orange-500 mb-2"
                                                            size={32}
                                                        />
                                                        <p className="text-sm font-medium text-gray-700">
                                                            {formData.cv.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {isSubmitting
                                                                ? 'Uploading...'
                                                                : 'Click to change file'}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Upload
                                                            className="text-gray-400 mb-2"
                                                            size={32}
                                                        />
                                                        <p className="text-sm text-gray-500">
                                                            <span className="font-medium text-orange-500">
                                                                Click to upload
                                                            </span>{' '}
                                                            or drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            PDF, DOC, DOCX (MAX.
                                                            5MB)
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </motion.label>
                                    </motion.div>

                                    {/* Work Experience Section */}
                                    {hasExperience && (
                                        <motion.div
                                            variants={itemVariants}
                                            className="border-t pt-6"
                                        >
                                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                                                <Calendar
                                                    className="text-orange-500"
                                                    size={22}
                                                />
                                                Work Experience
                                            </h4>

                                            {formData.experiences.map(
                                                (exp, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        className="bg-orange-50/30 p-5 rounded-2xl mb-4 relative border border-orange-100"
                                                    >
                                                        {formData.experiences
                                                            .length > 1 && (
                                                            <motion.button
                                                                whileHover={{
                                                                    scale: isSubmitting
                                                                        ? 1
                                                                        : 1.1,
                                                                    color: isSubmitting
                                                                        ? undefined
                                                                        : '#dc2626',
                                                                }}
                                                                whileTap={{
                                                                    scale: isSubmitting
                                                                        ? 1
                                                                        : 0.9,
                                                                }}
                                                                type="button"
                                                                onClick={() =>
                                                                    removeExperience(
                                                                        index
                                                                    )
                                                                }
                                                                className="absolute top-4 right-4 text-orange-500 hover:text-orange-700 bg-white p-1.5 rounded-full shadow-sm"
                                                                disabled={
                                                                    isSubmitting
                                                                }
                                                            >
                                                                <Trash2
                                                                    size={16}
                                                                />
                                                            </motion.button>
                                                        )}

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                    Company Name
                                                                    *
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="company"
                                                                    value={
                                                                        exp.company
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleExperienceChange(
                                                                            index,
                                                                            e
                                                                        )
                                                                    }
                                                                    className="input input-bordered w-full rounded-xl py-3"
                                                                    required
                                                                    disabled={
                                                                        isSubmitting
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                    Position *
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="position"
                                                                    value={
                                                                        exp.position
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleExperienceChange(
                                                                            index,
                                                                            e
                                                                        )
                                                                    }
                                                                    className="input input-bordered w-full rounded-xl py-3"
                                                                    required
                                                                    disabled={
                                                                        isSubmitting
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                            {/* Start Date */}
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                    Start Date *
                                                                </label>
                                                                <div className="dropdown w-full">
                                                                    <label
                                                                        tabIndex={
                                                                            0
                                                                        }
                                                                        className="input input-bordered w-full rounded-xl py-3 flex justify-between items-center cursor-pointer"
                                                                    >
                                                                        <span>
                                                                            {exp.startDate
                                                                                ? format(
                                                                                      exp.startDate,
                                                                                      'PPP'
                                                                                  )
                                                                                : 'Select start date'}
                                                                        </span>
                                                                        <Calendar className="w-4 h-4 opacity-70" />
                                                                    </label>
                                                                    <div
                                                                        tabIndex={
                                                                            0
                                                                        }
                                                                        className="dropdown-content z-[999] bg-white shadow-xl rounded-xl p-2 border mt-1"
                                                                    >
                                                                        <DayPicker
                                                                            mode="single"
                                                                            selected={
                                                                                exp.startDate
                                                                                    ? new Date(
                                                                                          exp.startDate
                                                                                      )
                                                                                    : undefined
                                                                            }
                                                                            onSelect={(
                                                                                date
                                                                            ) =>
                                                                                handleExperienceChange(
                                                                                    index,
                                                                                    {
                                                                                        target: {
                                                                                            name: 'startDate',
                                                                                            value: date,
                                                                                        },
                                                                                    }
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* End Date */}
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                    End Date
                                                                </label>
                                                                <div className="dropdown w-full">
                                                                    <label
                                                                        tabIndex={
                                                                            0
                                                                        }
                                                                        className="input input-bordered w-full rounded-xl py-3 flex justify-between items-center cursor-pointer disabled:opacity-50"
                                                                    >
                                                                        <span>
                                                                            {exp.endDate
                                                                                ? format(
                                                                                      exp.endDate,
                                                                                      'PPP'
                                                                                  )
                                                                                : 'Select end date'}
                                                                        </span>
                                                                        <Calendar className="w-4 h-4 opacity-70" />
                                                                    </label>
                                                                    {!exp.currentlyWorking && (
                                                                        <div
                                                                            tabIndex={
                                                                                0
                                                                            }
                                                                            className="dropdown-content z-[999] bg-white shadow-xl rounded-xl p-2 border mt-1"
                                                                        >
                                                                            <DayPicker
                                                                                mode="single"
                                                                                selected={
                                                                                    exp.endDate
                                                                                        ? new Date(
                                                                                              exp.endDate
                                                                                          )
                                                                                        : undefined
                                                                                }
                                                                                onSelect={(
                                                                                    date
                                                                                ) =>
                                                                                    handleExperienceChange(
                                                                                        index,
                                                                                        {
                                                                                            target: {
                                                                                                name: 'endDate',
                                                                                                value: date,
                                                                                            },
                                                                                        }
                                                                                    )
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Checkbox */}
                                                                <label className="flex items-center gap-2 mt-3 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="currentlyWorking"
                                                                        checked={
                                                                            exp.currentlyWorking
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleExperienceChange(
                                                                                index,
                                                                                e
                                                                            )
                                                                        }
                                                                        className="checkbox checkbox-sm checkbox-warning"
                                                                        disabled={
                                                                            isSubmitting
                                                                        }
                                                                    />
                                                                    <span className="text-sm text-gray-700">
                                                                        I
                                                                        currently
                                                                        work
                                                                        here
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                Job Description
                                                            </label>
                                                            <textarea
                                                                name="description"
                                                                value={
                                                                    exp.description
                                                                }
                                                                onChange={(e) =>
                                                                    handleExperienceChange(
                                                                        index,
                                                                        e
                                                                    )
                                                                }
                                                                className="textarea textarea-bordered w-full rounded-xl"
                                                                rows={3}
                                                                placeholder="Describe your responsibilities and achievements..."
                                                                disabled={
                                                                    isSubmitting
                                                                }
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )
                                            )}

                                            <motion.button
                                                type="button"
                                                onClick={addExperience}
                                                whileHover={{
                                                    scale: isSubmitting
                                                        ? 1
                                                        : 1.05,
                                                }}
                                                whileTap={{
                                                    scale: isSubmitting
                                                        ? 1
                                                        : 0.95,
                                                }}
                                                className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white flex items-center gap-2 rounded-xl"
                                                disabled={isSubmitting}
                                            >
                                                <Plus size={16} />
                                                Add Another Experience
                                            </motion.button>
                                        </motion.div>
                                    )}

                                    {/* Cover Letter */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Cover Letter (Optional)
                                        </label>
                                        <textarea
                                            name="coverLetter"
                                            value={formData.coverLetter}
                                            onChange={handleInputChange}
                                            className="textarea textarea-bordered w-full rounded-xl"
                                            rows={4}
                                            placeholder="Why are you interested in this position? What makes you a good fit?"
                                            disabled={isSubmitting}
                                        />
                                    </motion.div>

                                    {/* Terms and Submit */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="border-t pt-6"
                                    >
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="checkbox checkbox-warning"
                                                required
                                                disabled={isSubmitting}
                                            />
                                            <span className="text-sm text-gray-700">
                                                I agree to the terms and
                                                conditions
                                            </span>
                                        </label>

                                        <div className="flex gap-4 mt-6">
                                            <motion.button
                                                type="button"
                                                onClick={closeModal}
                                                whileHover={{
                                                    scale: isSubmitting
                                                        ? 1
                                                        : 1.02,
                                                }}
                                                whileTap={{
                                                    scale: isSubmitting
                                                        ? 1
                                                        : 0.98,
                                                }}
                                                className="btn btn-outline border-gray-300 hover:border-gray-400 text-gray-700 flex-1 rounded-xl"
                                                disabled={isSubmitting}
                                            >
                                                Cancel
                                            </motion.button>
                                            <motion.button
                                                type="submit"
                                                whileHover={
                                                    isSubmitting
                                                        ? {}
                                                        : {
                                                              scale: 1.02,
                                                              boxShadow:
                                                                  '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
                                                          }
                                                }
                                                whileTap={{
                                                    scale: isSubmitting
                                                        ? 1
                                                        : 0.98,
                                                }}
                                                className={`btn border-0 text-white flex-1 rounded-xl flex items-center gap-2 ${
                                                    isSubmitting
                                                        ? 'bg-gray-400 cursor-not-allowed'
                                                        : 'bg-orange-500 hover:bg-orange-600'
                                                }`}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="loading loading-spinner loading-sm"></span>
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={18} />
                                                        Submit Application
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Click outside to close */}
                <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>

            <dialog id="success-modal" className="modal">
                <div className="modal-box text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                        Application Submitted Successfully
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Thank you for applying! We’ve received your application.
                        An email has been sent to you with a secure link where
                        you can track the status of your application.
                    </p>
                    <p className="text-sm text-gray-500">
                        Please check your inbox (and spam folder) for the
                        confirmation email.
                    </p>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <XIcon />
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
