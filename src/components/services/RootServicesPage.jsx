import ServicesWeProvide from '@/components/services/ServicesWeProvide';
import ServicesHeroSection from './HeroSection';
import OurExpertise from './OurExpertise';
import WhyPartnerWithUs from './WhyPartnerWithUs';
import CallToAction from '../shared/CallToAction';

export default async function RootServicesPage() {
    return (
        <>
            <ServicesHeroSection />
            <ServicesWeProvide />
            {/* <OurExpertise /> */}
            {/* <WhyPartnerWithUs /> */}
            <CallToAction
                title={'Let’s Collaborate'}
                className={'text-white'}
            />
        </>
    );
}
