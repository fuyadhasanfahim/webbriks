'use client';

import React, { useState } from 'react';

export default function CallToActionForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        budgetRange: '',
        hearUs: '',
        projectDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="bg-white rounded-xl flex-1 flex-grow flex-shrink basis-0 mb-6 p-4 sm:p-6 md:p-10 w-full lg:max-w-xl xl:max-w-2xl">
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="MVP Contact Form"
            >
                {/* Full Name */}
                <div className="flex flex-col">
                    <label
                        htmlFor="fullName"
                        className="text-black font-medium text-lg md:text-xl"
                    >
                        Full Name
                    </label>
                    <input
                        className="border-b-2 border-black bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none focus:border-black w-full"
                        maxLength="256"
                        name="fullName"
                        placeholder="Enter your full name"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Company Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="companyName"
                            className="text-black font-medium text-lg md:text-xl"
                        >
                            Company name
                        </label>
                        <input
                            className="border-b-2 border-black bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none focus:border-black w-full"
                            maxLength="256"
                            name="Enter your company name"
                            placeholder="Ex. Tesla Inc"
                            type="text"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-black font-medium text-lg md:text-xl"
                        >
                            Email*
                        </label>
                        <input
                            className="border-b-2 border-black bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none focus:border-black w-full"
                            maxLength="256"
                            name="email"
                            placeholder="Enter your email address"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Budget and Source */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        {/* <label
                            htmlFor="budgetRange"
                            className="text-black font-medium text-lg md:text-xl"
                        >
                            Service You Need*
                        </label> */}
                        <select
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleChange}
                            className="border-b-2 border-black bg-transparent h-11 text-lg md:text-xl leading-8 w-full"
                            required
                        >
                            <option value="">Select Your Service*</option>
                            <option value="photo-editing">Photo Editing</option>
                            <option value="web-design-&-development">
                                Web Design & Development
                            </option>
                            <option value="video-editing">Video Editing</option>
                            <option value="lead-generation">
                                Lead Generation
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        {/* <label
                            htmlFor="hearUs"
                            className="text-black font-medium text-lg md:text-xl"
                        >
                            How did you find us*
                        </label> */}
                        <select
                            name="hearUs"
                            value={formData.hearUs}
                            onChange={handleChange}
                            className="border-b-2 border-black bg-transparent h-11 text-lg md:text-xl leading-8 w-full"
                            required
                        >
                            <option value=""> How did you find us*</option>
                            <option value="Google">Google</option>
                            <option value="Bing">Bing</option>
                            <option value="Dribbble">Dribbble</option>
                            <option value="Behance">Behance</option>
                            <option value="Clutch">Clutch</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twitter">Twitter / X</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Youtube">Youtube</option>
                            <option value="Tiktok">Tiktok</option>
                            <option value="Referral">Referral</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col">
                    <label
                        htmlFor="projectDetails"
                        className="text-black font-medium text-lg md:text-xl"
                    >
                        Project details*
                    </label>
                    <textarea
                        name="projectDetails"
                        maxLength="5000"
                        placeholder="Tell us more about your idea"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="border-b-2 border-black bg-transparent min-h-20 h-auto mb-6 text-lg md:text-xl leading-8 focus:outline-none focus:border-black w-full"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <input
                        type="submit"
                        className="bg-black rounded-full py-3 px-8 md:py-4 md:px-12 text-white text-base md:text-lg font-medium cursor-pointer hover:bg-gray-800"
                        value="Send inquiry"
                    />
                </div>
            </form>
        </div>
    );
}
