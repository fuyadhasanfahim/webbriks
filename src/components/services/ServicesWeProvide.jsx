'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: 'Photo Editing',
        description:
            'Our approach ensures every photo enhances and draws attention to its audience. We specialize in delivering high-quality, visually consistent images across the web and other platforms. Additionally, we maintain a cohesive and professional look for your visuals.',
        weProvide: [
            'Background removal',
            'Color Correction',
            'Corporate Identity',
            'Shadow Creation',
            'Invisible Mannequin Effect',
            'Product Photo Editing',
            'Photo Retouching',
            'Raster to Vector',
        ],
        image: 'https://i.ibb.co.com/QFVwv8y/clipping-path-gif.gif',
    },
    {
        id: 2,
        title: 'Web Design & Development',
        description:
            'A website works as a connector between service providers and their audiences. So, it should be designed perfectly to achieve its best output. Our skilled team combines creativity and functionality to craft websites that stand out. We will design websites that will help to grow your business.',
        weProvide: [
            'Ecommerce Website',
            'B2B Website Design',
            'Responsive Website Design',
            'Website Redesign',
            'Corporate Website Design',
            'Startup Website Design',
            'SaaS Website',
            'Landing Page',
        ],
        image: 'https://i.ibb.co.com/rvTS03m/natural-craft.png',
    },
    {
        id: 3,
        title: 'Graphic Design',
        description:
            'At Web Briks, We help brands create stunning designs that align with their brand identity. Our experts. We create visuals that resonate with your audience and make long-lasting impressions. Let us craft designs that inspire and help you achieve your goals today!',
        weProvide: [
            'Logo design',
            'Brochure Design',
            'Banner Design',
            'Business card design',
            'Calendar Design',
            'T-Shirt design ',
            'Advertising campaign design',
            'Packaging Design',
        ],
        image: 'https://i.ibb.co.com/Snt8SxN/social-media-design-01.png',
    },
    {
        id: 4,
        title: 'Video Editing',
        description: `Bring your vision to life with our expert video editing services. We craft videos that tell your story and leave a lasting impression. Let us help you achieve the professional, engaging videos you've always wanted. Start transforming your footage today!`,
        weProvide: [
            'Promotional Videos',
            'Branding videos',
            'YouTube Videos',
            'Reel videos',
            'Shorts Videos',
            'Tutorial videos ',
        ],
        image: 'https://i.ibb.co.com/BGGzh5z/video-editing.jpg',
    },
    {
        id: 5,
        title: 'Lead Generation',
        description: `Boost your sales pipeline with our B2B lead collection services. We leverage search engines, LinkedIn, and other trusted platforms to connect you with decision-makers and potential clients. We always deliver qualified leads that help to grow business. Get started today!`,
        weProvide: ['B2B Lead Generation', 'Industry-Specific Lead generation'],
        image: 'https://i.ibb.co.com/DWMhz9y/lead-generation.jpg',
    },
];

export default function ServicesWeProvide() {
    return (
        <>
            <section className="w-full">
                <div className="w-full flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`overflow-hidden ${
                                index % 2 === 0
                                    ? 'bg-white text-black'
                                    : 'bg-black text-white'
                            }`}
                        >
                            <div
                                className={`container flex flex-col-reverse lg:flex-row ${
                                    index % 2 === 0
                                        ? 'lg:flex-row'
                                        : 'lg:flex-row-reverse'
                                } items-center justify-between gap-10 space-x`}
                            >
                                <motion.div
                                    className="flex flex-col gap-y-6 max-w-2xl"
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <h1 className="text-5xl font-medium leading-10">
                                        {service.title}
                                    </h1>
                                    <p className="text-xl">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
                                        {service.weProvide.map((item, i) => (
                                            <li
                                                key={i}
                                                className={`text-lg font-semibold underline list-disc list-outside ${
                                                    index % 2 === 0
                                                        ? 'text-orange-500'
                                                        : 'text-orange-200'
                                                }`}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    className="flex-shrink-0"
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? 50 : -50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: 'easeOut',
                                    }}
                                >
                                    {service.title ===
                                    'Web Design & Development' ? (
                                        <div className="overflow-scroll overflow-x-hidden h-[400px]">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={600}
                                                height={400}
                                                priority
                                                className="aspect-auto"
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            priority
                                            className="aspect-auto"
                                        />
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
