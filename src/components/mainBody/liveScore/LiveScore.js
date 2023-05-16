import React, { useState } from 'react'
import "../../../assets/scss/component/LiveScore.scss"
import Button from '../../../commonComponents/button/Button'
import { liveScoreButton } from '../../../utils/constant'
import { liveScores } from '../../../utils/constant'
import LiveData from './LiveData'
import BodyCarousel from '../bodyCarousel/BodyCarousel'

const LiveScore = () => {
    const [expandedTables, setExpandedTables] = useState([]);

    const handleClick = (index) => {
        if (expandedTables.includes(index)) {
            setExpandedTables(expandedTables.filter((item) => item !== index));
        } else {
            setExpandedTables([...expandedTables, index]);
        }
    };

    return (
        <>

            <BodyCarousel />

            <div className='btn-wrapper'>
                {
                    liveScoreButton.map((element, index) => {
                        return (
                            <Button icon={<element.icon />} key={index} className="live-score" name={element.tabName} />
                        )
                    })
                }
            </div>

            {liveScores.map((data, index) => (
                <div key={index} className='liveScore-table'>
                    <button onClick={() => handleClick(index)} type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        
                        <span className="flex-1 ml-3 text-left tab-name whitespace-nowrap">{data.tabName}</span>
                        <svg className={`w-6 h-6 ${expandedTables.includes(index) ? 'rotate-animation' : 'remove-rotation-animation'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`transition-transform ${expandedTables.includes(index) ? 'translate-x-0' : 'translate-x-full'} ${expandedTables.includes(index) ? 'block' : 'hidden'}`}>
                        {data.placeScores.map((element, index) => {
                            return (
                                <LiveData key={index} element={element} />
                            )
                        })}
                    </div>
                </div>
            ))}
        </>

    )
}

export default LiveScore