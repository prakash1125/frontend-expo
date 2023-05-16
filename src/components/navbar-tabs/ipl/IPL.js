import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import { RightColumn } from '../../mainBody/rightColumn/RightColumn'
import CenterBody from './IplBody.js'

const IPL = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className='sports-section flex justify-center'>
                <div className='container sports-container'>
                    <CenterBody tabname="IPL Cup"/>
                    <Footer name="Back to Top"/>
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