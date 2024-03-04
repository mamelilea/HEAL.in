import React, { useState } from 'react'
import Input from '../ui/Input'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validateForm()) {

            fetch("http://localhost:8000/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            }).then((response) => {
                alert("Register successful");
                navigate('/login');
            }).catch((error) => {
                alert("Register failed");
            })
        }
    }

    const validateForm = () => {
        if (email === "" || email === null || !email.endsWith("@student.ub.ac.id")) {
            alert("Dimohon menggunakan email UB");
            return false;
        }
        if (password === "" || password === null) {
            return false;
        }
        if (password !== confirmPassword) {
            alert("Konfirmasi password tidak sesuai");
            return false;
        }
        return true;
    }

    return (
        <div>
            <section className='w-screen h-screen flex flex-col items-center justify-center'>
                <form onSubmit={handleRegister} className='p-5'>
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@student.ub.ac.id"
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        required={true}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="confirm password"
                    />
                    <Button
                        type={"submit"}
                        children={"Register"}
                        className={"bg-blue-500 mt-5 text-center w-full"}
                        disabled={false}
                    />

                </form>

                <section>
                    <p className='text-center'>Already have an account? <Link to="/login">Login</Link></p>
                </section>
            </section>
        </div>
    )
}

export default RegisterForm
