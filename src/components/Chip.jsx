import React from 'react'



const Chip = ({handleClick,chipData}) => {
    return (
        <>
            {chipData?.map((data,index)=>{
                return(
                    <span key={index}
                className="bg-[#4C555E] rounded-md cursor-pointer px-4 py-1 text-center font-medium mt-2"
                onClick={() => handleClick(data?.value)}
            >
                <span>{data?.name}</span>
            </span>
                )
            })}
        </>
    )
}

export default Chip