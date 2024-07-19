import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('/api/user/cart')
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    const handleRemove = (itemId: number) => {
        fetch(`/api/user/cart/remove/${itemId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                setCartItems(cartItems.filter(item => item.id !== itemId));
            })
            .catch(error => console.error('Error removing item:', error));
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="mt-4 mb-3">Shopping Cart</h1>
                <div className="row">
                    <div className="col-lg-12">
                        {cartItems.length > 0 ? (
                            <ul className="list-group">
                                {cartItems.map(item => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{item.name}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                        <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
