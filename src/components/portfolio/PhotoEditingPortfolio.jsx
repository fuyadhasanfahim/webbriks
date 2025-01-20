import Image from 'next/image';

const photoProjects = [
    {
        imgSrc: 'https://iili.io/dNzwskl.jpg',
        title: 'eCommerce Photo Editing',
        description: 'Enhanced product images for better sales.',
        link: '/portfolio/ecommerce-photo-editing',
    },
    {
        imgSrc: 'https://iili.io/dNzwZIS.jpg',
        title: 'Drop Shadow Making',
        description: 'Realistic drop shadows for fashion products.',
        link: '/portfolio/drop-shadow-making',
    },
    {
        imgSrc: 'https://iili.io/ds6qKmJ.jpg',
        title: 'E-commerce Website',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/ds6qx1I.jpg',
        title: 'E-commerce Website',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/ds6qAes.jpg',
        title: 'E-commerce Website',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://iili.io/ds6qRmG.jpg',
        title: 'E-commerce Website',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
];

export default async function PhotoEditingPortfolio() {
    return (
        <section className="py-16 bg-gray-100" id="photo-editing">
            <div className="container mx-auto px-5 lg:px-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Photo Editing Portfolio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photoProjects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-lg bg-white overflow-hidden flex flex-col"
                        >
                            <Image
                                src={project.imgSrc}
                                alt={project.title}
                                layout="responsive"
                                width={700}
                                height={475}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
