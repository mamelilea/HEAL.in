import React from 'react'
import Navbar from '../components/shared/Navbar'
import TemplatePage from '../components/layout/TemplatePage'
import BreathingExercise from '../components/breath/BreathExercise'
import Img from '../assets/LandingPage/Breath/3.png'

const BreathPage = () => {
  return (
    <div className='font-plus-jakarta w-[97.9vw] h-max justify-center'>
      <Navbar />
      <TemplatePage title={'Breath Exercise'} />
      <div className='w-full px-10 box-border flex relative justify-center h-max'>
        <div className='w-1/2'>
          <h3 className='text-3xl'>Latihan Pernapasan Kamu dan Temukan <br />Ketenangan dalam Setiap Nafas</h3>
          <p className='text-sm w-[38rem] text-slate-500'>Fitur Latihan Pernapasan kami adalah alat yang dirancang untuk membantu Anda menemukan ketenangan dalam setiap nafas. Dengan berbagai teknik pernapasan yang dipandu, Anda dapat menenangkan pikiran, merilekskan tubuh, dan meningkatkan kesejahteraan emosional Anda.</p>
          <div className='w-[30rem] h-[12rem] bg-indigo-50 rounded-xl shadow-xl p-5'>
            <h3 className=''>Petunjuk Breath Exercise</h3>
            <ul className='flex flex-col gap-3'>
              <li>Tarik nafas selama 4 detik dengan menghover kotak</li>
              <li>tahan nafas selama 4 detik dengan melepaskan hover</li>
              <li>hembuskan nafas secara perlahan dengan menghover kembali kotak</li>
              <li>ulangi sampai anda merasa tenang!</li>
            </ul>
          </div>
        </div>
        <div className='w-1/2 relative font-plus-jakarta flex flex-col items-center justify-center'>
          <BreathingExercise />
          <img src={Img} alt="" />

        </div>
      </div>
    </div>
  )
}

export default BreathPage
