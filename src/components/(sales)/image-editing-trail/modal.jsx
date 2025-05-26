'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function PopupModal() {
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
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'image-editing-trial',
            name: data.name,
            email: data.email,
            phone: data.phone || '',
            website: data.website,
            message: data.message,
            driveLink: data.driveLink || '',
            fileCount: files.length,
        });

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('email', data.phone);
        formData.append('email', data.website);
        formData.append('message', data.message);
        formData.append('driveLink', data.driveLink);

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
            document.querySelector(`#my_modal_3`).close();
            router.push('/free-trial-submitted');
        } else {
            console.log(result);
            toast.error('Something went wrong!');
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Free Trial Form
                        </h2>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <div className="mt-6">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            id="free-trial-form"
                        >
                            <div className="grid grid-cols-2 items-center gap-6">
                                <div className="col-span-2">
                                    <div className="w-full h-36 p-3 border-dashed border-2 border-gray-300 rounded-lg flex justify-center items-center text-center bg-gray-50 hover:bg-gray-100 transition-colors relative">
                                        <input
                                            type="file"
                                            multiple
                                            accept=".png, .jpg, .jpeg, .gif, .zip"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <div>
                                            <Image
                                                src="https://iili.io/d6qpdR2.png"
                                                alt="upload icon"
                                                width={32}
                                                height={32}
                                                className="mx-auto"
                                            />
                                            <p className="text-orange-600 font-semibold mt-2">
                                                Upload up to 3 files
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                or drag and drop
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                PNG, JPG, ZIP
                                            </p>
                                        </div>
                                    </div>

                                    {files.length > 0 && (
                                        <ul className="mt-4 space-y-2">
                                            {files.map((file, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                                                >
                                                    <span className="text-gray-700">
                                                        {file.name}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleFileRemove(
                                                                index
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-800 transition-colors"
                                                    >
                                                        &times;
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="col-span-2">
                                    <p className="text-sm font-semibold mb-2 text-gray-700">
                                        Or enter drive link:
                                    </p>
                                    <input
                                        type="text"
                                        {...register('driveLink')}
                                        placeholder="Google Drive / Dropbox / OneDrive"
                                        className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2 w-full"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <div className="border"></div>
                                </div>

                                <h3 className="col-span-2 text-lg md:text-xl">
                                    Fill your info
                                </h3>

                                <input
                                    type="text"
                                    {...register('name', { required: true })}
                                    placeholder="Enter your name"
                                    className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2"
                                />

                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    placeholder="Enter your email"
                                    className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2"
                                />

                                <input
                                    type="tel"
                                    {...register('phone', { required: false })}
                                    placeholder="Enter your phone number (Optional)"
                                    className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2"
                                />

                                <input
                                    type="url"
                                    {...register('website', { required: true })}
                                    placeholder="Enter your website url"
                                    className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2"
                                />

                                <textarea
                                    {...register('message', { required: true })}
                                    placeholder="Enter your instructions"
                                    className="p-2 rounded-md focus:outline-0 border border-orange-500 focus:ring-2 ring-orange-300 ring-offset-2 col-span-2"
                                    rows={3}
                                />

                                <button
                                    type="submit"
                                    className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center col-span-2"
                                    disabled={formState.isSubmitting}
                                >
                                    {formState.isSubmitting
                                        ? 'Submitting...'
                                        : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
