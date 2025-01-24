'use client';

import aos from 'aos';
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import CompanyOverview from './CompanyOverview';
import CallToAction from '../shared/CallToAction';
import OurSuccessStories from './OurSuccessStories';
import HowWeWork from './HowWeWork';
import WhatMakesUsDifferent from './WhatMakesUsDifferent';
import ArchivedAwards from './ArchivedAwards';
import OurMostValuableClients from './OurMostValueableClients';
import { GlobeDemo } from './Example';
import Ambitious from './Ambitious';

export default function RootAboutPage() {
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
            <CompanyOverview />
            <Ambitious />
            {/* <GlobeDemo /> */}
            <OurSuccessStories />
            <HowWeWork />
            <WhatMakesUsDifferent />
            {/* <ArchivedAwards /> */}
            {/* <OurMostValuableClients /> */}
            <CallToAction
                title={'Have a Project Idea?'}
                className={'!max-w-2xl text-start text-white'}
            />
        </>
    );
}
