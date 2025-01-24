'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
    {
        title: 'Photo Editing',
        description:
            'Our approach ensures every photo enhances and draws attention to its audience. We specialize in delivering high-quality, visually consistent images across the web and other platforms. Additionally, we maintain a cohesive and professional look for your visuals.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/olhxiczax99okzqxqhka.gif',
    },
    {
        title: 'Web Design & Development',
        description:
            'A website works as a connector between service providers and their audiences. So, it should be designed perfectly to achieve its best output. Our skilled team combines creativity and functionality to craft websites that stand out. We will design websites that will help to grow your business.',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737712762/mennl8ixaydsfcvueyae.png',
    },
    {
        title: 'Graphic Design',
        description:
            'At Web Briks, We help brands create stunning designs that align with their brand identity. Our experts. We create visuals that resonate with your audience and make long-lasting impressions. Let us craft designs that inspire and help you achieve your goals today!',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
    },
    {
        title: 'Video Editing',
        description:
            "Bring your vision to life with our expert video editing services. We craft videos that tell your story and leave a lasting impression. Let us help you achieve the professional, engaging videos you've always wanted. Start transforming your footage today!",
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737712835/xkv7o7psrnzqxsvzvyvn.jpg',
    },
    {
        title: 'Lead Generation',
        description:
            'Boost your sales pipeline with our B2B lead collection services. We leverage search engines, LinkedIn, and other trusted platforms to connect you with decision-makers and potential clients. We always deliver qualified leads that help to grow business. Get started today!',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737712905/kbmach3oxc3q5bs6m70x.jpg',
    },
    {
        title: '',
        description: '',
        image: '',
    },
];

export function StickyScrollRevealDemo() {
    return (
        <section className="w-full bg-white space-x overflow-hidden">
            <StickyScroll content={content} />
        </section>
    );
}
