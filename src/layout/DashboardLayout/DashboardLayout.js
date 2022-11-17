import React from 'react';
import Footer from '../../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar'
const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;