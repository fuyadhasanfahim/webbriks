import Image from 'next/image';

const webProjects = [
    {
        imgSrc: 'https://iili.io/dsQhoNV.png',
        title: 'colorful letter',
        description: 'colorful letter with colorful orange blue design',
        link: '/portfolio/ecommerce-photo-editing',
    },
    {
        imgSrc: 'https://iili.io/dsQhxDB.png',
        title: 'black white logo cog company',
        description: 'black white logo cog company',
    },
    {
        imgSrc: 'https://iili.io/dsQhTV1.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/dsQhIoP.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/dsQhuiF.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/dsQhRKg.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
];

export default async function WebDesignEditingPortfolio() {
    return (
        <section className="py-16 bg-gray-100" id="photo-editing">
            <div className="container mx-auto px-5 lg:px-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Web Design & Development Portfolio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webProjects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-lg bg-white overflow-hidden flex flex-col"
                        >
                            <Image
                                src={project.imgSrc}
                                alt={project.title}
                                width={700}
                                height={475}
                                objectPosition="top"
                                className="object-cover w-full h-[475px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
