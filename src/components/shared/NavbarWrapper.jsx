'use client';

import { useState, useEffect } from 'react';
import { Navbar } from './navbar';

export default function NavbarWrapper() {
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        let scrollCounter = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop) {
                scrollCounter++;
            } else {
                scrollCounter = 0;
            }

            setHideNavbar(scrollCounter >= 3);
            lastScrollTop = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 transition-transform duration-300 z-50 bg-white/70 ${
                hideNavbar ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <Navbar />
        </header>
    );
}
