'use client';

import Image from 'next/image';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const photoEditingServices = [
    {
        id: 1,
        title: 'Background Removal',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701983/egt1hz9ts2ngxapseg3p.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
        },
    },
    {
        id: 2,
        title: 'Clipping Path',
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/olhxiczax99okzqxqhka.gif',
    },
    {
        id: 3,
        title: 'Color Correction',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/icl5mcwxlcdqyvoifmfd.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/iqfl5ypuvzqdl6db41qp.jpg',
        },
    },
    {
        id: 4,
        title: 'Photo Retouching',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/okfs8ndq0yz2rqoln9hc.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/rsbdmhmyrvebwr0lzcok.jpg',
        },
    },
    {
        id: 5,
        title: 'Ghost Mannequin',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/rgkgiv9ovvmc3zvhqrsv.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/m54ehpgiylrscmgiq30w.jpg',
        },
    },
    {
        id: 6,
        title: 'Shadow Creation',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/kdky0jkzedwhumwr6bsy.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
        },
    },
    {
        id: 7,
        title: 'Product Photo Editing',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/qfm0lt9kqdwxprs7ub8m.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
        },
    },
    {
        id: 8,
        title: 'Raster to Vector',
        image: {
            before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737702001/p6kiukfq6iptpdabd6uj.jpg',
            after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701996/baua7syjbxilvcop0tvp.jpg',
        },
    },
];

export default function PhotoEditingServices() {
    const renderServiceImage = (service) => {
        if (!service?.image) return null;

        if (typeof service.image === 'string') {
            return (
                <Image
                    src={service.image}
                    alt={`Example of ${service.title}`}
                    width={600}
                    height={400}
                    priority
                    unoptimized
                />
            );
        }

        if (service.image.before && service.image.after) {
            return (
                <ReactCompareSlider
                    changePositionOnHover={true}
                    transition="duration-500"
                    itemOne={
                        <ReactCompareSliderImage
                            src={service?.image.before}
                            alt={`Before ${service.title}`}
                        />
                    }
                    itemTwo={
                        <ReactCompareSliderImage
                            src={service?.image.after}
                            alt={`After ${service?.title}`}
                        />
                    }
                />
            );
        }

        return null;
    };

    return (
        <section className="bg-gray-200 text-black padding-x padding-y overflow-hidden">
            <div className="container space-y">
                <div className="mx-auto max-w-4xl">
                    <h1 className="heading-one text-center">
                        Stunning visuals to make a lasting impression
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                    {photoEditingServices.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col gap-5 w-full max-w-[600px] mx-auto"
                        >
                            {renderServiceImage(service)}
                            <h3 className="heading-three">{service?.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
