import React from 'react'
import Template from '../../assets/Layout/1.png'

const TemplatePage = ({ title }) => {
    return (
        <div className='w-full h-max flex items-center justify-center relative'>
            <img src={Template} alt="" className='w-full relative top-0' />
            <h1 className='text-4xl font-bold text-white font-plus-jakarta absolute -mt-7'>{title}</h1>
        </div>
    )
}

export default TemplatePage
