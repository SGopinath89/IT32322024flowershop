import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import userim from './img/user.png';
import cartim from './img/cart.png';


export default function About(){
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
    </button></li>
            </ul>
            
            </ul>
            
        </nav>
        <div className='aback'>
           <div className='aboutdata'> 
           We are a local family owned business since our inception in 2019. We at Florist Flower specialize in all kinds of 
           wedding flowers, gift flowers, corporate flowers, home decor and sympathy flower arrangements and delivery.<br/><br/>

            Florist flower is a one stop shop for all your floral requirements from a simple buttonhole flower to an elegant 
            church decoration or a wedding venue decoration with beautiful and stylish designs.<br/><br/>

            Our business has expanded to one locations in Gampaha to cater you better and make flower arrangements more 
            accessible to everyone.<br/><br/>

            Our success over the years are coming from the sustained quality of the products and services which are offered
             at affordable prices.
           </div>
        </div>
        </>
    )
}