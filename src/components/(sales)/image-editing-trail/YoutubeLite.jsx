'use client';

import { useState } from 'react';
import { PlayCircle, Youtube } from 'lucide-react';
import Image from 'next/image';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';

export default function YoutubeLite({ videoId }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <figure
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group"
            aria-label="Play video"
        >
            {!isPlaying ? (
                <button
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full block relative"
                    aria-label="Play YouTube video"
                >
                    <Image
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="YouTube video thumbnail"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 700px"
                        priority={false}
                        unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition">
                        <Youtube className="w-16 h-16 text-red-500" />
                    </div>
                </button>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            )}
        </figure>
    );
}
