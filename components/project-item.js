import React from 'react'

const projectItem = ({project}) => {
    return (
        <div className='p-6 m-3 bg-slate-400 rounded-md'>
            <h1>{project.properties.Name.title[0].plain_text}</h1>
        </div>
    )
}

export default projectItem