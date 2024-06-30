import { useLocation } from 'react-router-dom';

export default function Cart() {
    const location = useLocation();
    const { cartItems, userDetails } = location.state || { cartItems: [], userDetails: null };

    return (
        <div className="cartPage">
            <h2>Cart</h2>
            <div className="userDetails">
                <h3>User Details</h3>
                {userDetails ? (
                    <ul>
                        <li>Name: {userDetails.name}</li>
                        <li>Email: {userDetails.email}</li>
                        {/* Add other user details as needed */}
                    </ul>
                ) : (
                    <p>No user details available.</p>
                )}
            </div>
            <div className="cartItems">
                <h3>Cart Items</h3>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cartItem">
                            <img src={item.imageName} alt={item.name} className="cartImage" />
                            <ul>
                                <li>{item.name}</li>
                                <li>Price: {item.price}</li>
                                <li>Quantity: {item.count}</li>
                                <li>Total: {item.price * item.count}</li>
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
