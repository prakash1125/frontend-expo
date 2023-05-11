import React from 'react'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const IndianCasino = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className='container'>
                    <CenterBody tabname="Indian Casino" />
                </div>
            </div>
        </>
    )
}

export default IndianCasino