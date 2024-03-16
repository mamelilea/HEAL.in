import React from 'react'
import gambar1 from '../../assets/LandingPage/VideoPodcast/1.png'
import gambar2 from '../../assets/LandingPage/VideoPodcast/2.png'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const VideoPodcast = () => {
    const navigate = useNavigate()
    return (

        <div className='w-full box-border relative font-plus-jakarta flex flex-col items-center -mt-5 mr-2 px-10 h-max justify-center mb-10'>
            <h2 className='text-4xl font-semibold text-neutral-700'>
                Video & Podcast
            </h2>
            <div className='w-full flex gap-10 '>
                <div className='w-1/2 flex flex-col gap-3'>
                    <div className='relative'>
                        <h3 className='text-white font-medium  leading-tight bottom-9 left-6 text-4xl absolute'>Video</h3>
                        <img src={gambar1} alt="" className='w-full rounded-xl  hover:filter hover:brightness-75 hover:opacity-75 transition duration-300 hover:cursor-pointer' onClick={() => navigate('/video&podcast')}/>
                    </div>
                    <div className="bg-[#ECF0FF] rounded-3xl flex items-center py-3 px-2">
                        <p className='w-5/6 text-xs'>
                            Video ini akan membahas berbagai topik terkait kesehatan mental, termasuk strategi untuk mengelola stres, cara meningkatkan kesejahteraan emosional, dan pentingnya menemukan keseimbangan dalam hidup.
                        </p>
                        <Button type={"button"} children={"Watch Now -→"} className="h-5 w-36 text-white text-[11px] font-medium Button px-7 py-5 bg-neutral-700 rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-zinc-600 hover:shadow-inner " disabled={false} onClick={() => navigate('/video&podcast')}/>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <div className='relative'>
                        <h3 className='text-white font-medium leading-tight bottom-9 left-6 text-4xl absolute'>Podcast</h3>
                        <img src={gambar2} alt="" className='w-full rounded-xl hover:filter hover:brightness-75 hover:opacity-75 transition duration-300 hover:cursor-pointer' onClick={() => navigate('/video&podcast')}/>
                    </div>
                    <div className="bg-[#ECF0FF] rounded-3xl flex items-center py-3 px-2">
                        <p className='w-5/6 text-xs'>
                            Podcast ini akan membahas berbagai topik terkait kesehatan mental, termasuk strategi untuk mengelola stres, cara meningkatkan kesejahteraan emosional, dan pentingnya menemukan keseimbangan dalam hidup.
                        </p>
                        <Button type={"button"} children={"Listen Now -→"} className="h-5 w-36 text-white text-[11px] font-medium Button px-7 py-5 bg-neutral-700 rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-zinc-600 hover:shadow-inner " disabled={false} onClick={() => navigate('/video&podcast')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPodcast
