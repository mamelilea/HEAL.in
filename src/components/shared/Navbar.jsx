import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-screen flex justify-center bg-slate-300 gap-5'>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Logout</Link>
        </div>
    )
}

export default Navbar
