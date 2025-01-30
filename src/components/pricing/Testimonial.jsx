'use client';

import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
    {
        title: 'Excellent Service',
        content:
            'Webbriks LLC has been a game-changer for our e-commerce business. Their photo editing services are...',
        author: 'Michael Scott',
        rating: 5,
    },
    {
        title: 'Great Experience',
        content:
            'The graphic design team at Webbriks LLC exceeded our expectations! They brought our ideas to...',
        author: 'David Brown',
        rating: 5,
    },
    {
        title: 'Excellent Service',
        content:
            'Working with Webbriks LLC on our website redesign was an absolute pleasure. Their team created...',
        author: 'Emily Johnson',
        rating: 5,
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5 text-green-500">
            {[...Array(rating)].map((_, i) => (
                <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

export default function TestimonialSlider() {
    const sliderRef = useRef(null);
    const sliderInstanceRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderInstanceRef.current = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 1.5,
                            spacing: 32,
                        },
                    },
                },
            });
        }

        return () => {
            if (sliderInstanceRef.current) {
                sliderInstanceRef.current.destroy();
            }
        };
    }, []);

    const handlePrevious = () => {
        sliderInstanceRef.current?.prev();
    };

    const handleNext = () => {
        sliderInstanceRef.current?.next();
    };

    return (
        <section className="bg-white text-black space-y space-x overflow-hidden">
            <div className="container space-x">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {`Don't just take our word for it...`}
                        </h2>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                onClick={handlePrevious}
                                aria-label="Previous slide"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleNext}
                                aria-label="Next slide"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div ref={sliderRef} className="keen-slider">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-black text-white p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <StarRating
                                                rating={testimonial.rating}
                                            />
                                            <div className="mt-4">
                                                <p className="text-2xl font-bold text-white sm:text-3xl">
                                                    {testimonial.title}
                                                </p>
                                                <p className="mt-4 leading-relaxed text-gray-400">
                                                    {testimonial.content}
                                                </p>
                                            </div>
                                        </div>
                                        <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
                                            &mdash; {testimonial.author}
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous slide"
                        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                            className="h-5 w-5 -rotate-180 transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
