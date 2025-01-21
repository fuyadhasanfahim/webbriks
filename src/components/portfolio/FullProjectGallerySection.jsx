import Image from 'next/image';

const graphicsProjects = [
    {
        imgSrc: 'https://i.ibb.co.com/vCWQNb2/business-card-design.jpg',
        title: 'colorful letter',
        description: 'colorful letter with colorful orange blue design',
        link: '/portfolio/ecommerce-photo-editing',
    },
    {
        imgSrc: 'https://i.ibb.co.com/ySCxxbw/packaging-design.jpg',
        title: 'black white logo cog company',
        description: 'black white logo cog company',
    },
    {
        imgSrc: 'https://i.ibb.co.com/py9fCcJ/book-cover-design.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://i.ibb.co.com/sgrLHC1/advertisement-design.png',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://i.ibb.co.com/zJKC61T/t-shirt-design.jpg',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
    {
        imgSrc: 'https://i.ibb.co.com/5Yv59S8/stationery-design.jpg',
        title: 'Flyer design',
        description: 'Custom website design and development.',
        link: '/portfolio/abc-store-website',
    },
];

export default async function FullProjectGallerySection() {
    return (
        <section className="py-16 bg-gray-100" id="graphics-design">
            <div className="container mx-auto px-5 lg:px-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Graphics Design Portfolio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {graphicsProjects.map((project, index) => (
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
                                className="object-cover object-center bg-center bg-cover w-full h-full"
                            />
                            {/* <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="mt-auto">
                                    <a href={project.link}>
                                        <span className="inline-block bg-gray-800 text-gray-200 px-4 py-2 rounded-md hover:bg-orange-400 hover:text-gray-800 transition-colors cursor-pointer">
                                            View Details
                                        </span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
