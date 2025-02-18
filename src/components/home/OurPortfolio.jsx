'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ReactCompareImage from 'react-compare-image';

const data = [
    {
        title: 'Photo Editing Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811590/drc5yg51eqbei9yvhy9z.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811590/ekqwnjentkzagpfhfctt.jpg',
                alt: 'photo editing example 1',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811586/vrjl4cwjfwqqkhc59rnq.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811586/ynhakbqvusd112n9jart.jpg',
                alt: 'photo editing example 2',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811582/kmsezrwg9oi9k2bakire.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811582/ed9blee6tbs2mtjyxehs.jpg',
                alt: 'photo editing example 3',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811572/vwd7yoyy21zz0kvvlorq.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811571/kbeqj3qqzdqjgeuphp0m.jpg',
                alt: 'photo editing example 4',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811571/bmrldgsgzcd5455uzsfb.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811570/t70gmxqiiikwspvaetj4.jpg',
                alt: 'photo editing example 5',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811570/su0phmt3s26l1cshmzow.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811570/su0phmt3s26l1cshmzow.jpg',
                alt: 'photo editing example 6',
            },
        ],
        isComparing: true,
        isRedirectable: true,
        link: '/portfolio/photo-editing-service',
    },
    {
        title: 'Web Design & Development Service',
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627919/vojdmpkxcgrficdf7auk.svg',
                alt: 'photo editing example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627469/pusocnvc8ggz5jpidid2.jpg',
                alt: 'photo editing example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737627330/pjhs2ojfquxy8unkux0k.webp',
                alt: 'photo editing example 3',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737624746/wenbven6b27bc6omqaqr.svg',
                alt: 'photo editing example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626819/fcd5qheu55ikz5detmfk.svg',
                alt: 'photo editing example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737626741/xhlo4zyjqcls00z0frj1.png',
                alt: 'photo editing example 5',
            },
        ],
        isComparing: false,
        isRedirectable: false,
        link: '/portfolio/',
    },
    {
        title: 'Graphic Design Service',
        images: [
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711099/wwwxqyz4stxlbhokpcyd.jpg',
                alt: 'graphic design example 1',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711102/lyuwa7xguk1t6c0yvccb.png',
                alt: 'graphic design example 2',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711106/dlozgtxdh1dkohh0jj4c.jpg',
                alt: 'graphic design example 3',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/v8toq1bbc4hfe4otygyp.jpg',
                alt: 'graphic design example 4',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711109/ngkpdwxusa43ycleumts.jpg',
                alt: 'graphic design example 5',
            },
            {
                src: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737711114/srvrmldznif0hbz3e7ol.jpg',
                alt: 'graphic design example 6',
            },
        ],
        isComparing: false,
        isRedirectable: false,
        link: '/portfolio/',
    },
];

export default function OurPortfolio() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="bg-white padding-x padding-y">
            <div className="container">
                <div className="mx-auto mb-8">
                    <h1 className="heading-one text-center !font-semibold">
                        Our Portfolio
                    </h1>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                    {data.map((service, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                                selectedIndex === index
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {service.title}
                        </motion.button>
                    ))}
                </div>

                <div className="mt-8">
                    <h2 className="heading-two text-center mb-6">
                        {data[selectedIndex].title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data[selectedIndex].isComparing
                            ? data[selectedIndex].images.map(
                                  ({ before, after, alt }, index) => (
                                      <motion.div
                                          key={index}
                                          className="rounded-lg shadow-md"
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{
                                              opacity: 1,
                                              scale: 1,
                                              transition: { duration: 0.5 },
                                          }}
                                      >
                                          <ReactCompareImage
                                              leftImage={before}
                                              rightImage={after}
                                              hover={true}
                                          />
                                      </motion.div>
                                  )
                              )
                            : data[selectedIndex].images.map(
                                  ({ src, alt }, index) => (
                                      <motion.figure
                                          key={index}
                                          className="rounded-lg shadow-md"
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{
                                              opacity: 1,
                                              scale: 1,
                                              transition: { duration: 0.5 },
                                          }}
                                      >
                                          <Image
                                              src={src}
                                              alt={alt}
                                              width={400}
                                              height={400}
                                              priority
                                              className="rounded-lg shadow-md"
                                          />
                                      </motion.figure>
                                  )
                              )}
                    </div>

                    {data[selectedIndex].isRedirectable && (
                        <div className="flex justify-center mt-6">
                            <a href={data[selectedIndex].link}>
                                <motion.button
                                    className="flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span>View More</span>
                                    <ChevronRight />
                                </motion.button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
