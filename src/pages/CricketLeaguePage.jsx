import React from 'react'
import { CricketLeague } from '../components/CricketLeague '
import { RightNavbar } from '../components/RightNavbar'
import { IplClub } from '../components/IplClub'

const CricketLeaguePage = () => {
    return (
        <>
        <div className="w-full overflow-y-scroll scrollbar-hide h-[91vh]  "><CricketLeague /></div>
        <div className="px-2 hidden lg:block w-1/4" >
        <RightNavbar />
      </div>
        </>
    )
}

export default CricketLeaguePage