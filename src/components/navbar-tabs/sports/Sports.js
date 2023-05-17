import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import { RightColumn } from '../../mainBody/rightColumn/RightColumn'
import "../../../assets/scss/component/SportsBody.scss"
import CenterBody from './SportsBody.js'
import Sidebar from '../../sidebar/Sidebar'

const Sports = () => {
    return (
        <div>
            <div className='sports-page'>
                <NavBar />

                <div className=' container sports-section flex justify-center'>
                    <Sidebar />
                    <div className='container sports-container'>
                        <CenterBody />
                        <Footer name="Back to Top" />
                    </div>
                    <div className='sports-right'>
                        <RightColumn topEventName="Live Casino Games" bottomEventName="Popular Events" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports