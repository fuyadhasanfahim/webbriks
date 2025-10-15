'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function TrialForm() {
    const { register, handleSubmit, reset, formState } = useForm();
    const [files, setFiles] = useState([]);
    const router = useRouter();

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files || []);
        setFiles(selectedFiles.slice(0, 3));
    };

    const handleFileRemove = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone || '');
            formData.append('website', data.website || '');
            formData.append('message', data.message);
            formData.append('driveLink', data.driveLink || '');

            files.forEach((file) => {
                formData.append('files', file);
            });

            if (files.length === 0 && !data.driveLink?.trim()) {
                toast.error('Please upload a file or enter a drive link.');
                return;
            }

            const res = await fetch('/api/get-sels-free-trial', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            if (result.success) {
                reset();
                toast.success('Successfully submitted the form.');
                router.push('/free-trial-submitted');
            } else {
                toast.error('Something went wrong!');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-100" id="trial-form">
            <h3 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6">
                <span className="text-orange-500 capitalize">Free Trial</span>
            </h3>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="free-trial-form"
                        className="space-y-6"
                    >
                        {/* File Upload Section */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload your files
                                <span className="text-gray-500 ml-1">
                                    (max 3 files)
                                </span>
                            </label>
                            <div className="w-full h-40 p-4 border-dashed border-2 border-orange-300 rounded-lg flex flex-col justify-center items-center text-center bg-gray-50 hover:bg-gray-100 transition-colors relative">
                                <input
                                    type="file"
                                    multiple
                                    accept=".png, .jpg, .jpeg, .gif, .zip"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                        />
                                    </svg>

                                    <p className="text-orange-600 font-semibold">
                                        Click to upload files
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        or drag and drop here
                                    </p>
                                    <p className="text-gray-400 text-xs mt-2">
                                        Supported formats: PNG, JPG, JPEG, GIF,
                                        ZIP
                                    </p>
                                </div>
                            </div>

                            {files.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200"
                                        >
                                            <span className="text-gray-700 truncate max-w-xs">
                                                {file.name}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleFileRemove(index)
                                                }
                                                className="text-red-500 hover:text-red-700 transition-colors p-1"
                                                aria-label="Remove file"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Drive Link Alternative */}
                        <div>
                            <label
                                htmlFor="driveLink"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Or provide a cloud storage link
                                <span className="text-gray-500 ml-1">
                                    (optional)
                                </span>
                            </label>
                            <input
                                type="url"
                                id="driveLink"
                                {...register('driveLink')}
                                placeholder="Google Drive / Dropbox / OneDrive link"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        <div className="border-t border-gray-200 my-6"></div>

                        {/* Personal Information */}
                        <h3 className="text-xl font-semibold text-gray-800">
                            Your Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Full Name{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', { required: true })}
                                    placeholder="John Doe"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                    placeholder="your@email.com"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Phone Number
                                    <span className="text-gray-500 ml-1">
                                        (optional)
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    {...register('phone')}
                                    placeholder="+1 (123) 456-7890"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Website
                                    <span className="text-gray-500 ml-1">
                                        (optional)
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    {...register('website')}
                                    placeholder="https://yourwebsite.com"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Instructions{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                {...register('message', { required: true })}
                                placeholder="Please describe what you need done with your images..."
                                rows={4}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={formState.isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
                                    formState.isSubmitting
                                        ? 'bg-orange-400 cursor-not-allowed'
                                        : 'bg-orange-500 hover:bg-orange-600'
                                } flex items-center justify-center space-x-2`}
                            >
                                {formState.isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    'Submit Free Trial Request'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
