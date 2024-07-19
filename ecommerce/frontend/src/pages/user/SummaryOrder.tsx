import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SummaryOrder: React.FC = () => {
    const [orderSummary, setOrderSummary] = useState<any>(null);

    useEffect(() => {
        const fetchOrderSummary = async () => {
            const response = await fetch('/api/user/order-summary');
            const data = await response.json();
            setOrderSummary(data);
        };
        fetchOrderSummary();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                {orderSummary ? (
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Order Summary</h1>
                            <ul className="list-group">
                                {orderSummary.items.map((item) => (
                                    <li className="list-group-item" key={item.id}>
                                        {item.name} - ${item.price.toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${orderSummary.total.toFixed(2)}</h3>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default SummaryOrder;
