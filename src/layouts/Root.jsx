import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>

            </nav>
            <main className='min-h-screen'>

                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;