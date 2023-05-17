import React from 'react'
import Footer from './layout/footer/Footer.js'
import LiveScore from './mainBody/liveScore/LiveScore.js'
import { RightColumn } from './mainBody/rightColumn/RightColumn.js'
import Sidebar from './sidebar/Sidebar'
import "../assets/scss/layout/Home.scss"

const Home = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Sidebar />
                <div className="p-1 w-full">
                    <div className="p-0 gap-4 flex dark:border-gray-700">

                        <main className="main main-body -ml-48 flex flex-grow flex-col p-0 transition-all duration-150 ease-in md:ml-0 ">
                            <div className=" justify-center bg-gray-50 shadow-md">
                                <LiveScore />
                                <Footer name="Back to Top" />
                            </div>
                        </main>

                        <RightColumn topEventName="Live Casino Games" bottomEventName="Popular Events" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home