'use client'
import { ReactNode } from 'react';
import Header from './Header';

interface MyProps {
    children?: ReactNode;
}

function Index({ children }: MyProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Index