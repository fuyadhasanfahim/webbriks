'use client';

import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ClipboardList } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    {
        title: 'Photo Editing',
        href: '/services/photo-editing',
    },
    {
        title: 'Web Design & Development',
        href: '/services/web-design-and-development',
    },
    {
        title: 'Graphics Design',
        href: '/services/graphics-design',
    },
];

const resourceItems = [
    { title: 'About', href: '/about' },
    { title: 'Team', href: '/team' },
    { title: 'Blog', href: '/blog' },
    { title: 'Career', href: '/career' },
    { title: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const path = usePathname();

    // ✅ Check if we should hide "Get a Quote"
    const hideQuote = path.startsWith('/career') || path.startsWith('/job');

    return (
        <nav className="backdrop-blur py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="/" className="text-xl font-bold text-primary">
                    <Image
                        src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1755954483/mqontecf1xao7znsh6cx.png"
                        alt="webbriks"
                        width={171}
                        height={30}
                        priority={true}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    <a
                        href="/"
                        className={`hover:text-orange-500 transition ${
                            path === '/' && 'text-orange-500'
                        }`}
                    >
                        Home
                    </a>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className={`flex items-center gap-2 py-3 hover:text-orange-500 font-medium bg-transparent group-hover:text-orange-500 ${
                                path.startsWith('/services') &&
                                'text-orange-500'
                            }`}
                        >
                            <span>Services</span>
                            <ChevronDownIcon className="h-4 w-4 group-hover:rotate-180 transition-all duration-200" />
                        </button>
                        <div className="absolute top-10 -left-16 w-[240px] z-10 backdrop-blur-3xl bg-white shadow-lg rounded-md mt-2 p-4 flex-col gap-4 hidden group-hover:flex">
                            {navItems.map(({ title, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`w-full flex flex-col hover:text-orange-500 px-2 rounded-md text-sm ${
                                        path === href && 'text-orange-500'
                                    }`}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/pricing"
                        className={`hover:text-orange-500 transition ${
                            path === '/pricing' && 'text-orange-500'
                        }`}
                    >
                        Pricing
                    </a>

                    <a
                        href="/portfolio"
                        className={`hover:text-orange-500 transition ${
                            path === '/portfolio' && 'text-orange-500'
                        }`}
                    >
                        Portfolio
                    </a>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button
                            className={`flex items-center gap-2 py-3 hover:text-orange-500 font-medium bg-transparent group-hover:text-orange-500 ${
                                resourceItems.some((i) => path === i.href) &&
                                'text-orange-500'
                            }`}
                        >
                            <span>Resources</span>
                            <ChevronDownIcon className="h-4 w-4 group-hover:rotate-180 transition-all duration-200" />
                        </button>
                        <div className="absolute top-10 -left-16 w-[240px] z-10 backdrop-blur-3xl bg-white shadow-lg rounded-md mt-2 p-4 flex-col gap-4 hidden group-hover:flex">
                            {resourceItems.map(({ title, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`w-full flex flex-col hover:text-orange-500 px-2 rounded-md text-sm ${
                                        path === href && 'text-orange-500'
                                    }`}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop CTA */}
                {!hideQuote && (
                    <div className="hidden lg:block">
                        <a
                            href="/get-quote"
                            className="text-white px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 transition flex items-center gap-2"
                        >
                            <span>Get a Quote</span>
                            <span>
                                <ClipboardList className="size-5" />
                            </span>
                        </a>
                    </div>
                )}

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden btn btn-ghost btn-square"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {isNavOpen ? (
                        <XMarkIcon className="size-6" />
                    ) : (
                        <Bars3Icon className="size-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isNavOpen && (
                <div className="lg:hidden bg-[#FEF9EF] shadow-md">
                    <div className="px-4 py-2">
                        <a
                            href="/"
                            className={`block py-2 hover:text-orange-500 ${
                                path === '/' && 'text-orange-500'
                            }`}
                        >
                            Home
                        </a>

                        {/* Services dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-5 py-2 pr-4 hover:text-orange-500 font-medium bg-transparent group-hover:text-orange-500 ${
                                    path.startsWith('/services') &&
                                    'text-orange-500'
                                }`}
                            >
                                <span>Services</span>
                                <ChevronDownIcon className="h-4 w-4 group-hover:rotate-180 duration-200 transition-all" />
                            </button>
                            <div className="hidden group-hover:block mt-2 pl-4 border-l border-gray-300">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={`block py-2 hover:text-orange-500 ${
                                            path === item.href &&
                                            'text-orange-500'
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="/pricing"
                            className={`block py-2 hover:text-orange-500 ${
                                path === '/pricing' && 'text-orange-500'
                            }`}
                        >
                            Pricing
                        </a>
                        <a
                            href="/portfolio"
                            className={`block py-2 hover:text-orange-500 ${
                                path === '/portfolio' && 'text-orange-500'
                            }`}
                        >
                            Portfolio
                        </a>

                        {/* Resources dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-5 py-2 pr-4 hover:text-orange-500 font-medium bg-transparent group-hover:text-orange-500 ${
                                    resourceItems.some(
                                        (i) => path === i.href
                                    ) && 'text-orange-500'
                                }`}
                            >
                                <span>Resources</span>
                                <ChevronDownIcon className="h-4 w-4 group-hover:rotate-180 duration-200 transition-all" />
                            </button>
                            <div className="hidden group-hover:block mt-2 pl-4 border-l border-gray-300">
                                {resourceItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={`block py-2 hover:text-orange-500 ${
                                            path === item.href &&
                                            'text-orange-500'
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile CTA */}
                    {!hideQuote && (
                        <button className="px-4 py-2">
                            <a
                                href="/get-quote"
                                className="button !px-4 !py-2 !rounded flex items-center gap-2"
                            >
                                <span>Get a Quote</span>
                                <span>
                                    <ClipboardList className="size-5" />
                                </span>
                            </a>
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
}
