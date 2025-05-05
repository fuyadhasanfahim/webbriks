import { ClipboardList } from 'lucide-react';
import Image from 'next/image';

export default function ImageEditingTrailNavbar() {
    return (
        <nav className="py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="/" className="text-xl font-bold text-primary">
                    <Image
                        src="https://iili.io/2TW5PLb.png"
                        alt="webbriks"
                        width={171}
                        height={30}
                        priority={true}
                    />
                </a>

                <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center">
                    <ClipboardList className="w-5 h-5 mr-2" />
                    <span>Start Free Trial</span>
                </button>
            </div>
        </nav>
    );
}
