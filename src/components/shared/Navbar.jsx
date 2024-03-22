import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo1.png'
import Button from '../ui/Button'
import InfoLogin from '../auth/InfoLogin'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [scrollNav, setScrollNav] = useState(location.pathname !== '/');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const changeNav = () => {
            if (window.scrollY > 10 || location.pathname !== '/') {
                setScrollNav(true);
            } else {
                setScrollNav(false);
            }
        };

        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, [location.pathname]);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            InfoLogin(token) // Panggil InfoLogin di sini
                .then(userData => {
                    if (userData) {
                        setUserData(userData);
                        setIsLoggedIn(true);
                    } else {
                        setIsLoggedIn(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setIsLoggedIn(false);
                });
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Hapus token dari local storage
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        setUserData(null);
    };


    const navClass = scrollNav ? 'bg-white w-[101vw]' : '';
    return (
        <div className={`w-screen flex justify-around fixed top-0 z-50 items-center text-blue-500 ${navClass}`}>
            <div>
                <Link to={"/"}>
                    <img src={Logo} alt="" className='h-14 hover:cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                </Link>
            </div>
            <div className='font-plus-jakarta flex gap-10 items-center'>
                <a href="/#about" className='no-underline text-blue-500'>About</a>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="hover:cursor-pointer">Services</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                        <li><Link to={"/journaling"} className='no-underline text-blue-500 hover:bg-slate-400 hover:text-white'>Journaling</Link></li>
                        <li><Link to={"/breath"} className='no-underline text-blue-500 hover:bg-slate-400 hover:text-white'>Breath Exercise</Link></li>
                        <li><Link to={"/video&podcast"} className='no-underline text-blue-500 hover:bg-slate-400 hover:text-white'>Video & Podcast</Link></li>

                    </ul>
                </div>
                <Link to={"/event"} className='no-underline text-blue-500'>Events</Link>
                <Link to={"/article"} className='no-underline text-blue-500'>Article</Link>
            </div>
            {isLoggedIn ? (
                <div className='flex items-center gap-2'>
                    {userData && <div className='text-lg font-plus-jakarta flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {userData.name}</div>}
                    <Link to={"/payment"} className='bg-[#E2B71E] text-sm p-1 rounded-md text-white flex items-center no-underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                        </svg>

                        Premium
                    </Link>
                    <Button type={"button"} children={"Logout"} className="Button px-10 py-2 bg-blue-500 text-white rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-blue-800 hover:shadow-inner" disabled={false} onClick={handleLogout} />
                </div>
            ) : (
                <Button type={"button"} children={"Login"} className="Button px-10 py-2 bg-blue-500 text-white rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-blue-800 hover:shadow-inner" disabled={false} onClick={() => navigate("/auth")} />
            )}
        </div>
    )
}

export default Navbar
