import TestimonialSlider from '../pricing/Testimonial';
import CallToAction from '../shared/CallToAction';
import Faq from '../shared/Faq';
import Featured from './Featured';
import HeroSection from './HeroSection';
import OurPartners from './OurPartners';
import OurWorldwidePresence from './OurWorldwidePresence';
import ServicesWeProvide from './ServicesWeProvide';
import Stats from './Stats';

export default function RootHomePage() {
    return (
        <>
            <HeroSection />
            <Featured />
            <Stats />
            <ServicesWeProvide />
            <OurPartners />
            <TestimonialSlider />
            <OurWorldwidePresence />
            <Faq />
            <CallToAction />
        </>
    );
}
