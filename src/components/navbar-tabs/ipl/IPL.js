import React from 'react'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const IPL = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className='container'>
                    <CenterBody tabname="in InPlay" />
                </div>
            </div>
        </>
    )
}

export default IPL