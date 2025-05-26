'use client';

import { ClipboardList, Star } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PopupModal from '@/components/(sales)/image-editing-trail/modal';
import { MovingCard } from '@/components/(sales)/image-editing-trail/MovingCard';
import YoutubeLite from '@/components/(sales)/image-editing-trail/YoutubeLite';

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
    },
    {
        name: 'karyn_clements',
        image: null,
        initial: 'K',
        country: 'Australia',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507547/qhrsen615qhstpw5vywq.png',
        review: 'Thank you so much! This saved me so much editing time and stress. Very happy with the super quick turn around and the images look great as a result. Highly recommend for professional Photoshop editing services. Thank you again!',
    },
    {
        name: 'patick_martin',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507742/p1hc0fhzf38ju7vet6ee.webp',
        country: 'United States',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507816/umzkgugjnubwafi1ko3n.png',
        review: 'Truly impressed with their exceptional image editing skills! Their CREATIVITY and attention to detail not only met but EXCEEDED expectations with stunning visual appeal. Plus, their quick responsiveness made communication a breeze. Highly recommend! 👏',
    },
    {
        name: 'berqen',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507944/nfjvc2ffrcj72m8xqv1g.webp',
        country: 'Denmark',
        flag: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507945/qwgyu3mpmz99osqtwqjg.png',
        review: 'Great job once again. Had to have the background removed from several images - some harder than others, and they went above and beyond delivering results, that matched my branded guidelines. Would 10/10 recommend.',
    },
];

export default function ImageEditingTrialPage() {
    return (
        <section className="overflow-hidden">
            <PopupModal />

            <section className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            className="relative z-10 space-y-6"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                3 Free Photo Edits to Prove Our Quality —{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                    No Commitment
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                                With{' '}
                                <span className="font-semibold">
                                    over 10 million images edited across 60,000+
                                    jobs
                                </span>
                                , our quality speaks for itself. Try 3 edits
                                free — and see the difference.
                            </p>

                            <button
                                className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center"
                                onClick={() =>
                                    document
                                        .getElementById('my_modal_3')
                                        .showModal()
                                }
                            >
                                <ClipboardList className="w-5 h-5 mr-2" />
                                <span>Get My Free Edits</span>
                            </button>
                        </div>

                        <div
                            className="relative"
                        >
                            <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border-2 border-orange-500/30 z-0"></div>
                                <YoutubeLite videoId="gR5GZFgC314" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <MovingCard items={testimonials} speed="slow" />

                    <div
                        className="flex flex-col justify-center pt-16 text-center"
                    >
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                            Want this kind of result?
                        </h4>
                        <button
                            className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center mx-auto"
                            onClick={() =>
                                document
                                    .getElementById('my_modal_3')
                                    .showModal()
                            }
                        >
                            <ClipboardList className="w-5 h-5 mr-2" />
                            <span>Get My Free Edits</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                No More Guesswork.{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                                    Flawless Photo Editing
                                </span>{' '}
                                from Experts.
                            </h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    In today&apos;s fast-moving digital world,
                                    high-quality visuals aren&apos;t a luxury —
                                    they&apos;re a necessity.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Whether you&apos;re an eCommerce manager
                                    juggling thousands of product images, a
                                    photographer aiming to focus more on
                                    shooting than retouching, or an agency owner
                                    struggling to meet tight deadlines — we get
                                    it.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That&apos;s why we built a scalable photo
                                    editing system trusted by top brands and
                                    agencies, with{' '}
                                    <span className="font-semibold">
                                        over 10 million images edited across
                                        60,000+ jobs
                                    </span>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Now, we want to show you what we can do —
                                    starting with 3 high-end edits, completely
                                    free.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    No commitments. No credit card. Just
                                    quality, speed, and consistency from day
                                    one.
                                </p>
                            </div>
                        </div>

                        <figure
                            className="relative rounded-2xl overflow-hidden"
                        >
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
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
                    >
                        Why{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Choose Web Briks?
                        </span>
                    </h2>

                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                    >
                        <figure
                            className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1748235825/mc5dxbuxvjhmvmviltdf.jpg"
                                alt="Photo editing example"
                                fill
                                loading="lazy"
                                className="object-cover rounded-2xl"
                            />
                        </figure>

                        <div
                            className="space-y-5 text-gray-700 max-w-lg mx-auto"
                        >
                            {[
                                'Trusted photo editing partner for 60,000+ projects across the globe',
                                'Edited over 10 million images for eCommerce brands, photographers, and agencies',
                                'Powering photo workflows for top studios and fast-scaling retailers',
                                '10+ years of experience delivering consistent, high-end results under tight deadlines',
                                'Lightning-fast turnaround times without sacrificing quality',
                                'Dedicated team of professional editors trained in eCommerce, fashion, product, and portrait retouching',
                                "Flexible and scalable — from 5 images to 5,000+, we've got you covered",
                                'Free trial available: 3 expertly edited images, 100% free with no commitment',
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3 text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                    >
                        <div
                            className="group"
                        >
                            <div className="border rounded-2xl p-6 shadow space-y-4 md:space-y-6">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <figure className="relative">
                                            <Image
                                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1746508282/ozgqnyirjdqdcizqigym.webp"
                                                alt="Testimonial image"
                                                width={64}
                                                height={64}
                                                priority
                                                className="rounded-full ring-2 ring-orange-500 ring-offset-2"
                                            />
                                        </figure>

                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-lg md:text-xl font-medium">
                                                joshuaccomms
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <figure className="relative">
                                                    <Image
                                                        src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507547/qhrsen615qhstpw5vywq.png"
                                                        alt="Testimonial image"
                                                        width={24}
                                                        height={24}
                                                        priority
                                                        className="border"
                                                    />
                                                </figure>

                                                <h6>Australia</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        Excellent once again highly recommend.
                                        always goes above and beyond and is
                                        patient kind and polite. appreciate all
                                        the hard work and the fast turnaround -
                                        like lightning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group"
                        >
                            <div className="border rounded-2xl p-6 shadow space-y-4 md:space-y-6">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <figure className="relative">
                                            <Image
                                                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1746508418/vmn8mou9ymhwxxgpa3wl.webp"
                                                alt="Testimonial image"
                                                width={64}
                                                height={64}
                                                priority
                                                className="rounded-full ring-2 ring-orange-500 ring-offset-2"
                                            />
                                        </figure>

                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-lg md:text-xl font-medium">
                                                raymes72
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <figure className="relative">
                                                    <Image
                                                        src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1746507816/umzkgugjnubwafi1ko3n.png"
                                                        alt="Testimonial image"
                                                        width={24}
                                                        height={24}
                                                        priority
                                                        className="border"
                                                    />
                                                </figure>

                                                <h6>United States</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        Asad & his team members were very
                                        understanding of what I wanted to have
                                        done to some photos and was very quick
                                        in accomplishing edits and revisions.
                                        Definitely recommend his services and
                                        will be using his services again!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <div
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to experience professional photo editing?
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get started with 3 free edits today — no credit card
                            required, no commitment.
                        </p>
                        <button
                            className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-3 flex items-center mx-auto"
                            onClick={() =>
                                document
                                    .getElementById('my_modal_3')
                                    .showModal()
                            }
                        >
                            <ClipboardList className="w-5 h-5 mr-2" />
                            <span>Get My Free Edits</span>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}
