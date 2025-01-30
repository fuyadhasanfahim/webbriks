import CallToAction from '@/components/shared/CallToAction';
import Faq from '../../shared/Faq';
import HeroSection from './HeroSection';
import WebDesignAndDevelopmentStats from './WebDesignAndDevelopmentStats';
import WebDesignServices from './WebDesignServices';

export default async function RootWebDesignDevelopmentService() {
    return (
        <section className="w-full">
            <HeroSection />
            <WebDesignServices />
            <WebDesignAndDevelopmentStats />
            <Faq />
            <CallToAction />
        </section>
    );
}
