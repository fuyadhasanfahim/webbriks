/* eslint-disable @next/next/no-img-element */
'use client';

import ReactCompareImage from 'react-compare-image';
import { photoEditingPortfolioData } from './data';

const RootPhotoEditingService = () => {
    return (
        <section className="padding-x padding-y bg-white">
            <div className="container">
                <h2 className="heading-one text-center">
                    Our Photo Editing Portfolio
                </h2>

                <div className="mt-8 md:mt-12 space-y-10">
                    {photoEditingPortfolioData.map(
                        ({ servicename, images }, index) => (
                            <section key={index} className="space-y-6">
                                <h3 className="text-xl font-bold text-white text-center bg-gradient-to-r from-orange-500 to-purple-600 p-4 py-2 px-6 rounded-xl">
                                    {servicename}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                                    {images.map(
                                        ({ before, after, image }, index) => (
                                            <figure
                                                key={index}
                                                className="group relative overflow-hidden rounded-xl border border-black/5 h-fit"
                                            >
                                                {image ? (
                                                    <div className="relative rounded-lg overflow-hidden">
                                                        <img
                                                            src={image}
                                                            alt={`this is ${index} image`}
                                                            className="w-full h-auto border border-black/5 rounded-lg"
                                                        />
                                                    </div>
                                                ) : (
                                                    <ReactCompareImage
                                                        leftImage={before}
                                                        rightImage={after}
                                                        hover={true}
                                                        leftImageLabel="Before"
                                                        rightImageLabel="After"
                                                    />
                                                )}
                                            </figure>
                                        )
                                    )}
                                </div>
                            </section>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default RootPhotoEditingService;
