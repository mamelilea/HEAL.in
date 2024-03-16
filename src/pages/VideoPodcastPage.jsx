import React from 'react'
import Navbar from '../components/shared/Navbar'
import TemplatePage from '../components/layout/TemplatePage'

const VideoPodcastPage = () => {
    return (
        <div className='w-screen flex flex-col items-center'>
            <Navbar />
            <TemplatePage title={'Video & Podcast'} />
        </div>
    )
}

export default VideoPodcastPage
