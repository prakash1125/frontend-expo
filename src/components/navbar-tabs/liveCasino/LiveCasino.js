import React from 'react'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const LiveCasino = () => {
    return (
        <>
            <div>
                <NavBar/>
                <div className='container'>
                    <CenterBody />
                </div>
            </div>
        </>
    )
}

export default LiveCasino