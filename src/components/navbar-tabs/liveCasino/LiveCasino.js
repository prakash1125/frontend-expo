import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import Sidebar from '../../sidebar/Sidebar'
import CenterBody from './LiveCasinoBody.js'

const LiveCasino = () => {
    return (
        <>
            <div className='page-wrapper'>
                <NavBar />

                <div className='container liveCasino-container flex justify-center'>
                    <Sidebar />
                    <div className='container sports-container'>
                        <CenterBody tabname="Live Casino" />
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

export default LiveCasino