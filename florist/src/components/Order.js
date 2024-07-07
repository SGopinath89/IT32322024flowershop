import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleQuantityChange = (productId, quantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity
        }));
    };

    const addToCart = (product) => {
        const quantity = quantities[product.id] || 1;  // Default to 1 if not specified
        const cartItem = { product, quantity };
        axios.post('/api/cart', cartItem)
            .then(response => alert('Product added to cart'))
            .catch(error => console.error('Error adding to cart:', error));
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <input
                            type="number"
                            min="1"
                            value={quantities[product.id] || 1}
                            onChange={e => handleQuantityChange(product.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
