'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
    {
        name: 'Post Blogs',
        path: '/admin',
    },
    {
        name: 'All Blogs',
        path: '/admin/all-blogs',
    },
    {
        name: 'Edit Blogs',
        path: '/admin/edit-blogs',
    },
    {
        name: 'Delete Blogs',
        path: '/admin/delete-blogs',
    },
];

export default function Sidebar() {
    const path = usePathname();

    return (
        <div className="w-full max-w-72 bg-gray-800 text-white h-full min-h-[calc(100vh-76px)]">
            <div className="flex flex-col gap-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`tab-button py-2 px-4 text-left ${
                            tab.path === path ? 'bg-gray-700' : 'bg-gray-800'
                        } hover:bg-gray-700 focus:outline-none`}
                    >
                        <Link href={tab.path}>{tab.name}</Link>
                    </button>
                ))}
            </div>
        </div>
    );
}
