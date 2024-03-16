import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo1.png'
import Button from '../ui/Button'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [scrollNav, setScrollNav] = useState(location.pathname !== '/');

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


    const navClass = scrollNav ? 'bg-white' : '';
    return (
        <div className={`w-screen flex justify-around fixed top-0 z-50 items-center text-blue-500 ${navClass}`}>
            <div>
                <Link to={"/"}>
                    <img src={Logo} alt="" className='h-14 hover:cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                </Link>
            </div>
            <div className='font-plus-jakarta flex gap-10 items-center'>
                <a href="#about" className='no-underline text-blue-500'>About</a>
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
            <Button type={"button"} children={"Login"} className="Button px-10 py-2 bg-blue-500 text-white rounded-3xl justify-start items-center inline-flex font-plus-jakarta border-0 hover:bg-blue-800 hover:shadow-inner" disabled={false} onClick={() => navigate("/auth")} />
        </div>
    )
}

export default Navbar
