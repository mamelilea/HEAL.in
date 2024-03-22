import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import axios from 'axios'
import Button from '../components/ui/Button'

const PaymentPage = () => {
    const [paymentToken, setPaymentToken] = useState(null);
    const createPayment = async (amount, description) => {
        const token = localStorage.getItem('accessToken');
        try {
            const response = await axios.post(
                'https://heal-in-501fb50a416c.herokuapp.com/api/payment/new',
                {
                    amount: amount,
                    description: description
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
        <div className='font-plus-jakarta'>
            <Navbar />
            <div className='p-10'>
                <div className='flex flex-col items-center gap-0 mb-10'>
                    <h3 className='font-bold text-4xl text-center text-neutral-700 '>Tingkatkan Pengalaman Anda <br /> Beralih ke Akun Premium Sekarang!</h3>
                    <p className='text-neutral-500 text-center text-xl w-[45rem]'>Maksimalkan pengalaman Anda dan nikmati manfaat eksklusif dengan beralih ke akun premium kami sekarang! Dapatkan akses ke fitur-fitur premium yang menyeluruh, konten-konten eksklusif,
                        dan dukungan lebih lanjut untuk perjalanan kesehatan mental Anda.</p>
                </div>
                <div className='flex w-[90%] mx-16 box-border gap-5'>
                    {/*<!-- Journaling Premium --> */}
                    <div className="w-1/3 mx-auto overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
                        <div className="flex flex-col">
                            <header className="flex text-center items-center flex-col gap-6 p-6 text-slate-400">
                                <h3 className="text-xl font-bold text-slate-700">
                                    Journaling Premium
                                    <span className="block text-sm font-normal text-slate-400 mt-4">
                                        Paket ini merupakan paket lengkap yang ditawarkan, dirancang untuk memberikan pemahaman mendalam tentang kesehatan mental Anda.
                                    </span>
                                </h3>
                                <h4>
                                    <span className="text-3xl">Rp.</span>
                                    <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                                        200.000
                                    </span>
                                    <span className="text-sm">/Bulan</span>
                                </h4>
                                <Button className={"inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-blue-500 shadow-emerald-100 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-100 focus:bg-blue-700 focus:shadow-md focus:shadow-blue-100 focus-visible:outline-none"} onClick={() => createPayment(200000, 'Heal-In Subscription Package 1 Month')}>
                                    <span>Daftar Sekarang</span>
                                </Button>
                            </header>
                        </div>
                    </div>


                    {/*<!-- Content Premium --> */}
                    <div className="w-1/3 mx-auto overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
                        <div className="flex flex-col">
                            <header className="flex text-center items-center flex-col gap-6 p-6 text-slate-400">
                                <h3 className="text-xl font-bold text-slate-700">
                                    Content Premium
                                    <span className="block text-sm font-normal text-slate-400 mt-4">
                                        Paket ini merupakan paket lengkap yang ditawarkan, dirancang untuk memberikan pemahaman mendalam tentang kesehatan mental Anda.
                                    </span>
                                </h3>
                                <h4>
                                    <span className="text-3xl">Rp.</span>
                                    <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                                        300.000
                                    </span>
                                    <span className="text-sm">/Bulan</span>
                                </h4>
                                <Button className={"inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-blue-500 shadow-emerald-100 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-100 focus:bg-blue-700 focus:shadow-md focus:shadow-blue-100 focus-visible:outline-none"} onClick={() => createPayment(300000, 'Heal-In Subscription Package 1 Month')}>
                                    <span>Daftar Sekarang</span>
                                </Button>
                            </header>
                        </div>
                    </div>

                    {/*<!-- All Access --> */}
                    <div className="w-1/3 mx-auto overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
                        <div className="flex flex-col">
                            <header className="flex text-center items-center flex-col gap-6 p-6 text-slate-400">
                                <h3 className="text-xl font-bold text-slate-700">
                                    All Access
                                    <span className="block text-sm font-normal text-slate-400 mt-4">
                                        Paket ini merupakan paket lengkap yang ditawarkan, dirancang untuk memberikan pemahaman mendalam tentang kesehatan mental Anda.
                                    </span>
                                </h3>
                                <h4>
                                    <span className="text-3xl">Rp.</span>
                                    <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                                        500.000
                                    </span>
                                    <span className="text-sm">/Bulan</span>
                                </h4>
                                <Button className={"inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-blue-500 shadow-emerald-100 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-100 focus:bg-blue-700 focus:shadow-md focus:shadow-blue-100 focus-visible:outline-none"} onClick={() => createPayment(500000, 'Heal-In Subscription Package 1 Month')}>
                                    <span>Daftar Sekarang</span>
                                </Button>
                            </header>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentPage
