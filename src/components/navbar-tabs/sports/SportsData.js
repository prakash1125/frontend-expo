import React from 'react'
import "../../../assets/scss/component/SportsData.scss"
import "../../../assets/scss/component/LiveData.scss"

const SportsData = ({ element }) => {
    return (
        <div className='livedata'>
            <div className='livedata-place top-name'>
                <div className='names'>
                    {element.placeNameTop}
                    <br />
                    {element.placeNameBottom}
                </div>
                {element.time && element.leagueName && element.leagueName.length > 0 ? (
                    <div className='match-time'>
                        <div className='matchIsLive'>{element.isLive}</div>
                        <div className='livedata-time'>
                            <div className='time'>
                                {element.time}<br />
                                <div className='league-name'>
                                    {element.leagueName.map((data, index) => (
                                        <span key={index}>{data.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
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