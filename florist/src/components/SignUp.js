import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import userim from './img/user.png';
import cartim from './img/cart.png';
import flower from './img/image_2.png';



export default function SignUp(){
    const navigate = useNavigate(); 

    const goToShop = () => {
        navigate('/shop'); 
    };

    const goToHome = () =>{
        navigate('/');
    };

    const goToAbout=()=>{
        navigate('/About');
    };

    const goToContact = () => {
        navigate('/Contact');
    };

    const goToUser = () => {
        navigate('/User');
    };

    const goToCart = () => {
        navigate('/Cart');
    };


    return(
        <>
        <nav className='navigation'>
            <ul className='nav-link'>
                <li><a href='/' onClick={goToHome}>Home</a></li>
                <li><a href='/Shop' onClick={goToShop}>Shop</a></li>
                <li><a href='/About' onClick={goToAbout}>About</a></li>
                <li><a href='/Contact' onClick={goToContact}>Contact</a></li>
                
                <ul className='root'>
            <li className='cart'><button  style={{ border: 'none', background: 'none', padding: 0 }} onClick={goToCart}>
      <img src={cartim} style={{ width: 35, height: 40, cursor: 'pointer' }} />
    </button> </li>
                <li className='user'><button  style={{ border: 'none', background: 'none', padding: 0 }} onClick={goToUser}>
      <img src={userim}  style={{ width: 35, height: 40, cursor: 'pointer' }} />
    </button> </li>
            </ul>
            
            </ul>
            
        </nav>
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
            <img src={flower}  className='flower'/>

        </div>
        </>
    )
}