'use client';

import CallToAction from '../shared/CallToAction';
import Faq from '../shared/Faq';
import GraphicsDesignPortfolio from './GraphicsDesignPortfolio';
import HeroSection from './HeroSection';
import RootPhotoEditingService from './photo-editing-service-portfolio/RootPhotoEditingService';
import PhotoEditingPortfolio from './PhotoEditingPortfolio';
import WebDesignEditingPortfolio from './WebDesignEditingPortfolio';

export default function RootPortfolio() {
    return (
        <>
            <HeroSection />
            <RootPhotoEditingService />
            {/* <PhotoEditingPortfolio />
            <GraphicsDesignPortfolio />
            <WebDesignEditingPortfolio /> */}
            <Faq />
            <CallToAction />
        </>
    );
}
