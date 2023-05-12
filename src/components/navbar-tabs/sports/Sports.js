import React from 'react'
import Footer from '../../footer/Footer'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const Sports = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <CenterBody/>
            <Footer/>
            </div>
        </div>
    )
}

export default Sports