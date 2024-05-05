
import './CSS/main.css';
import Shop from './Shop';
import userim from './img/user.png';
import cartim from './img/cart.png';


export default function Home(){
    return(
        <>
        <nav className='navigation'>
            <ul className='nav-link'>
                <li><a href='/'>Home</a></li>
                <li><a href='/Shop'>Shop</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
                
                <ul className='root'>
            <li className='cart'><a href='/'><button  style={{ border: 'none', background: 'none', padding: 0 }}>
      <img src={cartim} style={{ width: 35, height: 40, cursor: 'pointer' }} />
    </button> </a></li>
                <li className='user'><a href='/'><button  style={{ border: 'none', background: 'none', padding: 0 }}>
      <img src={userim}  style={{ width: 35, height: 40, cursor: 'pointer' }} />
    </button> </a></li>
            </ul>
            
            </ul>
            
        </nav>

            <div className='back'>
                
              <div className='name'>Florist Flowers</div>
           
              <p className='p1'>Nutural & Beautiful Flowers</p>
              <button className='btn' onClick={Shop}>Shop Now</button>
            </div>
            
        </>
    )
}