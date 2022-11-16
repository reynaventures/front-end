import React from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

export default MainLayout