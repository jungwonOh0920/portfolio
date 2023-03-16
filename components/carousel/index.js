import React, {useState, useEffect} from 'react'
import CarouselItem from './CarouselItem'

const Carousel = ({carouselData}) => {
    const [currentIdx, setCurrentIdx] = useState(0)

    const infiniteScroll = () => {
        if (currentIdx === carouselData.length - 1) {
            return setCurrentIdx(0)
        }
        return setCurrentIdx(currentIdx + 1)
    }
    useEffect(() => {
        console.log('carousel: ', carouselData);
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            infiniteScroll()
        }, 15000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carousel-container'>
            {
                carouselData &&
                carouselData.map((item, idx) => {
                    return <div className='carousel-item-wrapper' key={idx} style={{transform: `translate(-${currentIdx * 100}%)`}}>
                        <CarouselItem item={item} />
                    </div>
                })
            }
        </div>
    )
}

export default Carousel