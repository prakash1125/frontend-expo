import React from 'react'
import { NavBar } from "../components/navMenu/NavBar.js";
import Sidebar from '../components/sidebar/Sidebar.js';
import "./SportsHomepage.scss"
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