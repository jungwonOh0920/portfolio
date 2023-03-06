import React from 'react'

const contacts = () => {
    return (
        <div className='h-full bg-red-500'>
            <form className='max-w-lg mx-auto space-y-4 h-full bg-red-200'>
                <div className='flex flex-col'>
                    <label>Your Name</label>
                    <input type='text' placeholder='John Doe' className='border-2 border-gray-500' />
                </div>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input type='email' placeholder='example@example.com' className='border-2 border-gray-500' />
                </div>
                <div className='flex flex-col'>
                    <label>Message</label>
                    <input type='text' placeholder='Hi, Jay!' />
                </div>
                <button type="submit" className='px-2 py-1 bg-indigo-500 text-white'>Submit</button>
            </form >
        </div>
    )
}

export default contacts