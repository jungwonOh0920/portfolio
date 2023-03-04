import React, {useState, useEffect} from 'react'

const pill = ({tagInfo}) => {
    const [color, setColor] = useState();

    useEffect(() => {
        setColor('bg-' + tagInfo.color + '-400')
    }, [])

    return (
        <div className={`rounded-full w-fit px-1 ${color}`}>
            <p className='text-sm'>{tagInfo.name}</p>
        </div>
    )
}

export default pill