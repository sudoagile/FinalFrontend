import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ShoppingList: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/user/shopping-list')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="mt-4 mb-3">Shopping List</h1>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src={`/images/${product.img}`} alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">{product.name}</a>
                                    </h4>
                                    <h5>${product.price.toFixed(2)}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShoppingList;

