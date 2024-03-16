import React from 'react'
import Logo from '../../assets/Logo1.png'

const About = () => {
    return (
        <div id='about' className='w-full box-border flex flex-col items-center h-max -mt-10 mb-16'>
            <img src={Logo} alt="" className='w-60' />
            <p className='text-[1.8rem] mt-6 w-[60rem] text-center font-plus-jakarta text-zinc-700 tracking-wider font-light'>Kami adalah platform terpercaya untuk <span className='text-blue-500 hover:cursor-pointer'>kesehatan mental</span>, menyediakan dukungan dan sumber daya yang Anda butuhkan untuk meraih kesehatan mental.</p>
        </div>
    )
}

export default About
