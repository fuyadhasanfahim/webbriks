'use client';

import { useEffect } from 'react';

export default function MainLayout({ children }) {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'siteVisit',
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
        });
    }, []);

    return <>{children}</>;
}
