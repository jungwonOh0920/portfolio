import React, {useState, useEffect} from 'react'
import {TOKEN, NOTION_TESTIMONIALS_DATABASE_ID} from '../../config/index.js'

const Carousel = () => {
    const data = [1, 2, 3, 4, 5]
    const [currentIdx, setCurrentIdx] = useState(0)

    const infiniteScroll = () => {
        if (currentIdx === data.length - 1) {
            return setCurrentIdx(0)
        }
        return setCurrentIdx(currentIdx + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            infiniteScroll()
        }, 3000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carousel-container'>
            {
                data.map((item, idx) => {
                    return <h1 className='carousel-item' key={idx} style={{transform: `translate(-${currentIdx * 100}%)`}}>{item}</h1>
                })
            }
        </div>
    )
}

export default Carousel