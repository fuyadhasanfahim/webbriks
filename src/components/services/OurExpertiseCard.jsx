'use client';

import { cn } from '@/lib/utils';

export function OurExpertiseCard({ title, desc }) {
    return (
        <div className="w-full select-none">
            <div
                className={cn(
                    'group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
                    'bg-[url(https://i.ibb.co.com/zRCLpn4/card-background.jpg)] bg-cover',
                    'before:bg-[url(https://i.ibb.co.com/k1WDGw5/card-background-blured.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
                    'hover:bg-[url(https://i.ibb.co.com/k1WDGw5/card-background-blured.jpg)]',
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0",
                    'transition-all duration-500'
                )}
            >
                <div className="text relative z-10">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        {title}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
