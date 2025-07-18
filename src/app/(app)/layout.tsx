// app/(app)/layout.tsx
import { JSX } from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
