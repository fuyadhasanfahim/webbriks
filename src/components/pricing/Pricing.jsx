/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const data = [
    {
        id: 1,
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701983/egt1hz9ts2ngxapseg3p.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
        title: 'Background Removal',
        startingPrice: 0.49,
        canDeliver: 500,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Basic Background Removal',
                price: '$0.49',
            },
            {
                name: 'Advanced Background Removal',
                price: '$1.99',
            },
            {
                name: 'Transparent Background',
                price: '$0.99',
            },
            {
                name: 'White Background',
                price: '$0.49',
            },
            {
                name: 'Custom Background Replacement',
                price: '$2.99',
            },
            {
                name: 'Hair & Fur Background Removal',
                price: '$4.99',
            },
            {
                name: 'Group Photo Background Removal',
                price: '$5.99',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/olhxiczax99okzqxqhka.gif',
        title: 'Clipping Path',
        startingPrice: 0.49,
        canDeliver: 500,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Basic Clipping Path',
                price: '$0.49',
            },
            {
                name: 'Clipping Path With Shadows',
                price: '$0.99',
            },
            {
                name: 'Simple Clipping Path',
                price: '$0.99',
            },
            {
                name: 'Medium Clipping Path',
                price: '$1.99',
            },
            {
                name: 'Complex Clipping Path',
                price: '$3.99',
            },
            {
                name: 'Super Complex Clipping Path',
                price: '$7.99',
            },
            {
                name: 'Clipping Path Flatness',
                price: '$0.49',
            },
            {
                name: 'Extra Super Complex Clipping Path',
                price: '$14.99',
            },
            {
                name: 'Remove Unwanted Objects',
                price: '$1.25',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        id: 3,
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/icl5mcwxlcdqyvoifmfd.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/iqfl5ypuvzqdl6db41qp.jpg',
        title: 'Color Correction',
        startingPrice: 0.49,
        canDeliver: 500,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Color Correction',
                price: '$1.49',
            },
            {
                name: 'Exposure Correction',
                price: '$1.49',
            },
            {
                name: 'Color Conversion/Editing',
                price: '$6.99',
            },
            {
                name: 'Color Restoration For Damaged Photos',
                price: '$18.99',
            },
            {
                name: 'Product Photography Color Editing',
                price: '$4.99',
            },
            {
                name: 'Multi Path & Color Editing',
                price: '$1.49',
            },
            {
                name: 'Color Restoration',
                price: '$2.25',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        id: 4,
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/okfs8ndq0yz2rqoln9hc.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/rsbdmhmyrvebwr0lzcok.jpg',
        title: 'Photo Retouching',
        startingPrice: 1.49,
        canDeliver: 2000,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Headshots & Face Retouching',
                price: '$4.49',
            },
            {
                name: 'Beauty & Glamor Retouching',
                price: '$8.99',
            },
            {
                name: 'Body Retouching & Reshaping',
                price: '$8.99',
            },
            {
                name: 'Modeling Portrait Retouching',
                price: '$6.49',
            },
            {
                name: 'Digital Airbrushing',
                price: '$7.99',
            },
            {
                name: 'Portrait Cleaning & Enhancement',
                price: '$8.99',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        id: 5,
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/rgkgiv9ovvmc3zvhqrsv.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/m54ehpgiylrscmgiq30w.jpg',
        title: 'Ghost Mannequin',
        startingPrice: 1.49,
        canDeliver: 500,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Neck Joint On Ghost Mannequin',
                price: '$1.49',
            },
            {
                name: 'Bottom Joint On Ghost Mannequin',
                price: '$2.49',
            },
            {
                name: 'Sleeves Joint On Ghost Mannequin',
                price: '$2.49',
            },
            {
                name: 'Packshot Ghost Mannequin Effects',
                price: '$2.99',
            },
        ],
        href: '/services/photo-editing',
    },
    {
        id: 6,
        before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/kdky0jkzedwhumwr6bsy.jpg',
        after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
        title: 'Shadow Creation',
        startingPrice: 0.49,
        canDeliver: 500,
        discount: 40,
        priceAccordingComplexities: [
            {
                name: 'Drop Shadow Creation',
                price: '$0.49',
            },
            {
                name: 'Reflection Shadow Creation',
                price: '$0.99',
            },
            {
                name: 'Realistic Shadow Creation',
                price: '$1.49',
            },
            {
                name: 'Retain Original Shadow',
                price: '$0.49',
            },
            {
                name: 'Shadow Removal Service',
                price: '$0.99',
            },
            {
                name: 'Highlight & Shadow on Portrait',
                price: '$4.49',
            },
        ],
        href: '/services/photo-editing',
    },
];

