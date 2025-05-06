import ImageEditingTrialFooter from '@/components/(sales)/image-editing-trail/Footer';
import ImageEditingTrailNavbar from '@/components/(sales)/image-editing-trail/Navbar';

export default function Layout({ children }) {
    return (
        <section>
            <ImageEditingTrailNavbar />
            {children}
            <ImageEditingTrialFooter />
        </section>
    );
}
