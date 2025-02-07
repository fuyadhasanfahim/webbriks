import Faq from '@/components/shared/Faq';
import GraphicsDesignServices from './GraphicsDesignServices';
import GraphicsDesignStats from './GraphicsDesignStats';
import HeroSection from './HeroSection';
import CallToAction from '@/components/shared/CallToAction';

const faqs = [
    {
        id: 'faq-1',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How do you ensure the designs align with our brand identity?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                We start by understanding your brand’s vision, values, and
                target audience. Our team collaborates closely with you to
                gather insights and preferences. We then create designs that
                reflect your brand’s personality. We also ensure consistency
                across all materials. Your feedback is integral to the process,
                and we refine the designs until they perfectly align with your
                brand identity.
            </p>
        ),
    },
    {
        id: 'faq-2',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                What is the typical turnaround time for a graphic design
                project?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                The turnaround time depends on the scope and complexity of the
                project. For smaller projects like social media graphics or
                flyers, we typically deliver within 3-5 business days. Larger
                projects, such as branding packages or website designs, may take
                2-4 weeks. We always provide a timeline upfront and work
                efficiently to meet your deadlines.
            </p>
        ),
    },
    {
        id: 'faq-3',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                Do you offer revisions to the designs?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Yes, we do! We want you to be 100% satisfied with the final
                product. Our process includes a set number of revision rounds
                based on your feedback.
            </p>
        ),
    },
    {
        id: 'faq-4',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                Can you work with our existing brand guidelines?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Absolutely! If you already have brand guidelines, we’ll use them
                as the foundation for your designs.
            </p>
        ),
    },
    {
        id: 'faq-5',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How do I get started with your graphic design services?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Getting started is easy! Simply reach out to us through our
                contact form or email, and we’ll schedule a consultation to
                discuss your project requirements, goals, and timeline. Once we
                have all the details, we’ll provide a quote and begin the
                creative process. Let’s bring your vision to life!
            </p>
        ),
    },
];

export default async function RootGraphicsDesign() {
    return (
        <section className="w-full">
            <HeroSection />
            <GraphicsDesignServices />
            {/* <GraphicsDesignStats /> */}
            <Faq data={faqs} />
            <CallToAction />
        </section>
    );
}
