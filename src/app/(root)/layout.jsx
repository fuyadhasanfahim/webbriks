import FloatingButton from '@/components/shared/FloatingButton';
import Footer from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/navbar';
import NavbarWrapper from '@/components/shared/NavbarWrapper';

export default function Layout({ children }) {
    return (
        <div className="bg-[#FFFBF4]">
            <NavbarWrapper />
            <main className="z-0">{children}</main>
            <footer>
                <FloatingButton />
                <Footer />
            </footer>
        </div>
    );
}
