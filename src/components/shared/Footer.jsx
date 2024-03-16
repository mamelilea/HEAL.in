import React from 'react'
import Logo from '../../assets/Logo2.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[90%] bg-[#3D3D3D] flex items-center justify-between h-max py-5 px-10 mt-40 font-plus-jakarta rounded-xl'>
      <div className=''>
        <img src={Logo} alt="" className='w-36' />
        <p className=' text-neutral-300 w-[38rem] mb-16'>Kami adalah platform terpercaya untuk kesehatan mental, menyediakan dukungan dan sumber daya yang Anda butuhkan untuk meraih kesehatan mental.</p>
        <span className='text-neutral-400'>Copyright ©BCC Kelompok 1 2024</span>
      </div>
      <div>
        <div className='grid grid-rows-4 grid-flow-col gap-5 text-neutral-300 mr-36'>
          <span className='hover:cursor-pointer' onClick={() => navigate("#about")}>About Us</span>
          <span className='hover:cursor-pointer' onClick={() => navigate("/")}>Services</span>
          <span className='hover:cursor-pointer' onClick={() => navigate("/events")}>Events</span>
          <span className='hover:cursor-pointer' onClick={() => navigate("")}>Contact</span>
          <span className='hover:cursor-pointer' onClick={() => navigate("")}>Testimonials</span>
          <span className='hover:cursor-pointer' onClick={() => navigate("")}>Social Media</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
