import FloatingButton from '@/components/shared/FloatingButton';
import Footer from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/navbar';

export default function Layout({ children }) {
    return (
        <div className="bg-[#FFFBF4]">
            <header className="">
                <Navbar />
            </header>
            <main className="z-0">{children}</main>
            <footer>
                <FloatingButton />
                <Footer />
            </footer>
        </div>
    );
}
