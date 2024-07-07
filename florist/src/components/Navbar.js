import userim from './img/user.png';
import cartim from './img/cart.png';
import { useNavigate } from 'react-router-dom';
import './CSS/navbar.css';

export default function Navbar(){
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
        </>
    )
}