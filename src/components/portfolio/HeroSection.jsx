export default async function HeroSection() {
    return (
        <section
            data-aos="fade-up"
            style={{
                backgroundImage: "url('https://iili.io/dhd9CUg.jpg')",
            }}
            className="bg-no-repeat bg-center bg-cover"
        >
            <div className="text-white py-10 lg:py-16 text-center bg-about-top">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
                    <p className="text-xl mb-6">
                        Showcasing our Expertise and Creative Solutions
                    </p>
                </div>
            </div>
        </section>
    );
}
