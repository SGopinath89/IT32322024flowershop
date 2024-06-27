import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import flower from './img/image_2.png';


export default function User(){
    const navigate = useNavigate(); 

    const goToForgot = () =>{
        navigate('/Forgot')
    };

    const goToSign = () =>{
        navigate('/Signup')
    };

    return(
        <>
       
        <div className='usermain'>
           <div className='userl'>User Login</div><br/><br/>
           <label className='lable1'>User Name</label><br/>
           <input type='text'className='username'/><br/><br/><br/><br/>
           <label className='lable1'>Password</label><br/>
           <input type='password'className='username'/><br/><br/>
         
           <a href='/ForgotPassword' onClick={goToForgot} className='forgot'>Forgot Password</a><br/><br/><br/>
           <button className='btnlog'>LOGIN</button><br/><br/>
           <div className='newcus'>New Customer?  <a className='sign' href='/Signup' onClick={goToSign}>SignUp</a></div>
            <img src={flower}  className='flower' alt='fl'/>
            
        </div>
        </>
    )
}