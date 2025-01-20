import { HoverEffect } from '../ui/card-hover-effect';

const projects = [
    {
        title: 'Stripe',
        description:
            'A technology company that builds economic infrastructure for the internet.',
        link: 'https://stripe.com',
    },
    {
        title: 'Netflix',
        description:
            'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        link: 'https://netflix.com',
    },
    {
        title: 'Google',
        description:
            'A multinational technology company that specializes in Internet-related services and products.',
        link: 'https://google.com',
    },
    {
        title: 'Meta',
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: 'https://meta.com',
    },
    {
        title: 'Amazon',
        description:
            'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        link: 'https://amazon.com',
    },
    {
        title: 'Microsoft',
        description:
            'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
        link: 'https://microsoft.com',
    },
];

export default async function WhyPartnerWithUs() {
    return (
        <section className="py-10 md:py-20 bg-black px-6">
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col items-start justify-center">
                <div>
                    <div className="max-w-6xl">
                        <h1 className="text-white text-5xl font-semibold">
                            Why Partner with Musemind for Your Digital Product
                            Design?
                        </h1>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <HoverEffect items={projects} />
                    </div>
                </div>
            </div>
        </section>
    );
}
