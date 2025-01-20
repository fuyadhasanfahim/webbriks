import CallToActionForm from './CallToActionForm';

export default async function CallToAction({ title, className }) {
    return (
        <section className="bg-[url(https://i.ibb.co.com/SmKPmzP/call-to-action-background.jpg)] bg-center bg-cover py-10 md:py-36 px-6">
            <div className="w-full max-w-7xl mx-auto h-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center  lg:justify-between gap-10">
                    <div>
                        <h1
                            className={`text-center text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold lg:max-w-[300px] py-10 ${className} ${
                                !title &&
                                'text-white lg:max-w-[540px] text-start'
                            }`}
                        >
                            {title || 'Have a Project Idea?'}
                        </h1>
                    </div>
                    <CallToActionForm />
                </div>
            </div>
        </section>
    );
}
