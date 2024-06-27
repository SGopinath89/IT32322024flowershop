import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import flower from './img/image_2.png';



export default function SignUp(){
    const navigate = useNavigate(); 

   

    const goToUser = () => {
        navigate('/User');
    };

    


    return(
        <>
      
        <div className='usermain'>
           <div className='userl'>Create Account</div><br/><br/>
           <label className='lable1'>First Name</label><br/>
           <input type='text'className='username'/><br/><br/><br/>
           <label className='lable1'>Last Name</label><br/>
           <input type='text'className='username'/><br/><br/>
           <label className='lable1'>Email</label><br/>
           <input type='email'className='username'/><br/><br/><br/>
           <label className='lable1'>Password</label><br/>
           <input type='password'className='username'/><br/><br/>

           <button className='btnlog'>SIGNUP</button><br/><br/>
           <div className='newcus'>Do you have an account? <a className='sign' href='/User' onClick={goToUser}>Login</a> </div>
            <img src={flower}  className='flower' alt='fl'/>

        </div>
        </>
    )
}