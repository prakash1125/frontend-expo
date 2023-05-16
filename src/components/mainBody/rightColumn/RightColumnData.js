import React from 'react'
import "../../../assets/scss/component/RightColumnData.scss"

const RightColumnData = ({ element }) => {
    return (
        <>
            {
                element.placeScores.map((element, index) => {
                    return (
                        <div className='right-col-livedata w-full'>
                            <div className='livedata-place top-name'>
                                <div className='left-data'>
                                    <div className='event-icon'>{<element.icon />}</div>
                                    <div className='names'>
                                        {element.placeNameTop}
                                        <br />
                                        {element.placeNameBottom}
                                    </div>
                                </div>
                                <div className='livedata-time'>
                                    <div className='time'>
                                        {element.time}<br />
                                        <div className='league-name'>
                                            {element.leagueName && element.leagueName.map((data, index) => {
                                                return (
                                                    <span key={index}>{data.name}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RightColumnData