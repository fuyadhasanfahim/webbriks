import CallToAction from '../shared/CallToAction';
import StackedCards, { StickyScrollRevealDemo } from '../shared/StakedCards';
import Ambitious from './Ambitious';
import BentoGrid from './BentoGrid';
import FAQS from './FAQS';
import HeroSection from './HeroSection';
import PhotoEditingRates from './PhotoEditingRates';
import ReadyToPartnerWithUs from './ReadyToPartnerWithUs';
import TestimonialSlider from './Testimonial';
import WhyPickingWebbriks from './WhyPickingWebbriks';

export default async function RootPricingPage() {
    return (
        <>
            <CallToAction />
            <Ambitious />
            <StickyScrollRevealDemo />
            <WhyPickingWebbriks />
            {/* <BentoGrid /> */}
            <TestimonialSlider />
            <ReadyToPartnerWithUs />
            <FAQS />
        </>
    );
}
