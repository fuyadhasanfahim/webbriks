'use client';

import Banner from '@/components/home/Banner';
import FeaturedWork from '@/components/home/FeaturedWork';
import FunFact from '@/components/home/FunFact';
import ServicesHome from '@/components/home/ServicesHome';
import WhoWeAre from '@/components/home/WhoWeAre';
import aos from 'aos';
import React, { useEffect } from 'react';

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
        </div>
    );
};

export default Home;
