import React from 'react'
import Footer from '../../layout/footer/Footer'
import { NavBar } from '../../layout/navMenu/NavBar'
import { RightColumn } from '../../mainBody/rightColumn/RightColumn'
import CenterBody from './InPlayBody.js'

const InPlay = () => {
  return (
    <>
        <div>
            <NavBar />
            <div className='inPlay-section flex justify-center'>
                <div className='container sports-container'>
                <CenterBody tabname="in InPlay"/>
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

export default InPlay