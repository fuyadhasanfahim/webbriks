export default function OurFounders() {
    return (
        <section className="py-16 text-gray-800" data-aos="fade-up">
            <div className="container mx-auto">
                <div className="">
                    <h2 className="text-3xl font-bold">Our Founders</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="8 0 200 20"
                        fill="none"
                        className="w-full max-w-[280px] md:max-w-[280px] mb-8"
                    >
                        <path
                            d="M10 10c20 5 40 2 60 0s40-10 60-5"
                            stroke="#FFA500"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
                            }}
                        />
                    </svg>
                    <p className="text-lg leading-relaxed mb-12">
                        {`Web Briks was started by four visionary people: Md Ashaduzzaman, Md Ariful Islam, Masum Kamal, and Kabir Hossain. They had one goal—to build a company that provides top-quality outsourcing services. `}
                    </p>

                    <p className="text-lg leading-relaxed mb-12">
                        {`Md Ashaduzzaman, as the Founder and CEO, leads the team and plays a key role. His leadership and innovative ideas help the company grow every day. The four founders work hard together to build Web Briks into a trusted name in the outsourcing industry. Their focus is always on serving clients and delivering great results. `}
                    </p>
                </div>
            </div>
        </section>
    );
}
