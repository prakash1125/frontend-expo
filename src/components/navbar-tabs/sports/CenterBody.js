import React, { useState } from 'react'
import Button from '../../../commonComponents/button/Button.js';
import { liveSportsNameBtn } from "../../../utils/constant.js";
import { sportsLiveData } from '../../../utils/constant'
import SportsData from './SportsData.js';
import "./CenterBody.scss"

const CenterBody = ({ tabname }) => {
    const [expandedTable, setExpandedTable] = useState(null);

    const handleClick = (index) => {
        setExpandedTable(expandedTable === index ? null : index);
    };

    return (
        <>
            {
                sportsLiveData.length > 0 ? (<>
                    <div className='btn-wrapper'>
                        {
                            liveSportsNameBtn.map((element, index) => {
                                return (
                                    <Button icon={<element.icon />} key={index} className="live-score" name={element.tabName} />
                                )
                            })
                        }
                    </div>

                    {sportsLiveData.map((data, index) => (
                        <div key={index} className='liveScore-table'>
                            <button type="button" onClick={() => handleClick(index)} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                {/* <element.icon /> */}
                                <span className="flex-1 ml-3 text-left tab-name whitespace-nowrap">{data.tabName}</span>
                                <svg className={`w-6 h-6 ${expandedTable === index ? 'rotate-animation' : 'remove-rotation-animation'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <div className={`transition-transform translate-x-0 ${expandedTable === index ? 'hidden' : 'block'}`}
                                id={`dropdown-example-${index}`}>
                                {data.placeScores.map((element, index) => {
                                    return (
                                        <SportsData key={index} element={element} />
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </>) : (<><div className='btn-wrapper'>
                    {
                        liveSportsNameBtn.map((element, index) => {
                            return (
                                <Button icon={<element.icon />} key={index} className="live-score" name={element.tabName} />
                            )
                        })
                    }
                </div>
                    <div className='match-availability'>
                        <p className='message'>There is a no match available at this time <span className='message-highlight'>{tabname}</span>.</p>
                    </div></>)
            }

        </>
    )
}

export default CenterBody