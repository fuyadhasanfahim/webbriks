'use client';

import { useEffect } from 'react';
import aos from 'aos';
import HeroSection from './HeroSection';
import FullProjectGallerySection from './FullProjectGallerySection';
import PhotoEditingPortfolio from './PhotoEditingPortfolio';
import WebDesignEditingPortfolio from './WebDesignEditingPortfolio';
import CallToAction from '../shared/CallToAction';

export default function RootPortfolio() {
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
            <FullProjectGallerySection />
            <PhotoEditingPortfolio />
            <WebDesignEditingPortfolio />
            <CallToAction />
        </>
    );
}
