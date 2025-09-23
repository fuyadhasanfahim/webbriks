'use client';

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ApplyNowBtn from '@/components/job/ApplyNowBtn';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { format } from 'date-fns';

export default function JobDetailsPage({ params }) {
    const { title } = params;
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/job/get-job/${title}`, {
                    cache: 'no-store',
                });
                if (!res.ok) throw new Error('Failed to fetch job');
                const data = await res.json();
                setJob(data.success ? data.job : null);
            } catch (err) {
                console.error(err);
                setJob(null);
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [title]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                <span className="ml-3 text-gray-600 font-medium">
                    Loading job details...
                </span>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Job Not Found
                    </h1>
                    <button
                        onClick={() => router.back()}
                        className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                        Go back to jobs
                    </button>
                </div>
            </div>
        );
    }

    // Company description (static text as per your request)
    const companyDescription = `It was in 2017, Md Ashaduzzaman started his photo editing agency with naming "Cut Out Expert". At that time he had only dream to scale without big investment. After hard work and dedication, his agency became established in the global market by 2022. This company only serves international clients fixing their image issues. At 2024, the company was rebranded with name "Web Briks LLC". This time, they added software development services with image editing. Now, Web Briks has over 60 members serving proudly local and international clients.

Have questions or need assistance?
Contact Us:
Email: info@webbriks.com`;

    const truncatedDescription =
        companyDescription.slice(0, 300) +
        (companyDescription.length > 300 ? '...' : '');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-cyan-50/30">
            {/* Banner */}
            <div className="relative w-full h-72 md:h-96 shadow-md">
                <Image
                    src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1758536980/iomhvkkeayenls1kqruv.png"
                    alt="Company Cover"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Job Details */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Left sidebar card */}
                <div className="lg:col-span-2">
                    <div className="bg-white shadow-lg rounded-2xl border p-8 -mt-40 relative z-10">
                        {/* Company logo */}
                        <div className="flex items-center gap-4 mb-8">
                            <Image
                                src={
                                    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1758534765/r6jahp7gktcvhcjsxzzf.png'
                                }
                                alt={job?.company || 'Company'}
                                width={60}
                                height={60}
                                className="border rounded-md"
                            />
                            <div>
                                <h2 className="font-bold text-gray-900 text-lg">
                                    {job?.company}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {job?.location}
                                </p>
                            </div>
                        </div>

                        {/* Job info */}
                        <div className="divide-y divide-gray-200 text-sm text-gray-700">
                            {[
                                ['Job Title', job?.title],
                                ['Vacancies', job?.vacancies],
                                ['Office Time', job?.officeTime || 'N/A'],
                                ['Location', job?.location],
                                [
                                    'Job Type',
                                    <>
                                        <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-orange-100 text-orange-600">
                                            {job?.workplace || 'On-site'}
                                        </span>
                                    </>,
                                ],
                                [
                                    'Deadline',
                                    job?.deadline
                                        ? format(job?.deadline, 'PPP')
                                        : 'N/A',
                                ],
                            ].map(([label, value], idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between py-3"
                                >
                                    <span className="font-semibold w-32">
                                        {label}
                                    </span>
                                    <span className="text-gray-900 flex-1 text-right">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Apply & Share */}
                        <div className="mt-8 flex flex-col gap-4">
                            <ApplyNowBtn job={job} />

                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-600">
                                    Share on:
                                </span>
                                <div className="flex gap-2">
                                    <Link
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                            typeof window !== 'undefined'
                                                ? window.location.href
                                                : ''
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white shadow transition"
                                        title="Share on Facebook"
                                    >
                                        <FaFacebookF size={14} />
                                    </Link>
                                    <Link
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                            typeof window !== 'undefined'
                                                ? window.location.href
                                                : ''
                                        )}&text=${encodeURIComponent(
                                            job?.title || 'Check this job!'
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-500 hover:bg-cyan-500 hover:text-white shadow transition"
                                        title="Share on Twitter"
                                    >
                                        <FaTwitter size={14} />
                                    </Link>
                                    <Link
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                            typeof window !== 'undefined'
                                                ? window.location.href
                                                : ''
                                        )}&title=${encodeURIComponent(
                                            job?.title || 'Job Opening'
                                        )}&summary=${encodeURIComponent(
                                            job?.description || ''
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white shadow transition"
                                        title="Share on LinkedIn"
                                    >
                                        <FaLinkedinIn size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side content */}
                <div className="lg:col-span-3 space-y-8">
                    {[
                        [
                            '🏢 Company Description',
                            <p
                                key="desc"
                                className="text-gray-700 text-sm leading-relaxed whitespace-pre-line"
                            >
                                {showFullDescription
                                    ? companyDescription
                                    : truncatedDescription}
                                {companyDescription.length > 300 && (
                                    <button
                                        onClick={() =>
                                            setShowFullDescription(
                                                (prev) => !prev
                                            )
                                        }
                                        className="ml-2 text-orange-500 font-medium text-sm hover:underline"
                                    >
                                        {showFullDescription
                                            ? 'View Less'
                                            : 'View More'}
                                    </button>
                                )}
                            </p>,
                        ],
                        // [
                        //     '🛠 Skills',
                        //     <div key="skills" className="flex flex-wrap gap-2">
                        //         {job?.skills?.map((skill, idx) => (
                        //             <span
                        //                 key={idx}
                        //                 className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600 font-medium"
                        //             >
                        //                 {skill}
                        //             </span>
                        //         )) || <p>No skills listed.</p>}
                        //     </div>,
                        // ],
                        [
                            '📖 Description',
                            <p key="desc" className="text-gray-700 text-sm">
                                {job?.description ||
                                    'We are looking for a passionate professional to join our team.'}
                            </p>,
                        ],
                        [
                            '✅ Job Responsibilities',
                            <ul
                                key="resp"
                                className="space-y-2 text-sm text-gray-700 list-disc list-inside"
                            >
                                {job?.responsibilities?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                )) || <li>No responsibilities listed.</li>}
                            </ul>,
                        ],
                        [
                            '📌 Requirements',
                            <ul
                                key="req"
                                className="space-y-2 text-sm text-gray-700 list-disc list-inside"
                            >
                                {job?.requirements?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                )) || <li>No requirements listed.</li>}
                            </ul>,
                        ],
                        [
                            '🎁 Benefits',
                            <ul
                                key="benefits"
                                className="space-y-2 text-sm text-gray-700 list-disc list-inside"
                            >
                                {job?.compensation?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                )) || <li>No benefits listed.</li>}
                            </ul>,
                        ],
                    ].map(([title, content], idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-sm rounded-xl border p-6 hover:shadow-md transition"
                        >
                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                <span className="text-orange-500">
                                    {title.split(' ')[0]}
                                </span>
                                {title.split(' ').slice(1).join(' ')}
                            </h3>
                            {content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
