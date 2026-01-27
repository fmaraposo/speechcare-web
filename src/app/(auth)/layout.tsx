import { JSX } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <main className="min-h-screen flex items-center justify-center">
            {children}
        </main>
    );
}
