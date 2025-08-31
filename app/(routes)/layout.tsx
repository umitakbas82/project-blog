import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/header';
import React from 'react'

interface RoutesLayoutProps {
    children: React.ReactNode;
}
const RoutesLayout = ({ children }: RoutesLayoutProps) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='flex-grow container mx-auto py-4' >
       {children}
            </main>
     
            <Footer/>
        </div>
    )
}

export default RoutesLayout