import Image from 'next/image';
import HeroSection from './HeroSection';
import { teamMembers } from './data';

export default async function RootTeamPage() {
    return (
        <>
            <HeroSection />

            <section className="bg-white text-black py-10 md:py-20 lg:py-32 px-6 md:px-10">
                <div className="container space-y-6 md:space-y-10">
                    <div className="max-w-4xl">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                            We’re a diverse group of individuals brought
                            together by a shared passion for technology,
                            creative problem-solving, and a touch of
                            unconventional thinking.
                        </h3>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20">
                        <figure>
                            <Image
                                src={'/bg.jpg'}
                                alt=""
                                width={800}
                                height={467}
                                priority
                            />
                        </figure>

                        <div className="flex flex-row md:flex-col items-start gap-10">
                            <div>
                                <h1 className="heading text-orange-500">40</h1>
                                <p className="text-lg md:text-xl">Teammates</p>
                            </div>
                            <div>
                                <h1 className="heading text-orange-500">2</h1>
                                <p className="text-lg md:text-xl">Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="border border-b2" />
            </section>

            <section className="bg-white text-black py-10 md:py-20 lg:py-32 px-6 md:px-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {teamMembers.map(
                            (
                                { designation, image, name, description },
                                index
                            ) => (
                                <div
                                    key={index}
                                    className="flex items-center md:items-start flex-col gap-3"
                                >
                                    <figure>
                                        <Image
                                            src={image}
                                            alt={`${name}'s image`}
                                            width={300}
                                            height={300}
                                            className={'bg-[#B0E0E6]'}
                                        />
                                    </figure>
                                    <div>
                                        <h3 className="text-lg md:text-xl text-center md:text-start font-semibold">
                                            {name}
                                        </h3>
                                        <p className="text-sm md:text-base text-center md:text-start">
                                            {designation}
                                        </p>
                                    </div>
                                    <p className="text-center md:text-start">
                                        {description}
                                    </p>
                                </div>
                            )
                        )}
                        <div className="flex items-center md:items-start">
                            <div className="flex items-center justify-center text-center mx-auto md:mx-0 flex-col gap-3 p-4 bg-gray-200 w-[300px] h-[300px]">
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold">
                                        Join our team and make a difference!
                                    </h3>
                                    <p className="text-sm md:text-base">
                                        We are always looking for talented
                                        individuals who are passionate about
                                        technology and innovation.
                                    </p>
                                </div>
                                <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg">
                                    View Open Positions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
