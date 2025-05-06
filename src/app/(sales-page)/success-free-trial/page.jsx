'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessFreeTrialPage() {
    return (
        <section className="flex items-center justify-center bg-base-100 padding-x padding-y">
            <div className="max-w-md w-full text-center bg-white shadow-xl p-10 rounded-2xl border border-gray-200">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800">
                    Request Submitted!
                </h1>
                <p className="text-gray-600 mt-2">
                    Thank you for submitting your Free Trial request. Our team
                    will get back to you shortly!
                </p>

                <div className="mt-6">
                    <Link
                        href="/"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white flex items-center w-full"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
