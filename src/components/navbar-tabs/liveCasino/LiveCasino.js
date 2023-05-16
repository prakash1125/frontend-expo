import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import CenterBody from './LiveCasinoBody.js'

const LiveCasino = () => {
    return (
        <>
            <div>
                <NavBar/>
                <div className='container'>
                    <CenterBody />
                    <Footer name="Back to Top"/>
                </div>
            </div>
        </>
    )
}

export default LiveCasino