'use client';

import { usePathname } from 'next/navigation';
import FloatingButton from '@/components/shared/FloatingButton';

export default function FloatingButtonWrapper() {
    const pathname = usePathname();

    if (pathname === '/career' || pathname.startsWith('/job')) {
        return null;
    }

    return <FloatingButton />;
}
