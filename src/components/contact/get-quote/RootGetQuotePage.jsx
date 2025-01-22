'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function RootGetQuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        services: {
            graphicsDesign: false,
            photoEditing: false,
            webDevelopment: false,
            virtualAssistant: false,
            videoEditing: false,
            digitalMarketing: false,
        },
        files: [],
        driveLink: '',
        fullName: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const handleCheckboxChange = (service) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            services: {
                ...prevFormData.services,
                [service]: !prevFormData.services[service],
            },
        }));
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        const allFiles = [...formData.files, ...newFiles];
        const validFiles = allFiles.filter(
            (file) =>
                (file.size <= 10485760 &&
                    /image\/(png|jpeg|gif)/.test(file.type)) ||
                file.type === 'application/zip'
        );

        if (validFiles.length > 5) {
            toast.error('You can upload up to 5 files only.');
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                files: validFiles.slice(0, 5), // Limit to 5 files
            }));
        }
    };

    const handleFileRemove = (index) => {
        setFormData((prevFormData) => {
            const updatedFiles = [...prevFormData.files];
            updatedFiles.splice(index, 1);
            return { ...prevFormData, files: updatedFiles };
        });
    };

    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = () => {
        const { services, fullName, email, phone } = formData;
        const isServiceSelected = Object.values(services).some(
            (service) => service
        );
        return isServiceSelected && fullName && email && phone;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.warn(
                'Please fill all required fields and select at least one service.'
            );
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('website', formData.website);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('driveLink', formData.driveLink);

        Object.keys(formData.services).forEach((service) => {
            if (formData.services[service]) {
                formDataToSend.append('services[]', service);
            }
        });

        formData.files.forEach((file) => {
            formDataToSend.append('files', file);
        });

        try {
            const response = await fetch(`/api/getQuoteMail`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setFormData({
                    services: {
                        graphicsDesign: false,
                        photoEditing: false,
                        webDevelopment: false,
                        virtualAssistant: false,
                        videoEditing: false,
                        digitalMarketing: false,
                    },
                    files: [],
                    driveLink: '',
                    fullName: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: '',
                });
                toast.success('Thank you. Your info has been submitted.');
                router.push('/');
            } else {
                toast.error('Failed to send email.');
            }
        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    };

    return (
        <>
            <div className="container mx-auto p-5">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Get a Quote
                </h1>
                <form
                    className="w-full lg:w-3/4 mx-auto"
                    onSubmit={handleSubmit}
                >
                    {/* Services Section */}
                    <h2 className="text-2xl font-semibold mb-4">
                        Services You Need
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.graphicsDesign}
                                onChange={() =>
                                    handleCheckboxChange('graphicsDesign')
                                }
                            />
                            Graphics Design
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.photoEditing}
                                onChange={() =>
                                    handleCheckboxChange('photoEditing')
                                }
                            />
                            Photo Editing
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.webDevelopment}
                                onChange={() =>
                                    handleCheckboxChange('webDevelopment')
                                }
                            />
                            Web Development
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.virtualAssistant}
                                onChange={() =>
                                    handleCheckboxChange('virtualAssistant')
                                }
                            />
                            Virtual Assistance
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.videoEditing}
                                onChange={() =>
                                    handleCheckboxChange('videoEditing')
                                }
                            />
                            Video Editing
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.services.digitalMarketing}
                                onChange={() =>
                                    handleCheckboxChange('digitalMarketing')
                                }
                            />
                            Digital Marketing
                        </label>
                    </div>

                    {/* File Upload Section */}
                    <h2 className="text-2xl font-semibold mb-4">
                        Upload Files or Enter Drive Link
                    </h2>
                    <div className="mb-8">
                        <div className="w-full h-36 p-3 border-dotted border-2 border-gray-400 mb-4 flex justify-center items-center text-center relative">
                            <input
                                type="file"
                                multiple
                                accept=".png, .jpg, .jpeg, .gif, .zip"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                            />
                            <div>
                                <Image
                                    width={30}
                                    height={30}
                                    src="https://iili.io/d6qpdR2.png"
                                    alt="upload icon"
                                />
                                <p className="text-green-600 font-semibold">
                                    Upload up to 5 files
                                </p>
                                <p className="text-gray-600 text-sm">
                                    or drag and drop
                                </p>
                                <p className="text-gray-600 text-sm">
                                    PNG, JPG, GIF, ZIP up to 10MB
                                </p>
                            </div>
                        </div>

                        {/* Display uploaded files */}
                        {formData.files.length > 0 && (
                            <ul className="mb-4">
                                {formData.files.map((file, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-1 mb-2"
                                    >
                                        <span>{file.name}</span>
                                        <button
                                            type="button"
                                            className="text-red-600 hover:text-red-800 border px-1 rounded-sm bg-gray-200"
                                            onClick={() =>
                                                handleFileRemove(index)
                                            }
                                        >
                                            x
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="mb-8">
                        <p className="text-sm font-semibold mb-2">
                            Or enter drive link:
                        </p>
                        <input
                            type="text"
                            name="driveLink"
                            placeholder="Google Drive / Dropbox / OneDrive"
                            className="w-full p-3 border rounded-md"
                            value={formData.driveLink}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* User Information Section */}
                    <h2 className="text-2xl font-semibold mb-4">Your Info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-md"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 border rounded-md"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="w-full p-3 border rounded-md"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website (optional)"
                            className="w-full p-3 border rounded-md"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Message Section */}
                    <div className="mb-8">
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full p-3 border rounded-md"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-gray-900 py-3 px-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Submit Quote Request
                    </button>
                </form>
            </div>
        </>
    );
}
