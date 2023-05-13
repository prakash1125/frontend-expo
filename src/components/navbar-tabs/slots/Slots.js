import React from 'react'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const Slots = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className='container'>
                    <CenterBody />
                </div>
            </div>
        </>
    )
}

export default Slots