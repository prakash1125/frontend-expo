import React from 'react'
import "./LiveData.scss"

const LiveData = ({ element }) => {
    return (
        <div className='livedata'>
            <div className='livedata-place'>
                {element.placeName}
            </div>
            <div className='livedata-wrapper'>
                {element.values.map((value, index) => {
                    return (
                        <div key={index} className='livedata-tab'>
                            <span className='top'>{value.top}</span>
                            <span className='bottom'>{value.bottom}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default LiveData