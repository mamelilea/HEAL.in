import React, { useState } from 'react'
import Input from '../ui/Input'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login button clicked");
        if (validateForm()) {
            try {
                const res = await fetch(`http://localhost:8000/data`);
                const data = await res.json();
                const foundUser = data.find(user => user.email === email && user.password === password);
                if (foundUser) {
                    console.log("Login successful");
                    navigate('/');
                } else {
                    alert("Please Enter Correct Email and Password");
                }
            } catch (error) {
                alert("Login failed. Please try again later.");
            }
        }
    }

    const validateForm = () => {
        if (email === "" || email === null) {
            return false;
        }
        if (password === "" || password === null) {
            return false;
        }
        return true;
    }

    return (
        <div>
            <section className='w-screen h-screen flex flex-col items-center justify-center'>
                <form onSubmit={handleLogin} className='p-5'>
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type={"submit"}
                        children={"Login"}
                        className={"bg-blue-500 mt-5 text-center w-full"}
                        disabled={false}
                    />

                </form>

                <section>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </section>
            </section>
        </div>
    )
}

export default LoginForm
