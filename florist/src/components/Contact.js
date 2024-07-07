import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Contact(){
    

    return(
        <>
       
        <div className='con'>
           <div className='contactname'>CONTACT US</div><br/><br/>
           <input type='text' placeholder='Name'  className='inname'/><br/><br/>
           <input type='email' placeholder='Email'  className='inemail'/><br/><br/>
           <input type='tel' placeholder='Phone Number' className='phone' /><br/>
           <input type='text' placeholder='Message' className='msg' /><br/><br/>
           <button className="addcrt">Send</button>
        </div>
        </>
    )
}