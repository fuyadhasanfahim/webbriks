'use client';

import Banner from '@/components/home/Banner';
import FeaturedWork from '@/components/home/FeaturedWork';
import FrequentlyAskedQuestions from '@/components/home/FrequentlyAskedQuestions';
import FunFact from '@/components/home/FunFact';
import MeetOurTeamMate from '@/components/home/MeetOurTeamMate';
import ServicesHome from '@/components/home/ServicesHome';
import WhatClientThinkAboutUS from '@/components/home/WhatClientThinkAboutUS';
import WhatMakesUsDifferent from '@/components/home/WhatMakesUsDifferent';
import WhoWeAre from '@/components/home/WhoWeAre';
import CallToAction from '@/components/shared/CallToAction';
import HowWeWork from '@/components/shared/HowWeWork';
import aos from 'aos';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div>
            <section>
                <Banner />
            </section>
            <section className="lg:py-10 py-5">
                <WhoWeAre />
            </section>
            <section className="lg:py-10 py-5">
                <FunFact />
            </section>
            <section className="lg:py-10 py-5">
                <ServicesHome />
            </section>
            <section className="lg:py-10 py-5">
                <FeaturedWork />
            </section>
            <section className="lg:py-10 py-5">
                <HowWeWork />
            </section>
            <section className="lg:py-10 py-5">
                <FrequentlyAskedQuestions />
            </section>
            <section className="lg:py-10 py-5">
                <WhatMakesUsDifferent />
            </section>
            {/* <section className="lg:py-10 py-5">
                <MeetOurTeamMate />
            </section> */}
            <section className="lg:py-10 py-5">
                <WhatClientThinkAboutUS />
            </section>
            <CallToAction />
        </div>
    );
};

export default Home;
