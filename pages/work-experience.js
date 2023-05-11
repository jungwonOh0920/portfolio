import React, {useEffect} from 'react'
import {TOKEN, DATABASE_ID, NOTION_PERSONAL_PROJECTS_DATABASE_ID} from '../config/index.js'
import ProjectItem from '../components/project-item'

const workExperience = ({workExperienceData, personalProjectsData}) => {
    useEffect(() => {
        console.log('workExperienceData: ', workExperienceData)
        console.log('personalProjectsData', personalProjectsData);
    }, [workExperienceData, personalProjectsData])
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='font-bold text-xl pl-2'>Work Experience</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
                {/* <div>{personalProjectsData.id}</div> */}
                {/* {
                    result &&
                    result.map((proj) => (
                        <ProjectItem project={proj} key={proj.id} />
                    ))
                } */}

            </div>
        </div>
    )
}

export default workExperience

export async function getServerSideProps() {
    const defaultOptions = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
    }
    const WorkExperienceOptions = {
        ...defaultOptions,
        body: JSON.stringify({
            sorts: [{
                "property": "WorkPeriod",
                "direction": "descending"
            }],
            page_size: 100
        })
    };

    try {
        let [workExperienceData, personalProjectsData] = await Promise.all([
            fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, WorkExperienceOptions).then(res => res.json()),
            fetch(`https://api.notion.com/v1/databases/${NOTION_PERSONAL_PROJECTS_DATABASE_ID}/query`, defaultOptions).then(res => res.json())
        ])
        return {
            props: {workExperienceData, personalProjectsData}, // will be passed to the page component as props
        }
    } catch (err) {
        (err) => {console.log(err)}
    }
}