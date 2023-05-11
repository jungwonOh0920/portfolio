import React from 'react'
import Image from 'next/image'

const CarouselItem = ({item}) => {
    return (
        <div>
            <div className='rounded-full w-24 h-24 mx-auto overflow-hidden relative'>
                <Image src={item.properties.Avatar.files[0].file.url} alt='carousel-image' fill className='object-cover' />
            </div>
            <h2 className='text-center'>
                {item.properties.Name.title[0].plain_text}
            </h2>
            <p className='text-center'>
                {item.properties.Position.rich_text[0].plain_text} at {item.properties.Organization.rich_text[0].plain_text}
            </p>
            <p className='px-10 mt-4'>
                {item.properties.Description.rich_text[0].plain_text}
            </p>
        </div>
    )
}

export default CarouselItem