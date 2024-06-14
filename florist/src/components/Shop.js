import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import userim from './img/user.png';
import cartim from './img/cart.png';



export default function Shop(){
    const navigate = useNavigate(); 

   const goToDetails = () => {
        navigate('/Details');
   };
    return(
        <>
    
        <div className="usermain">
            <button className='btnflower' onClick={goToDetails}></button>
            <button className='giftf'></button>
            <button className='cof'></button>
            <br/><br/>
            <button className='categorybtn' onClick={goToDetails}>Wedding Decorations</button>
            <button className='categorybtn1' onClick={goToDetails}>Gift Flower</button>
            <button className='categorybtn1' onClick={goToDetails}>Coporate Event Decorations</button>
            <br/><br/>
            <button className='btnflower' onClick={goToDetails}></button>
            <button className='giftf'></button>
            <button className='cof'></button>
            <br/>
            <button className='categorybtn' onClick={goToDetails}>Wedding Decorations</button>
            <button className='categorybtn1' onClick={goToDetails}>Gift Flower</button>
            <button className='categorybtn1' onClick={goToDetails}>Coporate Event Decorations</button>
            
        </div>
        </>
    )
}