import FloatingButton from '@/components/shared/FloatingButton';
import Footer from '@/components/shared/Footer';
import NavbarWrapper from '@/components/shared/NavbarWrapper';
import { Suspense } from 'react';

export default function Layout({ children }) {
    return (
        <Suspense fallback={<loading />}>
            <div className="bg-[#FFFBF4]">
                <NavbarWrapper />
                <main className="z-0">{children}</main>
                <footer>
                    <FloatingButton />
                    <Footer />
                </footer>
            </div>
        </Suspense>
    );
}
