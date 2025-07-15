'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function RootGetQuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        services: {
            graphicsDesign: false,
            photoEditing: false,
            webDevelopment: false,
        },
        photoEditingServices: {
            clippingPath: false,
            backgroundEditing: false,
            photoRetouching: false,
            hairMasking: false,
            ghostMannequinEffect: false,
            colorCorrection: false,
            shadowCreation: false,
            eCommerceProductEditing: false,
            jewelryPhotoRetouching: false,
            rasterToVector: false,
        },
        fileFormat: '',
        referralSource: '',
        quoteInterest: '',
        files: [],
        driveLink: '',
        fullName: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const fileFormatOptions = [
        'JPG - White BG',
        'PNG - Transparent',
        'PSD - Layer Mask',
        'PSD - Layered File',
        'PSD - Original BG',
        'TIFF - Original BG',
        'TIFF - Transparent BG',
        'PSF Pages',
        'Original Format and BG',
        'Others - Please Specify',
    ];

    const referralSourceOptions = [
        'Email',
        'Search Engine',
        'Friend/Colleagues',
        'Social Media',
        'Tele Marketing',
        'Google Ads',
        'Facebook Ads',
        'Youtube Ads',
        'Other Online Ads',
        'IDK?Can not recall',
        'Others',
    ];

    const quoteInterestOptions = [
        'No Just Quote Image',
        'Yes Quotation Please',
    ];

    const handleCheckboxChange = (service) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            services: {
                ...prevFormData.services,
                [service]: !prevFormData.services[service],
            },
        }));
    };

    const handlePhotoServiceChange = (service) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            photoEditingServices: {
                ...prevFormData.photoEditingServices,
                [service]: !prevFormData.photoEditingServices[service],
            },
        }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
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

        if (validFiles.length > 3) {
            toast.error('You can upload up to 3 files only.');
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                files: validFiles.slice(0, 5),
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
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { services, fullName, email, phone } = formData;
        const isServiceSelected = Object.values(services).some(
            (service) => service
        );

        // Additional validation for photo editing services
        if (services.photoEditing) {
            const isPhotoServiceSelected = Object.values(
                formData.photoEditingServices
            ).some((service) => service);
            return (
                isServiceSelected &&
                isPhotoServiceSelected &&
                fullName &&
                email &&
                phone
            );
        }

        return isServiceSelected && fullName && email && phone;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (!validateForm()) {
            toast.warn(
                'Please fill all required fields and select at least one service.'
            );
            return;
        }

        const formDataToSend = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (typeof value !== 'object') {
                formDataToSend.append(key, value);
            }
        });

        Object.entries(formData.services).forEach(([service, isSelected]) => {
            if (isSelected) {
                formDataToSend.append('services[]', service);
            }
        });

        if (formData.services.photoEditing) {
            Object.entries(formData.photoEditingServices).forEach(
                ([service, isSelected]) => {
                    if (isSelected) {
                        formDataToSend.append(
                            'photoEditingServices[]',
                            service
                        );
                    }
                }
            );
        }

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
                    },
                    photoEditingServices: {
                        clippingPath: false,
                        backgroundEditing: false,
                        photoRetouching: false,
                        hairMasking: false,
                        ghostMannequinEffect: false,
                        colorCorrection: false,
                        shadowCreation: false,
                        eCommerceProductEditing: false,
                        jewelryPhotoRetouching: false,
                        rasterToVector: false,
                    },
                    fileFormat: '',
                    referralSource: '',
                    quoteInterest: '',
                    files: [],
                    driveLink: '',
                    fullName: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: '',
                });
                setIsLoading(false);
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
        <div className="container mx-auto p-5">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Get a Quote
            </h1>
            <form
                className="w-full lg:w-3/4 mx-auto bg-white p-8 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Services You Need
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {Object.keys(formData.services).map((service) => (
                        <label
                            key={service}
                            className="flex items-center bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-orange-400"
                                checked={formData.services[service]}
                                onChange={() => handleCheckboxChange(service)}
                            />
                            <span className="ml-3 text-gray-700 capitalize">
                                {service.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                        </label>
                    ))}
                </div>

                {formData.services.photoEditing && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            Photo Editing Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {Object.keys(formData.photoEditingServices).map(
                                (service) => (
                                    <label
                                        key={service}
                                        className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-orange-500 rounded focus:ring-orange-400"
                                            checked={
                                                formData.photoEditingServices[
                                                    service
                                                ]
                                            }
                                            onChange={() =>
                                                handlePhotoServiceChange(
                                                    service
                                                )
                                            }
                                        />
                                        <span className="ml-3 text-gray-700 capitalize">
                                            {service
                                                .replace(/([A-Z])/g, ' $1')
                                                .trim()}
                                        </span>
                                    </label>
                                )
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred File Format
                                </label>
                                <select
                                    name="fileFormat"
                                    value={formData.fileFormat}
                                    onChange={handleSelectChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    required={formData.services.photoEditing}
                                >
                                    <option value="">Select Format</option>
                                    {fileFormatOptions.map((format) => (
                                        <option key={format} value={format}>
                                            {format}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quote Interest
                                </label>
                                <select
                                    name="quoteInterest"
                                    value={formData.quoteInterest}
                                    onChange={handleSelectChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    required={formData.services.photoEditing}
                                >
                                    <option value="">
                                        Select Interest Level
                                    </option>
                                    {quoteInterestOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    How did you find us?
                                </label>
                                <select
                                    name="referralSource"
                                    value={formData.referralSource}
                                    onChange={handleSelectChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    required={formData.services.photoEditing}
                                >
                                    <option value="">Select Source</option>
                                    {referralSourceOptions.map((source) => (
                                        <option key={source} value={source}>
                                            {source}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Upload Files or Enter Drive Link
                </h2>
                <div className="mb-8">
                    <div className="w-full h-36 p-3 border-dashed border-2 border-gray-300 rounded-lg flex justify-center items-center text-center bg-gray-50 hover:bg-gray-100 transition-colors relative">
                        <input
                            type="file"
                            multiple
                            accept=".png, .jpg, .jpeg, .gif, .zip"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                        <div>
                            <Image
                                src="https://iili.io/d6qpdR2.png"
                                alt="upload icon"
                                width={32}
                                height={32}
                                className="mx-auto"
                            />
                            <p className="text-green-600 font-semibold mt-2">
                                Upload up to 3 files
                            </p>
                            <p className="text-gray-600 text-sm">
                                or drag and drop
                            </p>
                            <p className="text-gray-600 text-sm">
                                PNG, JPG, GIF, ZIP up to 10MB
                            </p>
                        </div>
                    </div>

                    {formData.files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                            {formData.files.map((file, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                                >
                                    <span className="text-gray-700">
                                        {file.name}
                                    </span>
                                    <button
                                        type="button"
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                        onClick={() => handleFileRemove(index)}
                                    >
                                        &times;
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="mb-8">
                    <p className="text-sm font-semibold mb-2 text-gray-700">
                        Or enter drive link:
                    </p>
                    <input
                        type="text"
                        name="driveLink"
                        placeholder="Google Drive / Dropbox / OneDrive"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        value={formData.driveLink}
                        onChange={handleInputChange}
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Your Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="website"
                        placeholder="Website (optional)"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        value={formData.website}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-8">
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg transition-colors focus:outline-none ${
                        isLoading
                            ? 'cursor-not-allowed bg-gray-200 text-black focus:ring-2 focus:ring-orange-400 focus:ring-offset-2'
                            : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting Form...' : 'Submit Quote Request'}
                </button>
            </form>
        </div>
    );
}
