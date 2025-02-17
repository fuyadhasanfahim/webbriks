'use client';

import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const data = [
    {
        servicename: 'eCommerce Product Photo Editing Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/vla3vdbel0optl11zdr0.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/osvwbox1adm4a5ye5ngq.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/pllufz3naet3q1k6wfy9.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794510/n7zegw7p9tbvtgqot9ux.jpg',
            },
        ],
    },
    {
        servicename: 'Background Removal Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701983/egt1hz9ts2ngxapseg3p.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/pptd8qdsazjtypdb9eoz.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794507/t26c2sh3sjdzhiwtfjka.jpg',
            },
        ],
    },
    {
        servicename: 'Color Correction Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/icl5mcwxlcdqyvoifmfd.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/iqfl5ypuvzqdl6db41qp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/mbzutzvtoadrsznyddeb.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/l50kz23uktndyzxim8ix.jpg',
            },
        ],
    },
    {
        servicename: 'Photo Retouching Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/okfs8ndq0yz2rqoln9hc.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/rsbdmhmyrvebwr0lzcok.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/ofzvk7btgstbyypvjfdn.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/klab00cib4wglgu08ix8.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/ujlinhiuxubnqicsrngz.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/fyhs45gubjkaeusqfsbo.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/muqhklysbjfqobja2fi7.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/jahzgufwntfhwzd4jgad.jpg',
            },
        ],
    },
    {
        servicename: 'Ghost Mannequin Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/rgkgiv9ovvmc3zvhqrsv.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/m54ehpgiylrscmgiq30w.jpg',
            },
        ],
    },
    {
        servicename: 'Hair Masking Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794510/wzdf7w9myezdvujgpfab.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794509/ygbxcbikfpt8cnruzkat.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/v820rbutwmhhoix6h1af.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739794508/tvkkufagwycszyxmomsa.jpg',
            },
        ],
    },
    {
        servicename: 'Shadow Adding Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/kdky0jkzedwhumwr6bsy.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
            },
        ],
    },
    {
        servicename: 'Product Photo Editing',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/qfm0lt9kqdwxprs7ub8m.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
            },
        ],
    },
];

const RootPhotoEditingService = () => {
    return (
        <section className="padding-x padding-y bg-white">
            <div className="container">
                <h2 className="heading-one text-center">
                    Our Photo Editing Services
                </h2>

                <div className="mt-8 md:mt-12 space-y-10">
                    {data.map(({ servicename, images }, index) => (
                        <section key={index} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                {servicename}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                                {images.map(({ before, after }, index) => (
                                    <figure
                                        key={index}
                                        className="group relative overflow-hidden rounded-xl border border-gray-200 h-fit shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <ReactCompareSlider
                                            changePositionOnHover
                                            className="rounded-xl h-auto"
                                            transition="ease-in-out duration-500"
                                            itemOne={
                                                <ReactCompareSliderImage
                                                    src={before}
                                                    alt="Before image"
                                                    className="rounded-xl"
                                                />
                                            }
                                            itemTwo={
                                                <ReactCompareSliderImage
                                                    src={after}
                                                    alt="After image"
                                                    className="rounded-xl"
                                                />
                                            }
                                        />
                                    </figure>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RootPhotoEditingService;
