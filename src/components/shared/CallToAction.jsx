import CallToActionForm from './CallToActionForm';

export default async function CallToAction({ title, className }) {
    return (
        <section className="bg-gray-200 overflow-hidden py-20 lg:py-32">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-transparent"></div>

                        <h1
                            className={`relative text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl ${className} 
                            ${!title && 'text-gray-800'}`}
                        >
                            {title || 'Have a Project Idea?'}
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-md">
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
