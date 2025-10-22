'use client';

import Button from '@/components/ui/button';
import { ClipboardList } from 'lucide-react';
import Image from 'next/image';

export default function ImageEditingTrailNavbar() {
    return (
        <nav className="py-4">
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

                <Button
                    onClick={() => {
                        const form = document.getElementById('trial-form');
                        form?.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }}
                    leftIcon={<ClipboardList />}
                >
                    Get My Free Edits
                </Button>
            </div>
        </nav>
    );
}
