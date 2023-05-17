import React from 'react'
import Home from '../components/Home.js';
import { NavBar } from '../components/layout/navMenu/NavBar.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import "./SportsHomepage.scss"
const SportsHomepage = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Home />
            </div>
        </>
    )
}

export default SportsHomepage