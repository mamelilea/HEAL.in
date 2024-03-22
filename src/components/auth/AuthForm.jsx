import React, { useState } from 'react'
import Input from '../ui/Input'
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Logo from '../../assets/Logo1.png';
import Carousel from '../ui/Carousel';
import axios from 'axios';

const AuthForm = () => {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogIn, setIsLogIn] = useState(true);
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const response = await axios.post(
                "https://heal-in-501fb50a416c.herokuapp.com/api/user/register",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                // Jika pendaftaran berhasil, ambil kode verifikasi dari respons server
                const verificationCode = response.data;

                // Kirim permintaan verifikasi
                const verifyResponse = await axios.get(
                    `https://heal-in-501fb50a416c.herokuapp.com/api/user/email/verify/${verificationCode}`
                );

                if (verifyResponse.status === 200) {
                    // Jika verifikasi berhasil, beritahu pengguna dan arahkan ke halaman login
                    alert("SignUp successful. Please check your email for verification.");
                    setIsLogIn(true);
                    navigate('/auth');
                } else {
                    throw new Error('Verification failed');
                }
            } else {
                throw new Error('SignUp failed');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 409) {
                alert("Email sudah terdaftar. Silakan gunakan email lain.");
            } else {
                alert("SignUp failed. Silakan coba lagi.");
            }
        }

    }
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            // Lakukan permintaan POST ke endpoint login
            const response = await axios.post(
                "https://heal-in-501fb50a416c.herokuapp.com/api/user/login",
                {
                    email: email,
                    password: password
                }
            );


            if (response.status === 200) {
                const token = response.data.data.token;
                localStorage.setItem('accessToken', token);
                console.log('Login successful');
                navigate('/');
            } else {
                alert("Please Enter Correct Email and Password");
            }
        } catch (error) {
            alert("Login failed. Please try again later.");
        }
    }

    const validateForm = () => {
        if (isLogIn) {
            if (email === "" || email === null) {
                alert("gunakan email yang valid");
                return false;
            }
            if (password === "" || password === null) {
                return false;
            }
        } else {
            if (firstName === "" || firstName === null) {
                alert("Nama depan harus diisi");
                return false;
            }
            if (lastName === "" || lastName === null) {
                alert("Nama belakang harus diisi");
                return false;
            }
            if (password !== confirmPassword) {
                alert("Password harus sama");
                return false;
            }
            if (email === "" || email === null) {
                alert("gunakan email yang valid");
                return false;
            }
            if (password === "" || password === null) {
                return false;
            }
            if (password.length < 8) {
                alert("password minimal 8 karakter");
                return false;
            }
        }
        setError('');
        return true;
    }

    const toggleMode = () => {
        setIsLogIn(!isLogIn);
    };

    const handleSignUpLinkClick = () => {
        setIsLogIn(false);
        setErrorMessage('');
    };
    const handleLoginLinkClick = () => {
        setIsLogIn(true);
        setErrorMessage('');
    };

    return (
        <div className='w-[95vw] h-max flex items-center justify-center overflow-x-hidden py-10 px-4 font-plus-jakarta'>
            {/* section kiri */}
            <section className='lg:w-1/2 lg:h-max flex items-center justify-center overflow-hidden'>
                <Carousel />
            </section>

            {/* section kanan */}
            <section className='lg:w-1/2 lg:h-max flex flex-col items-center '>
                <div className={`${isLogIn ? "mt-[-5rem]" : "-mt-0"} px-2`}>
                    <div className='my-5'>
                        <img src={Logo} alt="" className='w-[8rem]' />
                    </div>
                    <div className="join box-border pr-5 w-[24rem] p-1 bg-[#f2f2f2] gap-2 rounded-xl mb-10 group">
                        <input className={`rounded-xl btn w-1/2`} style={{ backgroundColor: isLogIn ? '#4299e1 ' : '', color: isLogIn ? '#FFF' : '#9C9AA5' }} type="checkbox" name="options" aria-label="Log In" checked={isLogIn} value="Log In" onChange={toggleMode} />
                        <input className={`rounded-xl btn w-1/2`} style={{ backgroundColor: isLogIn ? '' : '#4299e1', color: isLogIn ? '#9C9AA5' : '#FFF' }} type="checkbox" name="options" aria-label="Sign Up" checked={!isLogIn} value="Sign Up" onChange={toggleMode} />
                    </div>
                </div>

                {/* pemilihan kondisi signup/login */}
                {isLogIn ? (
                    // Form untuk Login
                    <div>
                        <form onSubmit={handleLogin} className='w-[23rem] box-border flex flex-col items-start  -ml-4'>
                            <div className="label-text text-base -mb-3">
                                Email <span className='text-red-500'>*</span>
                            </div>
                            <Input
                                type="email"
                                name="email"
                                required={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email@gmail.com"
                                className={"input input-bordered w-[22rem]"}
                            />
                            <div className="label-text text-base -mb-3">
                                Password <span className='text-red-500'>*</span>
                            </div>
                            <Input
                                type="password"
                                name="password"
                                required={true}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className={"input input-bordered w-[22rem]"}
                            />
                            <Button
                                type={"submit"}
                                children={"Login"}
                                className={"btn btn-active w-[24rem] mt-5 bg-blue-500 text-white hover:bg-blue-800 hover:shadow-inner"}
                                disabled={false}
                            />

                        </form>
                    </div>
                ) : (
                    // Form untuk Sign Up
                    <div>
                        <form onSubmit={handleSignUp} className='w-[23rem] box-border  flex flex-col items-start -ml-4'>
                            <div className='flex gap-10 w-[22rem]'>
                                <div className='w-1/2'>
                                    <div className="label-text text-base -mb-3">
                                        Front Name <span className='text-red-500'>*</span>
                                    </div>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        required={true}
                                        value={firstName}
                                        onChange={(e) => setfirstName(e.target.value)}
                                        placeholder="Front Name"
                                        className={"input input-bordered w-full"}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <div className="label-text text-base -mb-3">
                                        Last Name <span className='text-red-500'>*</span>
                                    </div>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        required={true}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className={"input input-bordered w-full"}
                                    /></div>
                            </div>
                            <div className="label-text text-base -mb-3">
                                Email <span className='text-red-500'>*</span>
                            </div>
                            <Input
                                type="email"
                                name="email"
                                required={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email@gmail.com"
                                className={"input input-bordered w-[22rem]"}
                            />
                            <div className="label-text text-base -mb-3">
                                Password <span className='text-red-500'>*</span>
                            </div>
                            <Input
                                type="password"
                                name="password"
                                required={true}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className={"input input-bordered w-[22rem]"}
                            />
                            <div className="label-text text-base -mb-3">
                                Confirm Password <span className='text-red-500'>*</span>
                            </div>
                            <Input
                                type="password"
                                name="confirmPassword"
                                required={true}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                className={"input input-bordered w-[22rem]"}
                            />
                            <Button
                                type={"submit"}
                                children={"Create Account"}
                                className={"btn btn-active w-[24rem] mt-5 bg-blue-500 text-white hover:bg-blue-800 hover:shadow-inner"}
                                disabled={false}
                            />

                        </form>
                    </div>
                )}


                <section className='mt-3'>
                    <p className='text-center'>
                        {isLogIn ? (
                            "Don't have an account? "
                        ) : (
                            "Already have an account? "
                        )}
                        {isLogIn ? (
                            <span onClick={handleSignUpLinkClick} style={{ cursor: 'pointer' }}> Sign Up</span>
                        ) : (
                            <span onClick={handleLoginLinkClick} style={{ cursor: 'pointer' }}> Log In</span>
                        )}
                    </p>
                </section>
            </section>
        </div>
    )
}

export default AuthForm