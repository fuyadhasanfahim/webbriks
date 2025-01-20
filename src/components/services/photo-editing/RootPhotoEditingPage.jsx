import CallToAction from '@/components/shared/CallToAction';
import BannerSection from './BannerSection';
import IndustriesWeServe from './IndustriesWeServe';
import Introduction from './Introduction';
import OurEditingProcess from './OurEditingProcess';
import OurPhotoEditingServices from './OurPhotoEditingServices';

export default async function RootPhotoEditingPage() {
    return (
        <>
            <BannerSection />
            <Introduction />
            <OurPhotoEditingServices />
            <IndustriesWeServe />
            <OurEditingProcess />
            <CallToAction />
        </>
    );
}
