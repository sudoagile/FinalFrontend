import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const ShowStock: React.FC = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('/api/admin/stock')
            .then((response) => response.json())
            .then((data) => setStocks(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4 mb-3">
                Spring eCommerce <small>Stock</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                <li className="breadcrumb-item active">Ver Stock</li>
            </ol>
            <div className="row">
                {stocks.map((stock) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={stock.id}>
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src={`/images/${stock.img}`} alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{stock.name}</a>
                                </h4>
                                <h5>${stock.price}</h5>
                                <p className="card-text">{stock.description}</p>
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

export default ShowStock;
