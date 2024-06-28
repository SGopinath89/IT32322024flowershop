import { useLocation } from 'react-router-dom';

export default function Cart() {
    const location = useLocation();
    const { cartItems } = location.state || { cartItems: [] };

    return (
        <div className="cartmain">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cartitem">
                        <img src={item.imageName} alt={item.name} className="cartimage" />
                        <ul className="cartdetails">
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>Quantity: {item.count}</li>
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}
