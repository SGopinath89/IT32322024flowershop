import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('/cart')
            .then(response => setCartItems(response.data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        Product ID: {item.productId} - Product Name: {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
