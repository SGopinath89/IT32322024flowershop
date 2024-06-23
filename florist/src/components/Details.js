import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function Details() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = "http://localhost:8080/shopDetail/getAll";
                if (category) {
                    url = `http://localhost:8080/shopDetail/getByCategory?category=${category}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [category]);

    const addToCart = (product) => {
        axios.post('/cart', { productId: product.id, quantity: 1 })
            .then(response => console.log('Added to cart:', response.data))
            .catch(error => console.error('Error adding to cart:', error));
    };

    return (
        <div className="usermain">
            <div className="products">
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map(product => (
                    <div key={product.id} className="productitem" >
                        <img src={product.imageName} alt={product.name} className="primage" />
                        <ul className="pr">
                            <li>{product.name}</li>
                            <li>{product.price}</li>
                            <li> {product.description}</li>
                            <li>{product.category}</li>
                        
                        </ul>
                        <button className="addcrt" onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                ))
            )}
        </div>
        </div>
        
    );
}
