import React from 'react'
import { defaultChipValues } from '../utils/constants'
const DefaultChip = ({handleClick}) => {
    return (
        <>
       { defaultChipValues?.map((chipVal)=>{
        return(
            <span
        className="bg-[#4C555E] rounded-md cursor-pointer mt-2 px-4 py-1 text-center font-medium "
        onClick={() => handleClick(chipVal?.value)}
    >
        <span>{chipVal?.name}</span>
    </span>
        )
       })}
        </>
    )
}

export default DefaultChip