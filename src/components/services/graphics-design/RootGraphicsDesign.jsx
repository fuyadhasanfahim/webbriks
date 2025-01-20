import CallToAction from '@/components/shared/CallToAction';
import BannerSection from './BannerSection';
import Introduction from './Introduction';
import OurGraphicsDesignServices from './OurGraphicsDesignServices';
import IndustriesWeServe from './IndustriesWeServe';
import OurDesigningProcess from './OurDesigningProcess';

export default async function RootGraphicsDesign() {
    return (
        <>
            <BannerSection />
            <Introduction />
            <OurGraphicsDesignServices />
            <IndustriesWeServe />
            <OurDesigningProcess />
            <CallToAction />
        </>
    );
}
