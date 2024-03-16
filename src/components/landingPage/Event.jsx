import React from 'react'
import bgEvent from '../../assets/LandingPage/Event/1.png'
import imgEvent from '../../assets/LandingPage/Event/2.png'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const DetailCard = ({ img, title, time, month, date, status }) => {
    return (
        <div className='h-[22rem] bg-white rounded-xl w-1/3 hover:bg-slate-100 hover:cursor-pointer'>
            <div className='relative'>
                <span className='bg-yellow-400 rounded-tr-lg absolute bottom-1 p-1 font-semibold font-plus-jakarta'>Mental Health</span>
                <img src={img} alt="" className='w-full rounded-t-xl' />
            </div>
            <div className='flex gap-6 items-center px-7 '>
                <div className='flex flex-col items-center justify-center -mt-4'>
                    <span className='text-blue-400 font-bold text-2xl'>{month}</span>
                    <span className='text-neutral-700 font-bold text-2xl'>{date}</span>
                </div>
                <div className='flex flex-col gap-2 py-5 -mt-5'>
                    <h3 className='text-neutral-700 font-semibold'>{title}</h3>
                    <span className='-mt-5 text-neutral-500'>{status}</span>
                    <span className='text-neutral-500'>{time}</span>
                </div>
            </div>

        </div>
    )
}

const Event = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full font-plus-jakarta h-max mb-20 flex flex-col items-center justify-center box-border px-2 mr-2 relative mt-20'>
            {/* background */}
            <img src={bgEvent} alt="" className='w-full rounded-md absolute z-0' />
            <h2 className='text-4xl font-semibold text-neutral-700 relative'>
                Events
            </h2>
            <div className='w-full relative flex px-10 gap-5 box-border'>
                <DetailCard
                    img={imgEvent}
                    title='"Semua Berhak Bahagia"'
                    status="Online"
                    time="10.00 AM - 12.00 PM"
                    month="Jan"
                    date="22"
                />
                <DetailCard
                    img={imgEvent}
                    title='"Relasi Mental dengan Musik dan Cerita"'
                    status="Online"
                    time="10.00 AM - 12.00 PM"
                    month="Jan"
                    date="22"
                />
                <DetailCard
                    img={imgEvent}
                    title='"Sudut Nyaman Berbicara"'
                    status="Online"
                    time="10.00 AM - 12.00 PM"
                    month="Jan"
                    date="22"
                />
            </div>
            <Button type={"button"} children={"Show More -→"}  className="h-5 w-36 mt-5 relative text-white text-[11px] font-medium Button px-7 py-5 bg-neutral-700 rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-zinc-600 hover:shadow-inner " disabled={false} onClick={() => navigate('/event')}/>
        </div>
    )
}

export default Event
