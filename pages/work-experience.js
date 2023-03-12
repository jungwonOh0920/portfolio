import React, {useState, useEffect} from 'react'
import {TOKEN, DATABASE_ID, NOTION_TESTIMONIALS_DATABASE_ID} from '../config/index.js'
import ProjectItem from '../components/project-item'

const workExperience = ({result}) => {
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='font-bold text-xl pl-2'>Work Experience</h1>
            {/* <p>{result.properties.Position.rich_text[0].plain_text}</p> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
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
    console.log('work expereicne!!!', NOTION_TESTIMONIALS_DATABASE_ID);
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const data = await res.json()
    const result = data.results

    return {
        props: {result}, // will be passed to the page component as props
    }
}