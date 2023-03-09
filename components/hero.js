import React from 'react'
import Animation from './animation'
import Link from 'next/link'
import Carousel from './carousel/index.js'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font dark:text-white">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Hi there! &#128075;
                        <br className="hidden lg:inline-block" />I&apos;m Jay Oh. Nice to meet you.
                    </h1>
                    <p className="mb-8 leading-relaxed">Welcome to my Portfolio website. This will show you who I am, what I&apos;d like to do, and what vision I have as a software engineer. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences. Let&apos;s take a look at my background and please feel free to ask me any questions.</p>
                    <div className="flex justify-center">
                        <Link href='/work-experience'>
                            <span className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See my experiences</span>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
            <Carousel />
        </section>
    )
}

export default Hero