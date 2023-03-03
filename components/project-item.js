import React, {useEffect, useState} from 'react'
import Image from 'next/image'

const projectItem = ({project}) => {
    const [url, setUrl] = useState()

    useEffect(() => {
        project.cover.external ? setUrl(project.cover.external.url) :
            setUrl(project.cover.file.url)
    }, [])

    return (
        <div className='p-3 m-3 bg-slate-400 rounded-md w-56 h-80 overflow-hidden flex flex-col'>
            {
                // width={500} height={500}
                url && <div className='relative h-1/2 -mr-3 -ml-3 -mt-3'>
                    <Image src={url} alt='company-image' fill />
                </div>

            }

            <h1>{project.properties.Name.title[0].plain_text}</h1>
        </div>
    )
}

export default projectItem