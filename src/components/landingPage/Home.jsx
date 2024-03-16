import React from 'react'
import BackgroundImg from '../../assets/LandingPage/Home/1.png'

const Home = () => {
    return (
        <div className='relative w-full h-max overflow-x-hidden box-border flex flex-col justify-center items-center'>
            {/* background image */}
            <div>
                <img src={BackgroundImg} alt="" className='w-full relative' />
            </div>
            <div className='font-plus-jakarta font-semibold absolute right-[4rem] leading-tight top-[29rem] text-zinc-700 text-7xl text-end'>
                Unite for <br /> Mental Health
            </div>
        </div>
    )
}

export default Home
