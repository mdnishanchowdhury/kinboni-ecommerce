import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer'

function RootLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default RootLayout