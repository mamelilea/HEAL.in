import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({ id, img, title, time, month, date, status }) => {
  return (
    <Link to={`/event/${id}`} className='no-underline'>
      <div className='h-[22rem] bg-white rounded-xl w-full hover:bg-slate-100 hover:cursor-pointer'>
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
    </Link>
  )
}

export default EventCard;
