import React, {useState, useEffect} from 'react'

const Pill = ({tagInfo}) => {
    const [color, setColor] = useState();

    useEffect(() => {
        tagInfo && setColor('bg-' + tagInfo.color + '-400')
    }, [])

    return (
        <div className={`rounded-full w-fit px-1 ${color}`}>
            <p className='text-sm'>{tagInfo.name}</p>
        </div>
    )
}

export default Pill