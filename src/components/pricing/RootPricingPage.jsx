import CallToAction from '../shared/CallToAction';
import Faq from '../shared/Faq';
import { StickyScrollRevealDemo } from '../shared/StakedCards';
import Ambitious from './Ambitious';
import BentoGrid from './BentoGrid';
import ReadyToPartnerWithUs from './ReadyToPartnerWithUs';
import TestimonialSlider from './Testimonial';
import WhyPickingWebbriks from './WhyPickingWebbriks';

export default async function RootPricingPage() {
    return (
        <section className="overflow-hidden">
            <CallToAction />
            <Ambitious />
            <StickyScrollRevealDemo />
            <WhyPickingWebbriks />
            {/* <BentoGrid /> */}
            <TestimonialSlider />
            <ReadyToPartnerWithUs />
            <Faq />
        </section>
    );
}
