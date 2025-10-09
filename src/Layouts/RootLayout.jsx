import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className=' flex flex-col min-h-screen'>
        <Navbar/>
        <div className="bg-[#F5F5F5] py-9 flex-1">
            <Outlet/>
        </div>
        <Footer/>
        </div>
    );
};

export default RootLayout;