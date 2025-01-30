'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function RootGetQuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        services: {
            graphicsDesign: false,
            photoEditing: false,
            webDevelopment: false,
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
        <div className="container mx-auto p-5">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Get a Quote
            </h1>
            <form
                className="w-full lg:w-3/4 mx-auto bg-white p-8 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                {/* Services Section */}
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

                {/* Upload Files Section */}
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

                {/* Drive Link Section */}
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

                {/* User Information Section */}
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

                {/* Message Section */}
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                    Submit Quote Request
                </button>
            </form>
        </div>
    );
}
