import RootGetQuotePage from '@/components/contact/get-quote/RootGetQuotePage';
import RootFreeTrailPage from '@/components/free-trail/RootFreeTrailPage';

export const metadata = {
    title: 'Get a Quote | Webbriks',
    description:
        'Request a personalized quote for your project with Web-briks. We offer tailored design, development, and digital marketing solutions to meet your business needs.',
};
export default async function page() {
    return <RootFreeTrailPage />;
}
