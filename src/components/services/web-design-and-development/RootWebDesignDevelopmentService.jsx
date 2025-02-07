import CallToAction from '@/components/shared/CallToAction';
import Faq from '../../shared/Faq';
import HeroSection from './HeroSection';
import WebDesignAndDevelopmentStats from './WebDesignAndDevelopmentStats';
import WebDesignServices from './WebDesignServices';

const faqs = [
    {
        id: 'faq-1',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                What web design and development services do you offer?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                We provide
                <strong>
                    custom website design, responsive web development,
                    e-commerce solutions, UI/UX design, website maintenance, and
                    SEO optimization
                </strong>
                . Whether you need a new website or improvements to an existing
                one, we create visually appealing, fast, and user-friendly
                websites customized to your business needs.
            </p>
        ),
    },
    {
        id: 'faq-2',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How much does a website cost?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                The cost of a website depends on its complexity, features, and
                customization requirements. We offer flexible pricing based on
                project scope, starting from
                <strong>
                    affordable small-business websites to advanced custom
                    solutions
                </strong>
                . Contact us for a free consultation and a personalized quote.
            </p>
        ),
    },
    {
        id: 'faq-3',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How long does it take to design and develop a website?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                The timeline varies depending on the project size and
                complexity. A basic website typically takes{' '}
                <strong>1-2 weeks</strong>, while a more complex e-commerce or
                custom web application may take <strong>6-12 weeks</strong>. We
                always ensure timely delivery without compromising quality.
            </p>
        ),
    },
    {
        id: 'faq-4',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                Will my website be mobile-friendly and SEO-optimized?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Yes! We design <strong>fully responsive websites</strong> that
                work seamlessly on all devices, including desktops, tablets, and
                smartphones. We also follow <strong>SEO best practices</strong>{' '}
                to ensure your website ranks well on search engines and reaches
                your target audience.
            </p>
        ),
    },
    {
        id: 'faq-5',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                Can I update the website myself after it’s built?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Absolutely! We develop websites using{' '}
                <strong>user-friendly content management systems (CMS)</strong>{' '}
                like WordPress, Shopify, and custom solutions that allow you to
                <strong>easily update text, images, and other content</strong>.
                If you prefer, we also offer website maintenance services.
            </p>
        ),
    },
    {
        id: 'faq-6',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How do I get started with my website project?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Getting started is simple!{' '}
                <strong>Contact us with your requirements</strong>, and we’ll
                schedule a free consultation to discuss your goals. We’ll then
                provide a customized proposal and begin the design process once
                everything is finalized.
            </p>
        ),
    },
];

export default async function RootWebDesignDevelopmentService() {
    return (
        <section className="w-full">
            <HeroSection />
            <WebDesignServices />
            <WebDesignAndDevelopmentStats />
            <Faq data={faqs} />
            <CallToAction />
        </section>
    );
}
