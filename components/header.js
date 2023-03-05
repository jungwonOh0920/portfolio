import React from 'react'
import Link from 'next/link'
import ThemeButton from '../components/themeButton'

const Header = () => {
    return (
        <header className="text-gray-600 body-font dark:text-white dark:bg-slate-800">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/'>
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl dark:text-white"><span className='text-indigo-500'>Jay</span>'s Portfoli<span className='text-indigo-500'>Oh</span></span>
                    </div>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/'>
                        <span className="mr-5 hover:text-gray-900 dark:hover:text-indigo-500">Home</span>
                    </Link>
                    <Link href='/work-experience'>
                        <span className="mr-5 hover:text-gray-900 dark:hover:text-indigo-500">Work Experiences</span>
                    </Link>
                    <Link href='/contacts'>
                        <span className="mr-5 hover:text-gray-900 dark:hover:text-indigo-500">Contacts</span>
                    </Link>
                </nav>
                <ThemeButton />
            </div>
        </header>
    )
}

export default Header