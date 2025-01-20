import BookingSection from './BookingSection';

export default async function ReadyToPartnerWithUs() {
    return (
        <section className="bg-gray-300 text-black space-x">
            <div className="container space-y">
                <div className="max-w-4xl">
                    <h1 className="heading">
                        Are you ready to partner with us?
                    </h1>
                </div>

                <div className="bg-black text-white p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl">
                    <div className="space-y-6">
                        <h3 className="text-lx md:text-2xl lg:text-3xl xl:text-4xl">
                            Book a call
                        </h3>
                        <p className="max-w-[500px]">
                            Have a frank chat with our Customer Success Manager
                            and Design Director for fun. Straightforward
                            discussion of your ideas—no overwhelming tech jargon
                            unless you’re into that!
                        </p>
                    </div>

                    <BookingSection />
                </div>
            </div>
        </section>
    );
}
