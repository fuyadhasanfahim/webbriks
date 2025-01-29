import CallToAction from '../shared/CallToAction';
import Faq from '../shared/Faq';
import Ambitious from './Ambitious';
import Pricing from './Pricing';
import ReadyToPartnerWithUs from './ReadyToPartnerWithUs';
import TestimonialSlider from './Testimonial';

export default async function RootPricingPage() {
    return (
        <section className="overflow-hidden">
            <Pricing />
            <Ambitious />
            <TestimonialSlider />
            <ReadyToPartnerWithUs />
            <Faq />
            <CallToAction />
        </section>
    );
}
