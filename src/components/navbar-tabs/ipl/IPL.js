import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import { RightColumn } from '../../mainBody/rightColumn/RightColumn'
import Sidebar from '../../sidebar/Sidebar'
import CenterBody from './IplBody.js'

const IPL = () => {
    return (
        <>
            <div className='page-wrapper'>
                <NavBar />

                <div className='container ipl-section flex justify-center'>
                    <Sidebar />
                    <div className='container sports-container'>
                        <CenterBody liveName="Indian Premier League" tabname="IPL Cup"/>
                        <Footer name="Back to Top" />
                    </div>
                    <div className='sports-right'>
                        <RightColumn topEventName="Live Casino Games" bottomEventName="Popular Events" />
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default IPL