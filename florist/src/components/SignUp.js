import './CSS/main.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import flower from './img/image_2.png';

export default function SignUp() {
    const navigate = useNavigate(); 

    const [name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:8080/User/add', {
                name,
                email,
                password
            });
            // Handle successful signup (e.g., navigate to login page)
            console.log(response.data);
            navigate('/');  // Navigate to home page
        } catch (error) {
            // Handle error
            console.error('Signup failed:', error);
        }
    };

    const goToUser = () => {
        navigate('/User');
    };

    return (
        <div className='usermain'>
            <div className='userl'>Create Account</div><br /><br />
            <label className='lable1'>Last Name</label><br />
            <input type='text' className='username' value={name} onChange={(e) => setLastName(e.target.value)} /><br /><br />
            <label className='lable1'>Email</label><br />
            <input type='email' className='username' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br /><br />
            <label className='lable1'>Password</label><br />
            <input type='password' className='username' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button className='btnlog' onClick={handleSignup}>SIGNUP</button><br /><br />
            <div className='newcus'>Do you have an account? <a className='sign' href='/User' onClick={goToUser}>Login</a></div>
            <img src={flower} className='flower' alt='fl' />
        </div>
    );
}