const Pricing = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 text-center mb-12 lg:mb-20">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan that works best for your needs
                    </p>
                </div>

                <div className="space-y-8">
                    {data.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <section className="pt-10">
                    <div className="relative p-8 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl shadow-xl container">
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />

                        <div className="relative backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20">
                            <h3 className="text-3xl font-bold mb-8 text-white text-center animate-pulse">
                                {`Don't find the service you want?`}
                                <Sparkles className="inline-block ml-2 w-6 h-6" />
                            </h3>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button className="group relative w-48 h-14 overflow-hidden rounded-xl bg-white/90 text-orange-600 font-bold shadow-lg transition-all hover:scale-105">
                                    <div className="absolute inset-0 w-3 bg-orange-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
                                    <span className="relative group-hover:text-white transition-colors duration-200">
                                        Get a Quote
                                    </span>
                                </button>

                                <button className="group relative w-48 h-14 overflow-hidden rounded-xl bg-orange-600 text-white font-bold shadow-lg transition-all hover:scale-105">
                                    <div className="absolute inset-0 w-3 bg-white/90 transition-all duration-[250ms] ease-out group-hover:w-full" />
                                    <span className="relative group-hover:text-orange-600 transition-colors duration-200">
                                        Free Trial
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

const PriceInfo = ({ label, value, subLabel }) => (
    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-600 font-medium">{label}</p>
        <span className="text-3xl font-bold text-gray-900 my-1">
            {value} {label === 'Discount Upto' && '%'}
        </span>
        <p className="text-sm text-gray-500">{subLabel}</p>
    </div>
);

const ComplexityList = ({ complexities }) => (
    <div className="bg-gray-50 p-6 rounded-lg">
        <h5 className="font-semibold text-gray-900 mb-4">
            Pricing by Complexity
        </h5>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {complexities?.map(({ name, price }, index) => (
                <li key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                        {name}: <span className="font-semibold">{price}</span>
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

const ServiceCard = ({
    image,
    after,
    before,
    canDeliver,
    discount,
    priceAccordingComplexities,
    startingPrice,
    title,
    href,
}) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-4">
            <h4 className="text-xl font-bold text-white text-center">
                {title}
            </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-6 lg:p-8">
            <figure className="w-full md:w-1/3 flex-shrink-0">
                {image ? (
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto border border-black/5 rounded-lg"
                        />
                    </div>
                ) : (
                    <div className="aspect-auto relative rounded-lg overflow-hidden bg-gray-100">
                        <ReactCompareSlider
                            changePositionOnHover={true}
                            transition="duration-500"
                            className="absolute border border-black/5 rounded-lg"
                            itemOne={
                                <ReactCompareSliderImage
                                    src={before}
                                    alt={`Before ${title}`}
                                />
                            }
                            itemTwo={
                                <ReactCompareSliderImage
                                    src={after}
                                    alt={`After ${title}`}
                                />
                            }
                        />
                    </div>
                )}
            </figure>

            <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <PriceInfo
                        label="Starting From"
                        value={startingPrice}
                        subLabel="per image"
                    />
                    <PriceInfo
                        label="Daily Capacity"
                        value={canDeliver}
                        subLabel="images per day"
                    />
                    <PriceInfo
                        label="Discount Upto"
                        value={discount}
                        subLabel="on bulk order"
                    />
                </div>

                <ComplexityList complexities={priceAccordingComplexities} />

                <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                    <a
                        href={href}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
                    >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <a
                        href="/get-quote"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                    >
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Pricing;
