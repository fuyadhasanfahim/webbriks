import Faq from '@/components/shared/Faq';
import GraphicsDesignServices from './GraphicsDesignServices';
import GraphicsDesignStats from './GraphicsDesignStats';
import HeroSection from './HeroSection';
import CallToAction from '@/components/shared/CallToAction';

export default async function RootGraphicsDesign() {
    return (
        <section className="w-full">
            <HeroSection />
            <GraphicsDesignServices />
            <GraphicsDesignStats />
            <Faq />
            <CallToAction />
        </section>
    );
}
