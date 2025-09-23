'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const navItems = [
    { title: 'Home', href: '/' },
    {
        title: 'Services',
        children: [
            { title: 'Photo Editing', href: '/services/photo-editing' },
            {
                title: 'Web Design & Development',
                href: '/services/web-design-and-development',
            },
            { title: 'Graphics Design', href: '/services/graphics-design' },
        ],
    },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Portfolio', href: '/portfolio' },
    {
        title: 'Resources',
        children: [
            { title: 'About', href: '/about' },
            { title: 'Team', href: '/team' },
            { title: 'Blog', href: '/blog' },
            { title: 'Career', href: '/career' },
            { title: 'Contact', href: '/contact' },
        ],
    },
];

export default function Navbar() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="py-4">
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-md">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <Image
                        src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1755954483/mqontecf1xao7znsh6cx.png"
                        alt="webbriks"
                        width={140}
                        height={28}
                        priority
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">
                            {item.children ? (
                                <>
                                    <button
                                        className={`flex items-center gap-1 ${
                                            path.startsWith(
                                                item.children[0].href
                                            )
                                                ? 'text-orange-600'
                                                : 'text-gray-700'
                                        } hover:text-orange-600`}
                                    >
                                        {item.title}
                                        <ChevronDownIcon className="w-4 h-4" />
                                    </button>
                                    {/* Dropdown */}
                                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-20">
                                        {item.children.map((child, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={child.href}
                                                    className={`block px-4 py-2 text-sm ${
                                                        path === child.href
                                                            ? 'text-orange-600 bg-orange-50 font-medium'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                                                    }`}
                                                >
                                                    {child.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <a
                                    href={item.href}
                                    className={`${
                                        path === item.href
                                            ? 'text-orange-600 font-medium'
                                            : 'text-gray-700'
                                    } hover:text-orange-600`}
                                >
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-md bg-gray-100 text-gray-700"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-2">
                    {navItems.map((item, index) => (
                        <div key={index}>
                            {item.children ? (
                                <details className="group">
                                    <summary className="flex items-center justify-between py-2 cursor-pointer text-gray-700 hover:text-orange-600">
                                        {item.title}
                                        <ChevronDownIcon className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child, idx) => (
                                            <a
                                                key={idx}
                                                href={child.href}
                                                className={`block py-2 text-sm ${
                                                    path === child.href
                                                        ? 'text-orange-600 font-medium'
                                                        : 'text-gray-700 hover:text-orange-600'
                                                }`}
                                            >
                                                {child.title}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <a
                                    href={item.href}
                                    className={`block py-2 ${
                                        path === item.href
                                            ? 'text-orange-600 font-medium'
                                            : 'text-gray-700 hover:text-orange-600'
                                    }`}
                                >
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}
