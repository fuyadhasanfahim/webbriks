import Image from 'next/image';

export default function BlogCallToAction() {
    return (
        <section>
            <div className="flex flex-row items-center justify-center bg-white p-8 rounded-2xl shadow-lg text-center space-x-6 w-full">
                <Image
                    src="https://res.cloudinary.com/dny7zfbg9/image/upload/e03wpcgh3nrknc6fduhf.png"
                    alt="blog call to action"
                    width={300}
                    height={300}
                    priority
                    className="rounded-xl"
                />
                <div className="flex flex-col items-start space-y-4 max-w-md">
                    <h3 className="text-2xl font-bold text-gray-800">
                        Unlock Your Potential
                    </h3>
                    <p className="text-gray-600 text-start">
                        Get access to premium features with our free trial. No
                        credit card required! Start now and explore the best
                        tools for your success.
                    </p>
                    <a
                        href="/free-trail"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-lg shadow-md transition-all"
                    >
                        Start Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}
