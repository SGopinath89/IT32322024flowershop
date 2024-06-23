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
            <button className='cof' onClick={() => goToDetails('Wedding Decoration')}></button>
            <br/><br/>
            <button className='categorybtn'onClick={() => goToDetails('Wedding Decoration')}>Wedding Decorations</button>
            <button className='categorybtn1' onClick={() => goToDetails('Gift')}>Gift Flower</button>
            <button className='categorybtn1' onClick={() => goToDetails('Wedding Decoration')}>Coporate Event Decorations</button>
            <br/><br/>
            <button className='btnflower' onClick={() => goToDetails('Wedding Decoration')}></button>
            <button className='giftf'onClick={() => goToDetails('Wedding Decoration')}></button>
            <button className='cof'onClick={() => goToDetails('Wedding Decoration')}></button>
            <br/>
            <button className='categorybtn' onClick={() => goToDetails('Wedding Decoration')}>Wedding Decorations</button>
            <button className='categorybtn1'onClick={() => goToDetails('Wedding Decoration')}>Gift Flower</button>
            <button className='categorybtn1' onClick={() => goToDetails('Wedding Decoration')}>Coporate Event Decorations</button>
            
        </div>
        </>
    )
}