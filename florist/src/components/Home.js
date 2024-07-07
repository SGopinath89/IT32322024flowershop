
import './CSS/main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home(){
    const navigate = useNavigate(); 

    const goToShop = () => {
        navigate('/shop'); 
    };

    return(
        <>

            <div className='back'>
                
              <div className='name'>Florist Flowers</div>
           
              <p className='p1'>Nutural & Beautiful Flowers</p>
              <button className='btn' onClick={goToShop}>Shop Now</button>
            </div>
            
        </>
    )
}
