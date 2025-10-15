'use client';

import {
    ChevronDown,
    ShieldCheck,
    Zap,
    ClipboardList,
    Star,
    CheckCircle,
    Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { MovingCard } from '@/components/(sales)/image-editing-trail/MovingCard';
import YoutubeLite from '@/components/(sales)/image-editing-trail/YoutubeLite';
import { ImageEditingTrialData } from './data';
import TrialForm from '@/components/(sales)/image-editing-trail/TrialForm';
import { useState } from 'react';

const ReactCompareImage = dynamic(() => import('react-compare-image'), {
    ssr: false,
});

const testimonials = [
    {
        name: 'hepworthalan',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507051/b7o8r9mgcrtvfhfiaect.webp',
        country: 'Jersey',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507317/ytdytzn6zhj9bp9dyzjm.png',
        review: 'I’m very happy with the results of touching up 25 images. They were highly skilled, delivered exactly what I needed, and was easy to communicate with throughout the process. Turnaround time was quick, and they made sure I was satisfied with every detail. I’d definitely work with them again and highly recommend their services. Thanks',
        rating: 5,
    },
    {
        name: 'karyn_clements',
        image: null,
        initial: 'K',
        country: 'Australia',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507547/qhrsen615qhstpw5vywq.png',
        review: 'Thank you so much! This saved me so much editing time and stress. Very happy with the super quick turn around and the images look great as a result. Highly recommend for professional Photoshop editing services. Thank you again!',
        rating: 5,
    },
    {
        name: 'patick_martin',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507742/p1hc0fhzf38ju7vet6ee.webp',
        country: 'United States',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507816/umzkgugjnubwafi1ko3n.png',
        review: 'Truly impressed with their exceptional image editing skills! Their CREATIVITY and attention to detail not only met but EXCEEDED expectations with stunning visual appeal. Plus, their quick responsiveness made communication a breeze. Highly recommend! 👏',
        rating: 5,
    },
    {
        name: 'berqen',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507944/nfjvc2ffrcj72m8xqv1g.webp',
        country: 'Denmark',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507945/qwgyu3mpmz99osqtwqjg.png',
        review: 'Great job once again. Had to have the background removed from several images - some harder than others, and they went above and beyond delivering results, that matched my branded guidelines. Would 10/10 recommend.',
        rating: 5,
    },
    {
        name: 'joshuaccomms',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746508282/ozgqnyirjdqdcizqigym.webp',
        country: 'Australia',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507547/qhrsen615qhstpw5vywq.png',
        review: 'Excellent once again highly recommend. always goes above and beyond and is patient kind and polite. appreciate all the hard work and the fast turnaround - like lightning.',
        rating: 5,
    },
    {
        name: 'raymes72',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746508418/vmn8mou9ymhwxxgpa3wl.webp',
        country: 'United States',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507816/umzkgugjnubwafi1ko3n.png',
        review: 'Asad & his team members were very understanding of what I wanted to have done to some photos and was very quick in accomplishing edits and revisions. Definitely recommend his services and will be using his services again!',
        rating: 5,
    },
];

const services = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512208/eh1zxcl4opopi53it3p2.png',
        name: 'Background Removal',
        description:
            'Clean, precise background removal for professional product images',
        link: '/services/photo-editing',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512208/qtmnbd8zyfd9awowkuua.png',
        name: 'Clipping Path',
        description:
            'Perfect isolation with manual clipping paths for any shape',
        link: '/services/photo-editing',
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512208/diav83mdlr4qfyfyoq0r.png',
        name: 'Color Correction',
        description:
            'Professional color grading and correction for consistent branding',
        link: '/services/photo-editing',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512209/tj37rs0610n00yrnc2bj.png',
        name: 'Photo Retouching',
        description: 'Natural retouching that enhances without over-editing',
        link: '/services/photo-editing',
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512208/yk42gwebflnnuuubtent.png',
        name: 'Ghost Mannequin',
        description:
            'Professional ghost mannequin effects for apparel photography',
        link: '/services/photo-editing',
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512209/v9z7hbreuntvee8ukmpv.png',
        name: 'Shadow Creation',
        description:
            'Realistic natural and drop shadows for product presentation',
        link: '/services/photo-editing',
    },
    {
        id: 7,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512209/rcmx81qrecv22l2zqh4t.png',
        name: 'Product Photo Editing',
        description: 'Complete product image optimization for eCommerce',
        link: '/services/photo-editing',
    },
    {
        id: 8,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1760512208/n84rtjzcmt2amjydzhre.png',
        name: 'Raster to Vector',
        description: 'Precise vector conversion for logos and illustrations',
        link: '/services/photo-editing',
    },
];

