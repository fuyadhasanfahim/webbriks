import Footer from '@/components/shared/Footer';
import NavbarWrapper from '@/components/shared/NavbarWrapper';
import { Suspense } from 'react';
import FloatingButtonWrapper from './FloatingButtonWrapper';

export default function Layout({ children }) {
    return (
        <Suspense fallback={<loading />}>
            <div>
                <NavbarWrapper />
                <main className="z-0 bg-[#FFFBF4]">{children}</main>
                <footer>
                    <FloatingButtonWrapper />
                    <Footer />
                </footer>
            </div>
        </Suspense>
    );
}
