import Image from 'next/image';
import CallToActionForm from './CallToActionForm';

export default function CallToAction({ title, className }) {
    return (
        <section className="relative overflow-hidden padding-x padding-y">
            <Image
                src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1738926260/jyvaelxqmkwdwq7ioscf.jpg"
                alt="Background"
                fill
                priority
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                    <div className="relative max-w-2xl pt-20">
                        <h1
                            className={`relative text-4xl md:text-5xl lg:text-6xl font-bold text-black ${className} 
                            ${!title && 'text-gray-100'}`}
                        >
                            {title || 'Have a Project Idea?'}
                        </h1>
                        <p className="mt-6 text-lg">
                            {`Let's turn your vision into reality. Share your
                            idea, and we'll help you bring it to life.`}
                        </p>
                    </div>

                    <div className="relative">
                        <CallToActionForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
