import React from 'react'
import bg from '../../assets/LandingPage/testi/1.png'
import profil from '../../assets/LandingPage/testi/Profil.png'

const Testimoni = () => {
    return (
        <div className='w-full font-plus-jakarta h-max flex flex-col items-center box-border relative mt-10 mb-20 mr-2 px-20'>
            <img src={bg} alt="" className='w-full absolute rounded-lg z-0' />
            <div className='w-full h-full bg-white/30 bg-opacity-60 rounded-[30px] shadow-inner  border border-white blur-3xl border-l-neutral-700 relative flex flex-col items-center mt-10 py-10' style={{ backdropFilter: "blur(20px)" }}>
                <h2 className='text-4xl font-semibold text-neutral-700 relative'>
                    Testimonial
                </h2>
                <p className='text-neutral-700 text-2xl px-40 text-center font-normal font-plus-jakarta leading-snug'>
                    "Tidak bisa saya ungkapkan betapa aplikasi ini telah mengubah hidup saya. Sejak menggunakan fitur jurnalnya, saya merasa lebih sadar akan perasaan dan pikiran saya setiap hari. Terima kasih karena telah memberi saya alat yang sangat bermanfaat untuk mengelola stres dan meningkatkan kesejahteraan mental saya!"
                </p>

                {/* user */}
                <div className='flex mt-10 justify-center gap-5'>
                    <div>
                        <img src={profil} alt="" className='w-16 h-16' />
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <span className='text-neutral-700 text-lg font-medium'>Ilyas Ghandi</span>
                        <span className='text-neutral-700 text-sm'>Mahasiswa Universitas Brawijaya</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimoni
