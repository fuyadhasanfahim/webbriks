'use client';
import FooterGlobal from '@/components/shared/FooterGlobal';
import { NavigationbarWithDropdownMultilevelMenu } from '@/components/shared/Navbar';
import store from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <div>
                <ToastContainer position="bottom-right" />
                <header className="lg:sticky lg:-top-2 z-50 shadow-sm">
                    <NavigationbarWithDropdownMultilevelMenu />
                </header>

                <main className="z-0">{children}</main>

                <footer className="">
                    <FooterGlobal />
                </footer>
            </div>
        </Provider>
    );
}
