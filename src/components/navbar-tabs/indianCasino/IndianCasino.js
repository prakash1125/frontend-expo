import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import CenterBody from './IndianCasinoBody.js'

const IndianCasino = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className='container'>
                    <CenterBody tabname="Indian Casino" />
                    <Footer name="Back to Top"/>
                </div>
            </div>
        </>
    )
}

export default IndianCasino