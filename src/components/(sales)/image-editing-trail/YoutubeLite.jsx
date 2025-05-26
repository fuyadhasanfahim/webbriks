/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Youtube } from 'lucide-react';
import Image from 'next/image';

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
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="YouTube video thumbnail"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
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
                    loading="eager"
                    className="w-full h-full"
                />
            )}
        </figure>
    );
}
