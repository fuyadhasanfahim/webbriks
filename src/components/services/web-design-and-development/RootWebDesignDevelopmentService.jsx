'use client';

import aos from 'aos';
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import Introduction from './Introduction';
import CustomWebDesignAndDevelopment from './CustomWebDesignAndDevelopment';
import OurWebDesignServices from './OurWebDesignServices';
import WhyChooseWebBricksForYourWebDesignAndDevelopmentNeeds from './WhyChooseWebBricksForYourWebDesignAndDevelopmentNeeds';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import OurProcess from './OurProcess';
import CallToAction from '@/components/shared/CallToAction';

export default function RootWebDesignDevelopmentService() {
    useEffect(() => {
        aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <HeroSection />
            <Introduction />
            <CustomWebDesignAndDevelopment />
            <OurWebDesignServices />
            <WhyChooseWebBricksForYourWebDesignAndDevelopmentNeeds />
            <OurProcess />
            <FrequentlyAskedQuestions />
            <CallToAction />
        </>
    );
}
