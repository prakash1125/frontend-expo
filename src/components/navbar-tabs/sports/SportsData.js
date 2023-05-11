import React from 'react'
import "./SportsData.scss"
import "../../mainBody/liveScore/LiveData.scss"

const SportsData = ({ element }) => {
    return (
        <div className='livedata'>
            <div className='livedata-place top-name'>
                <div className='names'>
                    {element.placeNameTop}
                    <br />
                    {element.placeNameBottom}
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

            <div className='right-live'>

                <div className='livedata-wrapper'>

                    {element.values.map((value, index) => {
                        return (
                            <div key={index} className='livedata-tab'>
                                {
                                    value.top && (
                                        <span className='top'>{value.top}</span>
                                    )
                                }
                                {
                                    value.bottom && (
                                        <span className='bottom'>{value.bottom}</span>
                                    )
                                }
                                {
                                    value.center && (
                                        <span className='center'>{value.center}</span>
                                    )
                                }
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default SportsData