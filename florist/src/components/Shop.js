import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';




export default function Shop(){
    const navigate = useNavigate(); 

    const goToDetails = (category) => {
        navigate(`/Details?category=${category}`);
    };
   

    return(
        <>
    
        <div className="usermain">
       
                    
            <button className='btnflower'onClick={() => goToDetails('Wedding Decoration')}></button>
            <button className='giftf' onClick={() => goToDetails('Gift')}></button>
            <button className='cof' onClick={() => goToDetails('Event Decoration')}></button>
            <br/><br/>
            <button className='categorybtn'onClick={() => goToDetails('Wedding Decoration')}>Wedding Decorations</button>
            <button className='categorybtn1' onClick={() => goToDetails('Gift')}>Gift Flower</button>
            <button className='categorybtn1' onClick={() => goToDetails('Event Decoration')}>Event Flowers</button>
            <br/><br/>
            <button className='home' onClick={() => goToDetails('Home Decoration')}></button>
            <button className='natu'onClick={() => goToDetails('Natural Flower')}></button>
            <button className='sym'onClick={() => goToDetails('Sympathy Flowers')}></button>
            <br/>
            <button className='categorybtn' onClick={() => goToDetails('Home Decoration')}>Home Decorations</button>
            <button className='categorybtn1'onClick={() => goToDetails('Natural Flower')}>Natural Flower</button>
            <button className='categorybtn1' onClick={() => goToDetails('Sympathy Flowers')}>Sympathy Flowers</button>
            
        </div>
        </>
    )
}