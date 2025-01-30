'use client';

import CallToAction from '../shared/CallToAction';
import Faq from '../shared/Faq';
import GraphicsDesignPortfolio from './GraphicsDesignPortfolio';
import HeroSection from './HeroSection';
import PhotoEditingPortfolio from './PhotoEditingPortfolio';
import WebDesignEditingPortfolio from './WebDesignEditingPortfolio';

export default function RootPortfolio() {
    return (
        <>
            <HeroSection />
            <PhotoEditingPortfolio />
            <GraphicsDesignPortfolio />
            <WebDesignEditingPortfolio />
            <Faq />
            <CallToAction />
        </>
    );
}
