import CallToActionForm from './CallToActionForm';

export default async function CallToAction({ title, className }) {
    return (
        <section className="bg-[url(https://i.ibb.co.com/SmKPmzP/call-to-action-background.jpg)] bg-center bg-cover py-10 md:py-20 lg:py-32">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
                    <h1
                        className={`text-center md:text-start text-3xl md:text-5xl lg:text-6xl font-medium font-montserrat tracking-wide max-w-sm md:max-w-md lg:max-w-xl py-10 ${className} ${
                            !title && 'text-white'
                        }`}
                    >
                        {title || 'Have a Project Idea?'}
                    </h1>
                    <CallToActionForm />
                </div>
            </div>
        </section>
    );
}
