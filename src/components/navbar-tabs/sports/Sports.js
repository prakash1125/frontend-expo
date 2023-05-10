import React from 'react'
import { NavBar } from '../../navMenu/NavBar'
import CenterBody from './CenterBody'

const Sports = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <CenterBody/>
            </div>
        </div>
    )
}

export default Sports