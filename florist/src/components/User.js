import './CSS/main.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import flower from './img/image_2.png';

export default function User() {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/User/login', {
                email,
                password
            });
            // Handle successful login (e.g., save token)
            console.log(response.data);
            navigate('/');  // Navigate to home page
        } catch (error) {
            // Handle error
            console.error('Login failed:', error);
        }
    };

    const goToForgot = () => {
        navigate('/Forgot');
    };

    const goToSign = () => {
        navigate('/Signup');
    };

    return (
        <div className='usermain'>
            <div className='userl'>User Login</div><br /><br />
            <label className='lable1'>Email</label><br />
            <input type='text' className='username' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br /><br /><br />
            <label className='lable1'>Password</label><br />
            <input type='password' className='username' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <a href='/ForgotPassword' onClick={goToForgot} className='forgot'>Forgot Password</a><br /><br /><br />
            <button className='btnlog' onClick={handleLogin}>LOGIN</button><br /><br />
            <div className='newcus'>New Customer? <a className='sign' href='/Signup' onClick={goToSign}>SignUp</a></div>
            <img src={flower} className='flower' alt='fl' />
        </div>
    );
}
