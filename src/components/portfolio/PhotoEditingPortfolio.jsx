'use client';

import { motion } from 'framer-motion';

import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const images = [
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701983/egt1hz9ts2ngxapseg3p.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
    },
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/icl5mcwxlcdqyvoifmfd.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/iqfl5ypuvzqdl6db41qp.jpg',
    },
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/okfs8ndq0yz2rqoln9hc.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/rsbdmhmyrvebwr0lzcok.jpg',
    },
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/rgkgiv9ovvmc3zvhqrsv.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/m54ehpgiylrscmgiq30w.jpg',
    },
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/kdky0jkzedwhumwr6bsy.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
    },
    {
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/qfm0lt9kqdwxprs7ub8m.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
    },
];

export default function PhotoEditingPortfolio() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="padding-x padding-y !py-10 bg-gray-100">
            <div className="container">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Photo Editing Service
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {images.map(({ before, after }, index) => (
                            <motion.div
                                key={index}
                                variants={imageVariants}
                                className="overflow-hidden rounded-lg shadow"
                            >
                                <ReactCompareSlider
                                    changePositionOnHover={true}
                                    transition="duration-500"
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={before}
                                            alt={`Before image`}
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={after}
                                            alt={`After image`}
                                        />
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
