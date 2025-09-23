'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2, FileText, Mail, Phone, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function JobApplicantsPage() {
    const { _id } = useParams();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const res = await fetch(
                    `/api/job/get-job-application?_id=${_id}`
                );
                const data = await res.json();
                if (data.success) {
                    setApplication(data.data);
                }
            } catch (err) {
                console.error('Failed to fetch application', err);
            } finally {
                setLoading(false);
            }
        };

        if (_id) fetchApplication();
    }, [_id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[80vh]">
                <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
        );
    }

    if (!application) {
        return (
            <div className="flex items-center justify-center min-h-[80vh]">
                <p className="text-gray-600 text-lg">No application found.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#FFFBF4] px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Application Status
                </h1>
                <p className="text-gray-600 mb-6">
                    Hello{' '}
                    <span className="font-medium">
                        {application.firstName} {application.lastName}
                    </span>
                    , thank you for applying to{' '}
                    <span className="font-medium">{application.company}</span>
                    for the position of{' '}
                    <span className="font-medium">{application.jobTitle}</span>.
                </p>
                <div className="bg-gray-100 p-4 rounded-xl mb-6">
                    <p className="text-gray-700">
                        <span className="font-semibold">Current Status:</span>{' '}
                        <span
                            className={cn(
                                'px-3 py-1 rounded-full text-sm font-medium capitalize',
                                application.status === 'applied'
                                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                    : application.status === 'shortlisted'
                                    ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                                    : application.status === 'hired'
                                    ? 'bg-green-100 text-green-800 border border-green-200'
                                    : application.status === 'rejected'
                                    ? 'bg-red-100 text-red-800 border border-red-200'
                                    : application.status === 'interview'
                                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                            )}
                        >
                            {application.status}
                        </span>
                    </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                    <p className="flex items-center gap-2">
                        <User className="w-4 h-4" /> {application.firstName}{' '}
                        {application.lastName}
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> {application.email}
                    </p>
                    <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /> {application.phone}
                    </p>
                    <a
                        href={application.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        <FileText className="w-4 h-4" /> View CV
                    </a>
                </div>

                <p className="text-sm text-gray-500">
                    You’ll be notified by email with updates on your
                    application. Please check your inbox regularly.
                </p>
            </div>
        </div>
    );
}
