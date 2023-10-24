'use client'
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface MyProps {
    children?: ReactNode;
}

function Index({ children }: MyProps) {
    return (
        <div className='max-w-7xl m-auto'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Index