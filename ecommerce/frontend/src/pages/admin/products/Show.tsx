import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const Show: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/admin/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4 mb-3">
                Spring eCommerce <small>Productos</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                <li className="breadcrumb-item active">Ver Productos</li>
            </ol>
            <div className="row">
                {products.map((product) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src={`/images/${product.img}`} alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{product.name}</a>
                                </h4>
                                <h5>${product.price}</h5>
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
    );
};

export default Show;
