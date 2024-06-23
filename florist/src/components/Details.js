import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

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

    return (
        <div>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map(product => (
                    <ul key={product.id}>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                    </ul>
                ))
            )}
        </div>
    );
}
