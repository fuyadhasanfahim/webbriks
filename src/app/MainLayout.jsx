'use client';

import { useEffect } from 'react';

export default function MainLayout({ children }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];

            const visitorData = {
                event: 'trackVisitors',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                city: '',
                state: '',
                zip: '',
                country: '',
            };

            window.dataLayer.push(visitorData);
        }
    }, []);

    return <>{children}</>;
}
