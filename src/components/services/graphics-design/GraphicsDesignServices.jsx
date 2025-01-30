'use client';

import Image from 'next/image';

const graphicsDesignServices = [
    {
        id: 1,
        title: 'Logo Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/ngkpdwxusa43ycleumts.jpg',
    },
    {
        id: 2,
        title: 'Business Cards Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
    },
    {
        id: 3,
        title: 'Stationery Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/v8toq1bbc4hfe4otygyp.jpg',
    },
    {
        id: 4,
        title: 'T-Shirts Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711106/dlozgtxdh1dkohh0jj4c.jpg',
    },
    {
        id: 5,
        title: 'Advertisement Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711123/bj7cbprxnbyrpx2e7q6y.png',
    },
    {
        id: 6,
        title: 'Social Media Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711111/eqeryqawa6gnebws8qqs.png',
    },
    {
        id: 7,
        title: 'Packaging Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711114/srvrmldznif0hbz3e7ol.jpg',
    },
    {
        id: 8,
        title: 'Book Cover Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711102/lyuwa7xguk1t6c0yvccb.png',
    },
    {
        id: 9,
        title: 'Flyer Design',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711116/xp4m3xdk8orlkabu75z2.png',
    },
];

export default function GraphicsDesignServices() {
    return (
        <section className="bg-gray-200 text-black padding-x padding-y overflow-hidden">
            <div className="container space-y">
                <div className="mx-auto max-w-4xl">
                    <h1 className="heading-one text-center">
                        Best Graphics Design Services at Affordable Pricing
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                    {graphicsDesignServices.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col gap-5 w-full max-w-[600px] mx-auto"
                        >
                            <figure className="w-full bg-white">
                                <Image
                                    src={service.image}
                                    alt={`Example of ${service.title}`}
                                    width={600}
                                    height={400}
                                    priority
                                />
                            </figure>
                            <h3 className="heading-three">{service?.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
