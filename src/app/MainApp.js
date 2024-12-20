'use client';

import FooterGlobal from '@/components/shared/FooterGlobal';
import { NavigationbarWithDropdownMultilevelMenu } from '@/components/shared/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <header className="lg:sticky lg:-top-2 z-50 shadow-sm">
                <NavigationbarWithDropdownMultilevelMenu />
            </header>

            <main className="z-0">{children}</main>

            <footer>
                <FooterGlobal />
            </footer>
        </div>
    );
}
