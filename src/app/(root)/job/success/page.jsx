import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function JobSuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Application Submitted Successfully
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for applying! We’ve received your application. An
                    email has been sent to you with a secure link where you can
                    track the status of your application at any time.
                </p>
                <p className="text-sm text-gray-500">
                    Please check your inbox (and spam folder) for the
                    confirmation email.
                </p>
            </div>
        </div>
    );
}
