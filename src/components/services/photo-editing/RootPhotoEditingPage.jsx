import Faq from '@/components/shared/Faq';
import HeroSection from './HeroSection';
import PhotoEditingServices from './PhotoEditingServices';
import PhotoEditingStats from './PhotoEditingStats';
import CallToAction from '@/components/shared/CallToAction';

export default async function RootPhotoEditingPage() {
    return (
        <section className="w-full">
            <HeroSection />
            <PhotoEditingServices />
            <PhotoEditingStats />
            <Faq />
            <CallToAction />
        </section>
    );
}
