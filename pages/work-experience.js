import React, {useEffect} from 'react'
import {TOKEN, DATABASE_ID, NOTION_PERSONAL_PROJECTS_DATABASE_ID} from '../config/index.js'
import ProjectItem from '../components/project-item'

export const projectType = {
    work: 'work',
    personal: 'personal'
}

const WorkExperience = ({workExperienceData, personalProjectsData}) => {
    useEffect(() => {
        console.log('personalProjectsData: ', personalProjectsData);
    }, [personalProjectsData])
    return (
        <div className='max-w-5xl mx-auto mt-8 space-y-8'>
            <div>
                <h2 className='font-bold text-xl pl-2'>Work Experience</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
                    {
                        (workExperienceData && workExperienceData.results && workExperienceData.results.length > 0) ?
                            workExperienceData.results.map((work, idx) => (< ProjectItem project={work} type={workExperienceData.type} key={idx} />)) : ''
                    }
                </div>
            </div>
            <div>
                <h2 className='font-bold text-xl pl-2'>Personal Projects </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
                    {
                        (personalProjectsData && personalProjectsData.results && personalProjectsData.results.length > 0) ? personalProjectsData.results.map((work, idx) => (< ProjectItem project={work} type={personalProjectsData.type} key={idx} />)) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkExperience

export async function getStaticProps() {


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

        workExperienceData.type = projectType.work;
        personalProjectsData.type = projectType.personal;
        console.log('workExperienceData: ', workExperienceData)
        console.log('personalProjectsData: ', personalProjectsData);
        return {
            props: {
                workExperienceData: workExperienceData,
                personalProjectsData: personalProjectsData
            }, // will be passed to the page component as props
        }
    } catch (err) {
        (err) => {console.log('err: ', err)}
    }
}