import React from 'react'
import "./CenterBody.scss"
import { IndianCasino } from "../../../utils/constant.js";

const CenterBody = ({ tabname }) => {
    return (
        <div className='casino-container'>
            
            <h3 className='casino-tab'>{tabname}</h3>

            <div className='image-container'>
                {IndianCasino.map((element, index) => {
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
            </div>

        </div>
    )
}

export default CenterBody