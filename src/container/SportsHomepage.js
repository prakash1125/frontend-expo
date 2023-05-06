import React from 'react'
import { NavBar } from "../components/navMenu/NavBar.js";
import Sidebar from '../components/sidebar/Sidebar.js';
import Button from '../commonComponents/button/Button.js';
import "./SportsHomepage.css"
const SportsHomepage = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Sidebar />
            </div>
        </>
    )
}

export default SportsHomepage