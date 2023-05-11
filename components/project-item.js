import React from 'react'
import Image from 'next/image'
import Pill from './pill'
import {projectType} from '../pages/work-experience'
import Link from 'next/link'

const ProjectItem = ({project, type}) => {
    return (
        <div className='p-3 border-2 rounded-md w-full h-96 overflow-hidden flex flex-col'>
            {
                <div className='relative h-1/2 -mr-3 -ml-3 -mt-3'>
                    <Image src={project.cover.external ? project.cover.external.url : project.cover.file.url} alt='company-image' fill className='object-cover' priority={true} />
                </div>
            }

            <h1 className='font-semibold text-lg'>{project.properties.Name.title[0].plain_text}</h1>

            {
                type === projectType.work ?
                    <>
                        <p>Position: {project.properties.Position.rich_text[0].plain_text}</p>
                        <p className='text-xs'>{project.properties.WorkPeriod.date.start} &#126; {project.properties.WorkPeriod.date.end}</p>
                    </>
                    :
                    <>
                        <p>Check live demo 🚀</p>
                        <Link className='hover:underline hover:text-indigo-400' href={project.properties.URL.rich_text[0].plain_text} target='_blank'>{project.properties.URL.rich_text[0].plain_text}</Link>
                    </>
            }

            {/* <ul className='list-disc pl-4 text-sm'><li>{project.properties.Description.rich_text[0].plain_text.split("• ")[1]}</li></ul> */}
            <ul className='list-disc pl-4 text-sm'>
                {
                    type === projectType.work ?
                        <li>{project.properties.Description.rich_text[0].plain_text.split("• ")[1]}</li>
                        :
                        <>
                            {
                                project.properties.Description.rich_text[0].plain_text.split("• ").slice(1).map((description) => (
                                    <li>{description}</li>
                                )
                                )
                            }
                        </>
                }

            </ul>
            <div className='flex flex-wrap gap-1 mt-2'>
                {
                    project.properties.Tags.multi_select.map((tag) => (
                        <Pill tagInfo={tag} key={tag.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectItem