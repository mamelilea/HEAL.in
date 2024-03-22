// EventDetails.jsx
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import TemplatePage from '../layout/TemplatePage'
import ErrorPage from '../../pages/ErrorPage'
import Button from '../ui/Button'
import axios from 'axios'

const events = [
    {
        id: 1,
        title: 'The 3th International Conference on Health and Society',
        img: 'https://picsum.photos/200/300',
        text: 'Dalam seminar ini, para ahli kesehatan mental akan berbagi wawasan dan strategi tentang bagaimana mengelola kesehatan mental di era digital yang penuh dengan tekanan dan gangguan. Peserta akan belajar tentang pentingnya keseimbangan dalam hidup, teknik-teknik relaksasi yang efektif, dan cara menggunakan teknologi untuk mendukung kesejahteraan emosional. Acara ini juga akan menyediakan forum untuk bertukar pengalaman dan mendapatkan dukungan dari komunitas yang peduli tentang kesehatan mental. Jangan lewatkan kesempatan untuk meningkatkan pemahaman Anda tentang kesehatan mental dan mendapatkan saran praktis untuk meningkatkan kesejahteraan Anda secara keseluruhan.'
    },
    {
        id: 2,
        title: 'The 4th International Conference on Health and Society',
        img: 'https://source.unsplash.com/random',
        text: 'Dalam seminar ini, para ahli kesehatan mental akan berbagi wawasan dan strategi tentang bagaimana mengelola kesehatan mental di era digital yang penuh dengan tekanan dan gangguan. Peserta akan belajar tentang pentingnya keseimbangan dalam hidup, teknik-teknik relaksasi yang efektif, dan cara menggunakan teknologi untuk mendukung kesejahteraan emosional. Acara ini juga akan menyediakan forum untuk bertukar pengalaman dan mendapatkan dukungan dari komunitas yang peduli tentang kesehatan mental. Jangan lewatkan kesempatan untuk meningkatkan pemahaman Anda tentang kesehatan mental dan mendapatkan saran praktis untuk meningkatkan kesejahteraan Anda secara keseluruhan.'
    },
    {
        id: 3,
        title: 'The 5th International Conference on Health and Society',
        img: 'https://picsum.photos/200/300',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus. lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus'
    }
]
const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [paymentToken, setPaymentToken] = useState(null);
    const event = events.find(event => event.id === parseInt(id));
    if (!event) {
        return (
            <ErrorPage />
        )
    }
    const { title, img, text } = event;

    // detail events
    const EventDetails = [
        {
            text: "Start Date",
            date: "23 Maret 2024",
            time: "08.00 WIB",
            location: "",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>)
        },
        {
            text: "End Date",
            date: "23 Maret 2024",
            time: "09.00 WIB",
            location: "",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>)
        },
        {
            text: "Location",
            date: "",
            time: "",
            location: "Lowokwaru, Malang",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            )
        },
    ]


    // payment
    const createPayment = async () => {
        const token = localStorage.getItem('accessToken');
        try {
            const response = await axios.post(
                'https://heal-in-501fb50a416c.herokuapp.com/api/payment/new',
                {
                    amount: 50000,
                    description: 'Webinar buat kalian yang oke'
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            );

            const { data: responseData } = response.data;
            const { token: paymentToken, snap_url } = responseData;

            setPaymentToken(paymentToken);
            window.location.href = snap_url;
        } catch (error) {
            console.error('Error creating payment:', error);
        }
    };

    return (
        <div className='w-full h-max pb-10 overflow-x-hidden'>
            <Navbar />
            <TemplatePage title={'Event Details'} />
            <section className=' w-[90vw] h-max flex flex-col justify-center px-12 py-10  font-plus-jakarta text-2xl'>
                <h2 className='text-neutral-700 text-[2rem]'>Upcoming Event</h2>
                <img src="https://source.unsplash.com/random" alt="" className='overflow-hidden w-full rounded-xl h-[25rem]' />
                <div className='w-full h-max flex items-center'>
                    <div className='w-4/6 h-max box-border'>

                        <div className='mt-14 w-[95%]'>
                            <h3 className='text-neutral-700'>{title}</h3>
                            <p className='text-xs text-justify'>{text}</p>
                        </div>
                    </div>

                    <div className='w-2/6 h-max rounded-lg bg-indigo-50 mt-10 px-4 py-4'>
                        <div className='grid grid-cols-2'>
                            {EventDetails.map((detail, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <span>
                                        {detail.icon}
                                    </span>
                                    <div className='flex flex-col '>
                                        <h4 className='text-zinc-400 font-thin text-base'>{detail.text}</h4>
                                        <div className='-mt-4 text-base text-neutral-700 font-semibold'>{detail.date || detail.location}</div>
                                        <div className='text-base text-neutral-700 font-semibold'>{detail.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button children={"Daftar Webinar"} className={"w-[90%] mt-6 mx-4 py-3 text-white bg-[#FF5D5D] rounded-lg border-none hover:bg-[#fd7d7d]"} onClick={createPayment} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EventDetails
