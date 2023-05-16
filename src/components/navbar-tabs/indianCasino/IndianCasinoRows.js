import React from 'react'

const IndianCasinoRows = ({ element }) => {
    return (
        <>
            {
                element.row.map((element, index) => {
                    return (
                        <div key={index} className='content-container'>
                            <div className='casino-image'>
                                <img src={element.img} alt="Slide 1" />
                                <p className='play-button fade'><span>Play</span></p>
                            </div>
                            <div className='casino-name'>
                                {element.name}
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default IndianCasinoRows