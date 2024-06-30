import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');
    const [orderCounts, setOrderCounts] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = "http://localhost:8080/shopDetail/getAll";
                if (category) {
                    url = `http://localhost:8080/shopDetail/getByCategory?category=${category}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();

        const checkAuthStatus = async () => {
            const token = localStorage.getItem("userToken");
            if (token) {
                setIsLoggedIn(true);
                try {
                    const response = await fetch("http://localhost:8080/user/details", {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUserDetails(data);
                        console.log("User details:", data);
                    }
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            }
        };

        checkAuthStatus();
    }, [category]);

    const handleOrderCountChange = (productId, count) => {
        setOrderCounts(prevOrderCounts => ({
            ...prevOrderCounts,
            [productId]: count
        }));
    };

    const handleAddToCart = (productId) => {
        if (!isLoggedIn) {
            navigate('/User'); 
            return;
        }

        const count = parseInt(orderCounts[productId]) || 1;
        const product = products.find(p => p.id === productId);
        if (product) {
            const cartItem = { ...product, count };
            setCartItems(prevCartItems => [...prevCartItems, cartItem]);
            console.log("Added to cart:", cartItem);
        } else {
            console.error("Product not found:", productId);
        }
    };

    const handleViewCart = () => {
        navigate('/cart', { state: { cartItems, userDetails } });
    };

    return (
        <div className="usermain">
            <div className="products">
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    products.map(product => (
                        <div key={product.id} className="productitem">
                            <img src={product.imageName} alt={product.name} className="primage" />
                            <ul className="pr">
                                <li>{product.name}</li>
                                <li>{product.price}</li>
                                <li>{product.description}</li>
                                <li>{product.category}</li>
                            </ul>
                            <div className="order-form">
                                <label htmlFor={`order-count-${product.id}`}>Quantity:</label>
                                <input 
                                    type="number" 
                                    id={`order-count-${product.id}`} 
                                    value={orderCounts[product.id] || 1} 
                                    onChange={(e) => handleOrderCountChange(product.id, e.target.value)} 
                                    min="1"
                                />
                            </div>
                            <button className="addcrt" onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
                        </div>
                    ))
                )}
            </div>
            <button className="viewcart" onClick={handleViewCart}>View Cart</button>
        </div>
    );
}
