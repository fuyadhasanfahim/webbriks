'use client';

import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        icon: <Quote />,
        title: 'Excellent Service',
        description:
            'Webbriks LLC has been a game-changer for our e-commerce business. Their photo editing services are top-notch, and the turnaround time is impressive.',
        name: 'Michael Scott',
        rating: 5,
    },
    {
        icon: <Quote />,
        title: 'Great Experience',
        description:
            'The graphic design team at Webbriks LLC exceeded our expectations! They brought our ideas to life with stunning visuals and professional quality.',
        name: 'David Brown',
        rating: 5,
    },
    {
        icon: <Quote />,
        title: 'Highly Recommend',
        description:
            'Working with Webbriks LLC on our website redesign was an absolute pleasure. Their team created a visually appealing and user-friendly experience.',
        name: 'Emily Johnson',
        rating: 5,
    },
    {
        icon: <Quote />,
        title: 'Outstanding Support',
        description:
            'Their customer service is fantastic! Any questions or concerns we had were addressed promptly. Highly recommended!',
        name: 'Sophia Martinez',
        rating: 5,
    },
    {
        icon: <Quote />,
        title: 'Creative and Professional',
        description:
            'I was blown away by the creativity and professionalism of Webbriks LLC. Their designs helped boost our brand identity significantly.',
        name: 'James Wilson',
        rating: 5,
    },
    {
        icon: <Quote />,
        title: 'Fast and Reliable',
        description:
            'The turnaround time was incredibly fast, and the quality exceeded our expectations. Thank you, Webbriks LLC!',
        name: 'Olivia Taylor',
        rating: 5,
    },
];

export default function Testimonial() {
    return (
        <section className="padding-y bg-gray-200">
            <div className="container">
                <h1 className="heading-one text-center mb-6 md:mb-10 !font-semibold">
                    What Our Clients Say
                </h1>
                <p className="description text-center mb-6">
                    Hear from our satisfied clients about their experience with
                    Webbriks LLC.
                </p>
            </div>
            <div className="relative">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    pauseOnHover
                />
            </div>
        </section>
    );
}
