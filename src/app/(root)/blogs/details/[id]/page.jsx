'use client';

import { useParams } from 'next/navigation';
import Blogs from '@/data/blogs.json';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

export default function BlogsDetailsPage() {
    const { id } = useParams();
    const blogId = parseInt(id, 10); // Convert string to number
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blog = Blogs.find((blog) => blog.id === blogId);
                setBlog(blog);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchData();
    }, [blogId]);

    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Blog Header */}
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
                        priority
                        className="transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Blog Content */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {/* Introduction */}
                    <p className="text-lg text-gray-700 mb-8">
                        {blog.introduction}
                    </p>

                    {/* Sections */}
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

                            {/* Subsections */}
                            {section.subsections &&
                                section.subsections.map(
                                    (subsection, subIndex) => (
                                        <div key={subIndex} className="mb-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {subsection.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {subsection.content}
                                            </p>

                                            {/* Reasons (if applicable) */}
                                            {subsection.reasons &&
                                                subsection.reasons.map(
                                                    (reason, reasonIndex) => (
                                                        <div
                                                            key={reasonIndex}
                                                            className="mb-4"
                                                        >
                                                            <h4 className="text-lg font-medium text-gray-900">
                                                                {reason.reason}
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

                            {/* Tools (if applicable) */}
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

                            {/* Strategies (if applicable) */}
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
                                                            <li key={tipIndex}>
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

                    {/* Final Thoughts & Next Steps */}
                    {blog.sections.find(
                        (section) =>
                            section.title === 'Final Thoughts & Next Steps'
                    ) && (
                        <div className="bg-orange-50 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Final Thoughts & Next Steps
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {
                                    blog.sections.find(
                                        (section) =>
                                            section.title ===
                                            'Final Thoughts & Next Steps'
                                    ).content
                                }
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                {blog.sections
                                    .find(
                                        (section) =>
                                            section.title ===
                                            'Final Thoughts & Next Steps'
                                    )
                                    .next_steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                            </ul>
                            <p className="text-gray-600 mt-4">
                                {
                                    blog.sections.find(
                                        (section) =>
                                            section.title ===
                                            'Final Thoughts & Next Steps'
                                    ).conclusion
                                }
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
