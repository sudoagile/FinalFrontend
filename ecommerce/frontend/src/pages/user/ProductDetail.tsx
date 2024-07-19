import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('/api/user/product-detail');
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                {product ? (
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`/images/${product.img}`} className="img-fluid" alt={product.name} />
                        </div>
                        <div className="col-md-6">
                            <h1>{product.name}</h1>
                            <h3>${product.price.toFixed(2)}</h3>
                            <p>{product.description}</p>
                            <button className="btn btn-primary">Add to Cart</button>
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

export default ProductDetail;
