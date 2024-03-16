import React, { useState } from 'react'
import Button from '../ui/Button'
import JournalImg from '../../assets/LandingPage/Journaling/imgJournal.png'
import { useNavigate } from 'react-router-dom'


const Journaling = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='w-full box-border px-8  flex font-plus-jakarta'>
            <div className="w-3/5 h-max relative mt-4">
                <div className="left-[22px] top-[40px] flex-col justify-start items-start gap-14 inline-flex ">
                    <div className="Text flex-col justify-start items-start gap-14 flex">
                        <div className="w-[30rem] text-neutral-700 text-5xl leading-tight font-bold font-plus-jakarta">Ruang yang Aman untuk Berbicara</div>
                        <div className="w-[40rem] text-neutral-700 text-base font-normal font-plus-jakarta leading-7 -mt-9">Ekspresikan pengalamanmu dengan bebas menggunakan fitur journaling. Catat semua perasaan, pemikiran, atau refleksi pribadi mereka tanpa takut dinilai atau dihakimi. Gunakan mood tracker untuk menilai tingkat </div>
                    </div>

                    <Button
                        type={"button"}
                        children={"Get Started  --→"}
                        className="h-6 w-40 text-white text-sm font-medium Button px-7 py-5 bg-neutral-700 border-0 hover:bg-zinc-600 hover:shadow-inner  rounded-3xl justify-start items-center gap-2.5 inline-flex font-plus-jakarta -mt-7"
                        disabled={false}
                        onClick={() => navigate('/journaling')}
                    />

                </div>

                <div className="w-[45rem] h-[11rem] mt-10  left-0 justify-start items-start gap-5 inline-flex">
                    {/* Card pertama */}
                    <div className={`w-1/3 h-[11rem] bg-white hover:bg-blue-500 hover:cursor-pointer rounded-xl flex-col justify-start items-start inline-flex`}>
                        {/* Isi card */}
                        <div className="flex-col justify-start items-start flex p-3">
                            <div className="justify-start items-start inline-flex">
                                <div className={`w-10 h-10 bg-neutral-700 hover:bg-white rounded-full flex items-center justify-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={"white"} className="w-6 h-6 hover:stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                                <div className="w-6 h-6 relative" />
                            </div>
                            <div className="flex-col justify-start items-start flex mt-2">
                                <div className={`text-black hover:text-white text-base font-semibold`}>Journaling</div>
                                <div className={`w-full h-16 text-justify text-[.65rem] font-normal text-black hover:text-white leading-snug`}>Fitur journaling memberikan ruang yang aman dan pribadi bagi Anda untuk mengekspresikan perasaan dan pikiran mereka tanpa takut dinilai atau dihakimi</div>
                            </div>
                        </div>
                    </div>
                    {/* Card kedua */}
                    <div className={`w-1/3 h-[11rem] bg-white hover:bg-blue-500  hover:cursor-pointer rounded-xl flex-col justify-start items-start inline-flex`}>
                        <div className="flex-col justify-start items-start flex p-3">
                            <div className="justify-start items-start inline-flex">
                                <div className={`w-10 h-10 bg-neutral-700 hover:bg-white rounded-full flex items-center justify-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={"white"} className="w-6 h-6 hover:stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                    </svg>

                                </div>
                                <div className=" relative" />
                            </div>
                            <div className="flex-col justify-start items-start flex mt-2">
                                <div className={`text-black hover:text-white text-base font-semibold`}>Mood Tracker</div>
                                <div className={`w-full h-16 text-justify text-[.65rem] font-normal text-black hover:text-white leading-snug`}>Fitur mood tracker membantu untuk memantau perubahan suasana hati Anda</div>
                            </div>
                        </div>
                    </div>
                    {/* Card ketiga */}
                    <div className={`w-1/3 h-[11rem] bg-white hover:bg-blue-500 hover:cursor-pointer rounded-xl flex-col justify-start items-start inline-flex`} >
                        <div className="flex-col justify-start items-start flex p-3">
                            <div className="justify-start items-start inline-flex">
                                <div className={`w-10 h-10 bg-neutral-700 hover:bg-white rounded-full flex items-center justify-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={"white"} className="w-6 h-6 hover:stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                    </svg>

                                </div>
                                <div className=" relative" />
                            </div>
                            <div className="flex-col justify-start items-start flex mt-2">
                                <div className={`text-black hover:text-white text-base font-semibold`}>Pop Up Affirmation Words</div>
                                <div className={`w-full h-16 text-justify text-[.65rem] font-normal text-black hover:text-white leading-snug`}>Fitur pop-up affirmation words memberikan suntikan semangat dan dukungan emosional yang Anda butuhkan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/5'>
                <img src={JournalImg} alt="" className='w-full' />
            </div>
        </div>
    )
}

export default Journaling
