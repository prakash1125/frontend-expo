import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import Sidebar from '../../sidebar/Sidebar'
import CenterBody from './IndianCasinoBody.js'

const IndianCasino = () => {
    return (
        <>
            <div className='page-wrapper'>
                <NavBar />

                <div className='container indianCasino-container flex justify-center'>
                    <Sidebar />
                    <div className='container sports-container'>
                        <CenterBody tabname="Indian Casino" />
                        <Footer name="Back to Top" />
                    </div>
                    {/* <div className='sports-right'>
                        <RightColumn topEventName="Live Casino Games" bottomEventName="Popular Events" />
                    </div> */}
                </div>
            </div>

            
        </>
    )
}

export default IndianCasino