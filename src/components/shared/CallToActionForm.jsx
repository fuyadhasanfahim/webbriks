'use client';

import { useRouter } from 'next/navigation';
import * as Form from 'react-hook-form';

export default function CallToActionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
        reset,
    } = Form.useForm({
        defaultValues: {
            name: '',
            email: '',
            company: '',
            country: '',
            phoneNumber: '',
            message: '',
        },
    });

    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/get-contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                reset();

                router.push('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="bg-white text-black rounded-xl flex-1 flex-grow flex-shrink basis-0 mb-6 p-4 sm:p-6 md:p-10 w-full max-w-2xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                aria-label="Contact Form"
                method="POST"
            >
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="text-black font-medium text-sm"
                    >
                        Name*
                    </label>
                    <input
                        {...register('name', {
                            required: 'Name is required',
                        })}
                        className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                        placeholder="Enter your full name"
                        type="text"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-black font-medium text-sm"
                        >
                            Email*
                        </label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="company"
                            className="text-black font-medium text-sm"
                        >
                            Company
                        </label>
                        <input
                            {...register('company')}
                            className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your company name"
                            type="text"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="country"
                            className="text-black font-medium text-sm"
                        >
                            Country*
                        </label>
                        <input
                            {...register('country', {
                                required: 'Country is required',
                            })}
                            className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your country"
                            type="text"
                        />
                        {errors.country && (
                            <span className="text-red-500 text-sm">
                                {errors.country.message}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="phoneNumber"
                            className="text-black font-medium text-sm"
                        >
                            Phone Number*
                        </label>
                        <input
                            {...register('phoneNumber', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Phone number must be numeric',
                                },
                            })}
                            className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-11 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                            placeholder="Enter your phone number"
                            type="text"
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500 text-sm">
                                {errors.phoneNumber.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="message"
                        className="text-black font-medium text-sm"
                    >
                        Your Message*
                    </label>
                    <textarea
                        {...register('message', {
                            required: 'Message is required',
                        })}
                        className="border-b-2 border-black border-x-0 border-t-0 rounded-none bg-transparent h-32 mb-4 pl-0 text-lg md:text-xl leading-8 focus:outline-none w-full focus-visible:ring-0"
                        placeholder="Tell us more about your idea"
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <div className="text-start">
                    <button
                        type="submit"
                        className="rounded-full h-[40px] md:h-[50px] lg:h-[60px] py-3 px-8 md:py-4 md:px-12 text-base md:text-lg font-medium cursor-pointer hover:bg-gray-800 bg-black text-white"
                        disabled={isLoading}
                    >
                        Send Inquiry
                    </button>
                </div>
            </form>
        </section>
    );
}
