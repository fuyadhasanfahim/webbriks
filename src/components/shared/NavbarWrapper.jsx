'use client';

import { useState, useEffect } from 'react';
import { Navbar } from './navbar';
import FloatingNavbar from './FloatingNavbar';

export default function NavbarWrapper() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [hideQuote, setHideQuote] = useState(false);

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

    useEffect(() => {
        // Detect current pathname to hideQuote
        const path = window.location.pathname;
        setHideQuote(path.startsWith('/career') || path.startsWith('/job'));
    }, []);

    return hideQuote ? (
        <div className="bg-[#FFFBF4]">
            <FloatingNavbar />
        </div>
    ) : (
        <header
            className={`sticky top-0 transition-transform duration-300 z-50 bg-white/70 ${
                hideNavbar ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <Navbar />
        </header>
    );
}
