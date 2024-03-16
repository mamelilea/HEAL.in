import React from 'react'
import Button from '../ui/Button'
import BreathImg from '../../assets/LandingPage/Breath/1.png'
import BreathElement from '../../assets/LandingPage/Breath/2.png'
import { useNavigate } from 'react-router-dom'

const Breath = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full box-border flex my-24 items-center h-max bg-[#FFEAFB] p-3 rounded-lg mr-2  relative'>

            <div className='w-1/2 z-10 relative mx-5'>
                <Button type={"button"} children={"Get Started  --→"} className={"h-6 w-40 text-white text-sm font-medium Button px-7 py-5 bg-neutral-700 rounded-3xl justify-start items-center gap-2.5 inline-flex font-plus-jakarta -mt-7 absolute bottom-5 right-4 border-0 hover:bg-zinc-600 hover:shadow-inner "} onClick={() => navigate('/breath')}/>
                <img src={BreathImg} alt="" className='w-full'  />
            </div>
            <div className='w-1/2 z-10 ml-10 relative'>
                {/* Element */}
                <div className='w-[110%] absolute right-4 -mt-28 z-10'>
                    <img src={BreathElement} alt="" className='w-full ' />
                </div>
                <div className='w-full font-plus-jakarta -mt-20 z-20 relative'>
                    <h3 className='text-neutral-700 text-5xl leading-tight font-bold'>
                        Tenang dan <br /> Kuasai Dirimu
                    </h3>
                    <p className='text-neutral-700 text-sm font-normal font-plus-jakarta leading-7 -mt-9 w-[30rem]'>
                        Breath Exercise membantu Anda mengelola stres dan meningkatkan kesejahteraan mental Anda. Dengan berbagai teknik pernapasan yang dipandu, Anda dapat menemukan ketenangan dalam setiap hela nafas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Breath
