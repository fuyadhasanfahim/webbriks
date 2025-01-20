import pricingData from '@/data/pricingData';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
    ImageComparison,
    ImageComparisonImage,
    ImageComparisonSlider,
} from '../ui/image-comparison';

export default async function PhotoEditingRates() {
    return (
        <section className="mx-auto w-full max-w-7xl py-12 lg:py-20 px-4">
            <div className="flex flex-col gap-10">
                {pricingData.map(
                    (
                        {
                            title,
                            startingPrice,
                            imagePerDay,
                            discount,
                            plans,
                            image,
                            before,
                            after,
                        },
                        index
                    ) => (
                        <div
                            key={index}
                            className="shadow ring-1 ring-black/5 rounded-xl"
                        >
                            <div className="bg-gradient-to-r from-orange-500 to-purple-400 text-white px-4 py-2 rounded-t-xl">
                                <h3 className="text-lg">{title}</h3>
                            </div>
                            <div className="bg-white flex flex-col lg:flex-row items-center gap-6 lg:gap-10 rounded-b-xl px-4 py-2">
                                <figure>
                                    {title === 'Clipping Path Services' ||
                                    title === 'Video Editing Services' ? (
                                        <Image
                                            src={image}
                                            alt={title}
                                            className="max-w-full h-full aspect-auto rounded-lg ring-1 ring-black/5"
                                            loading="lazy"
                                            width={400}
                                            height={400}
                                        />
                                    ) : (
                                        <ImageComparison
                                            className="w-[280px] md:w-[350px] xl:w-[400px] h-full aspect-square rounded-xl ring-1 ring-black/5 object-fill object-center"
                                            enableHover
                                            springOptions={{
                                                bounce: 0.3,
                                            }}
                                        >
                                            <ImageComparisonImage
                                                src={before}
                                                alt={title}
                                                position="right"
                                                width={400}
                                                height={400}
                                            />
                                            <ImageComparisonImage
                                                src={after}
                                                alt={title}
                                                position="left"
                                                width={400}
                                                height={400}
                                            />
                                            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm" />
                                        </ImageComparison>
                                    )}
                                </figure>

                                <div className="space-y-5">
                                    <div className="flex items-center justify-between gap-10 w-full">
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg">
                                                Price starts from
                                            </p>
                                            <p className="text-orange-500 font-semibold">
                                                ${startingPrice}
                                            </p>
                                            <p className="text-sm">per image</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg">
                                                We can deliver
                                            </p>
                                            <p className="text-orange-500 font-semibold">
                                                {imagePerDay}
                                            </p>
                                            <p className="text-sm">
                                                images/day
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg">
                                                Discount Upto
                                            </p>
                                            <p className="text-orange-500 font-semibold">
                                                {discount}%
                                            </p>
                                            <p className="text-sm">
                                                on bulk order
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                                        {plans.map(
                                            ({ complexity, price }, i) => (
                                                <li
                                                    key={i}
                                                    className="hover:bg-orange-500 hover:text-white transition-colors duration-200 px-2 py-1 rounded-md"
                                                >
                                                    <div className="flex items-center gap-6 justify-between">
                                                        <h4 className="flex items-center gap-1">
                                                            <ChevronRight className="size-3" />
                                                            <span>
                                                                {complexity}
                                                            </span>
                                                        </h4>
                                                        <p>{price}</p>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className="flex items-center gap-6 w-full mx-auto justify-center">
                                        <a
                                            href="/portfolio"
                                            className="px-4 py-2 border-2 border-black rounded-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
                                        >
                                            Portfolio
                                        </a>
                                        <a
                                            href="/get-quote"
                                            className="px-4 py-2 border-2 border-orange-500 bg-orange-500 hover:bg-orange-700 transition-colors duration-200 text-white rounded-lg"
                                        >
                                            Get Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
