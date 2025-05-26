'use client';

import { useEffect } from 'react';

export default function MainLayout({ children }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];

            const visitorData = {
                event: 'trackVisitors',
                first_name: user?.firstName || 'Guest',
                last_name: user?.lastName || '',
                email: user?.email || '',
                phone: user?.phone || '',
                city: user?.city || '',
                state: user?.state || '',
                zip: user?.zip || '',
                country: user?.country || '',
            };

            window.dataLayer.push(visitorData);
        }
    }, []);

    return <>{children}</>;
}
