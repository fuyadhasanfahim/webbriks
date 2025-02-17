import RootPortfolio from '@/components/portfolio/RootPortfolio';

export const metadata = {
    title: 'WebBriks Portfolio: See Our Creative Design & Image Editing Work Samples',
    description:
        'Explore the portfolio of Web-briks. Discover our previous work in web development, design, photo editing, and digital marketing that has helped clients grow their businesses',
};

export default async function page() {
    return <RootPortfolio />;
}
