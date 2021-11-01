import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useLocation } from 'react-router';
export default function AppLayout({ children }) {

    const location = useLocation();
    const category = location.pathname;
   
    return (
        <>
            <Header category = {category}/>
            {children}
            <Footer />
        </>
    )
}
