import React from 'react'
import {TOKEN, DATABASE_ID} from '../config/index.js'
import ProjectItem from '../components/project-item'

const workExperience = ({result}) => {
    console.log('result: ', result);
    return (
        <div>
            <h1>Work Experience</h1>
            <div className='flex flex-wrap justify-between w-full bg-red-300'>
                {
                    result.map((proj) => (
                        <ProjectItem project={proj} key={proj.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default workExperience

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [{
                "property": "WorkPeriod",
                "direction": "descending"
            }],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const data = await res.json()
    const result = data.results

    return {
        props: {result}, // will be passed to the page component as props
    }
}