function Reveal({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}

export default function ImageEditingTrialPage() {
    const [showAll, setShowAll] = useState(false);

    const visibleImages = showAll
        ? ImageEditingTrialData
        : ImageEditingTrialData.slice(0, 9);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="overflow-hidden">
            {/* Hero Section */}
            <section
                className="relative text-white"
                style={{
                    background:
                        'radial-gradient(1200px 600px at 10% 10%, rgba(0,166,166,0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(255,106,0,0.2), transparent 60%), linear-gradient(180deg,#0B0F12, #0B1115)',
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                >
                    <div
                        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
                        style={{ background: '#00A6A6' }}
                    />
                    <div
                        className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
                        style={{ background: '#FF6A00' }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0,rgba(255,255,255,0.03)_1px)] bg-[size:100%_40px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-32 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <header className="space-y-6">
                                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur">
                                    <Sparkles className="h-4 w-4" /> 3 Free
                                    Edits — No Credit Card
                                </p>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                                    Perfectly Edited{' '}
                                    <span className="bg-[#FF6A00] bg-clip-text text-transparent">
                                        Photo Editing Services
                                    </span>{' '}
                                    Within 6-12 Hours
                                </h1>
                                <p className="md:text-lg text-gray-600 max-w-2xl">
                                    We provide hand-drawn clipping path, Color
                                    correction, image retouching, ghost
                                    mannequin, and eCommerce image editing
                                    services. Get pixel-perfect photo editing
                                    services whenever you need.
                                </p>

                                <div className="flex items-center flex-col sm:flex-row gap-5">
                                    <button
                                        onClick={() =>
                                            scrollToSection('trial-form')
                                        }
                                        className="btn-orange"
                                    >
                                        Get My Free Edits
                                    </button>

                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById('portfolio')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                })
                                        }
                                        className="btn-teal"
                                    >
                                        View Portfolio
                                    </button>
                                </div>

                                {/* Trust row */}
                                <div className="mt-4 flex flex-wrap items-center gap-4 text-white/75">
                                    <span className="inline-flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-400" />{' '}
                                        1,000+ 5★ Reviews
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <ShieldCheck className="h-4 w-4 text-emerald-300" />{' '}
                                        24/7 Support
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <Zap className="h-4 w-4 text-orange-300" />{' '}
                                        Lightning Turnaround
                                    </span>
                                </div>
                            </header>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border-2 border-white/10" />
                                <YoutubeLite videoId="gR5GZFgC314" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-12 hidden md:flex justify-center">
                        <button
                            onClick={() =>
                                document
                                    .getElementById('why')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            aria-label="Scroll down"
                            className="group inline-flex items-center gap-2 text-white/70 hover:text-white"
                        >
                            <ChevronDown className="h-6 w-6 animate-bounce" />
                            See why teams choose Web Briks
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-[#1E1E1E] mb-4 text-4xl md:text-5xl font-lato flex items-center gap-2 justify-center">
                            What Our{' '}
                            <span className="text-transparent bg-clip-text bg-pri font-normal">
                                Clients Say
                            </span>
                        </h2>
                        <p className="md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s
                            what photographers, eCommerce brands, and agencies
                            have to say about our service.
                        </p>
                    </div>
                    <MovingCard items={testimonials} speed="slow" />
                </div>
            </section>

            {/* Proof Section */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-base-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] !leading-[1.1]">
                                Stop Losing a Week to Image Editing. Start{' '}
                                <span className="text-transparent bg-clip-text bg-pri">
                                    Selling Faster
                                </span>{' '}
                                with Your Virtual Editing Studio
                            </h3>

                            <div className="space-y-6">
                                {[
                                    `A quick potshot shouldn't mean a week of tedious editing. We are your dedicated, virtual photo editing and design studio, built for speed and perfection.`,
                                    `We handle everything from complex eCommerce product background removal to intricate sports, head shot, and portrait retouching. Our professional service is available 24/7, with guaranteed turnaround time.`,
                                    `Don't just take our word for it. Send us your toughest image right now. We'll deliver the pixel-perfect edit for free, so you can see the quality and experience the speed before you ever spend a dollar.`,
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        {/* <CheckCircle className="w-5 h-5 text-pri" /> */}
                                        <span className="text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#00A6A6]/10 border border-[#00A6A6]/20 rounded-2xl p-6">
                                <p className="text-lg text-gray-700">
                                    <span className="font-bold text-pri">
                                        That&apos;s why we built a scalable
                                        system
                                    </span>{' '}
                                    trusted by top brands, delivering{' '}
                                    <span className="font-semibold">
                                        over 10 million edited images
                                    </span>{' '}
                                    with consistent quality, speed, and
                                    reliability.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl"></div>
                            <figure className="relative rounded-2xl overflow-hidden border border-gray-200">
                                <ReactCompareImage
                                    leftImage={
                                        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746702381/gt6xyngs6eowplsorsmy.jpg'
                                    }
                                    rightImage={
                                        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746702380/pzhth6vtxzdvktqhosyp.jpg'
                                    }
                                    hover={true}
                                    leftImageLabel="Before"
                                    rightImageLabel="After"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4 space-y-8">
                    <h2 className="text-[#1E1E1E] mb-4 text-4xl md:text-5xl font-lato flex items-center gap-2 justify-center">
                        Professional{' '}
                        <span className="text-transparent bg-clip-text bg-pri font-normal">
                            Photo Editing Services
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <figure className="px-8 pt-8">
                                    <div className="relative w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </figure>

                                <div className="card-body items-center text-center">
                                    <h3 className="card-title text-xl font-bold text-[#1E1E1E]">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn-orange">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section
                className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] text-white"
                id="why"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Why Choose{' '}
                        <span className="text-transparent bg-clip-text bg-[#FF6A00]">
                            Web Briks?
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {[
                            'Successfully Completed 60,000+ image editing projects',
                            '24/7 dedicated customer support',
                            'Daily 2,000+ image editing capacity',
                            '50+ high-skilled professional editors',
                            '10+ years of industry experience',
                            '1,000+ 5-star reviews across platforms',
                            'Delivered 10M+ images for eCommerce brands, photographers, and agencies',
                            'Consistent high-quality results with fast turnaround time',
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                            >
                                <CheckCircle className="flex-shrink-0 w-8 h-8 text-[#FF6A00]" />
                                <p className="text-lg font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-base-100" id="portfolio">
                <div className="container mx-auto px-4 space-y-8">
                    <h2 className="text-[#1E1E1E] mb-4 text-4xl md:text-5xl font-lato flex items-center gap-2 justify-center">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-pri font-normal">
                            Portfolio
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleImages.map(({ before, after }, index) => (
                            <figure
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#00A6A6] to-[#FF6A00] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                                <ReactCompareImage
                                    leftImage={before}
                                    rightImage={after}
                                    hover={true}
                                    leftImageLabel="Before"
                                    rightImageLabel="After"
                                />
                            </figure>
                        ))}
                    </div>

                    {!showAll && (
                        <div className="flex justify-center mt-12">
                            <button
                                className="btn-orange"
                                onClick={() => setShowAll(true)}
                            >
                                Load More Work Samples
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <div id="trial-form">
                <TrialForm />
            </div>
        </section>
    );
}
