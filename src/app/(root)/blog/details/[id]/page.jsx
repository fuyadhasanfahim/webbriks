'use client';

import { useParams } from 'next/navigation';
import Blogs from '@/data/blogs.json';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

export default function BlogsDetailsPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blog = Blogs.find((blog) => blog.id === id);
                setBlog(blog);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            {blog.title}
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Published on{' '}
                            {format(new Date(blog.publishAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>

                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-12">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="text-lg text-gray-700 mb-8 space-y-4">
                            <p>
                                Imagine this: A customer spends 20 minutes
                                browsing your online store, adds products to
                                their cart, and then—poof!—they disappear
                                without completing the purchase.
                            </p>
                            <p>Frustrating, right?</p>
                            <p>{`You're not alone.`}</p>
                            <p>
                                Baymard Institute’s Studies show that the
                                average cart abandonment rate across all
                                industries is about 70%{' '}
                            </p>
                            <p>
                                That means 7 out of 10 shoppers leave before
                                buying, costing businesses billions in lost
                                revenue.
                            </p>
                            <p>{`But here's the good news: cart abandonment is fixable.`}</p>
                            <p>
                                {`In this guide, we'll explain why customers
                                abandon carts and provide proven strategies to
                                help you recover lost sales and boost
                                conversions.`}
                            </p>
                        </div>

                        {blog.sections.map((section, index) => (
                            <div key={index} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                {section.content && (
                                    <p className="text-gray-600 mb-6">
                                        {section.content}
                                    </p>
                                )}

                                {section.subsections &&
                                    section.subsections.map(
                                        (subsection, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="mb-6"
                                            >
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {subsection.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    {subsection.content}
                                                </p>

                                                {subsection.reasons &&
                                                    subsection.reasons.map(
                                                        (
                                                            reason,
                                                            reasonIndex
                                                        ) => (
                                                            <div
                                                                key={
                                                                    reasonIndex
                                                                }
                                                                className="mb-4"
                                                            >
                                                                <h4 className="text-lg font-medium text-gray-900">
                                                                    {
                                                                        reason.reason
                                                                    }
                                                                </h4>
                                                                <p className="text-gray-600">
                                                                    {
                                                                        reason.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        )
                                    )}

                                {section.tools &&
                                    section.tools.map((tool, toolIndex) => (
                                        <div key={toolIndex} className="mb-6">
                                            <h4 className="text-lg font-medium text-gray-900">
                                                {tool.tool}
                                            </h4>
                                            <p className="text-gray-600">
                                                {tool.description}
                                            </p>
                                        </div>
                                    ))}

                                {section.strategies &&
                                    section.strategies.map(
                                        (strategy, strategyIndex) => (
                                            <div
                                                key={strategyIndex}
                                                className="mb-6"
                                            >
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    {strategy.strategy}
                                                </h4>
                                                <p className="text-gray-600 mb-4">
                                                    {strategy.description}
                                                </p>
                                                {strategy.tips && (
                                                    <ul className="list-disc list-inside text-gray-600">
                                                        {strategy.tips.map(
                                                            (tip, tipIndex) => (
                                                                <li
                                                                    key={
                                                                        tipIndex
                                                                    }
                                                                >
                                                                    {tip}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        )
                                    )}
                            </div>
                        ))}

                        <div className="bg-orange-50 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Final Thoughts & Next Steps
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Cart abandonment is a big problem but also a
                                huge opportunity. You can recover lost sales and
                                boost conversions by improving the checkout
                                experience, offering multiple payment options,
                                and using reminders.
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Analyzing your cart abandonment rate.</li>
                                <li>
                                    Testing small changes (guest checkout, free
                                    shipping, etc.).
                                </li>
                                <li>
                                    Implementing abandoned cart emails and
                                    remarketing ads.
                                </li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                The goal is to make buying seamless and
                                effortless. Apply these strategies today, and
                                watch your revenue grow! 🚀
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Ecommerce Product Photo Editing
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Our company provides professional ecommerce
                                product photo editing services to enhance your
                                product images and boost your sales.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Background Removal</li>
                                <li>Color Correction</li>
                                <li>Image Retouching</li>
                                <li>Shadow Creation</li>
                                <li>Image Masking</li>
                            </ul>
                            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
