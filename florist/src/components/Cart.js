import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cart')
            .then(response => setCartItems(response.data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        Product Name: {item.name} - Price: {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
