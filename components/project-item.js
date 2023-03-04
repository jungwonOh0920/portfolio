import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Pill from './pill'

const projectItem = ({project}) => {
    const [url, setUrl] = useState()

    useEffect(() => {
        console.log(project);
        project.cover.external ? setUrl(project.cover.external.url) :
            setUrl(project.cover.file.url)
    }, [])

    return (
        <div className='p-3 border-2 rounded-md w-full h-80 overflow-hidden flex flex-col'>
            {
                url && <div className='relative h-1/2 -mr-3 -ml-3 -mt-3'>
                    <Image src={url} alt='company-image' fill className='object-cover' />
                </div>
            }

            <h1>{project.properties.Name.title[0].plain_text}</h1>
            <div className='flex flex-wrap gap-1 mt-2'>
                {
                    project.properties.Tags.multi_select.map((tag) => (
                        <Pill tagInfo={tag} />
                    ))
                }
            </div>

        </div>
    )
}

export default projectItem