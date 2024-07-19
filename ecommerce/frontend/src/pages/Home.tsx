import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1>Bienvenido a Sudo Agile Ecommerce 2024</h1>
                <p>Tu tienda de software en Línea</p>
            </div>
            <div className="content">
                <img src="/images/banner.jpg" alt="Agile Strategy" className="banner" />
                <div className="info">
                    <h2>Agile Strategy in business from IT</h2>
                    <p>Contact Us</p>
                    <a href="https://www.sudoagile.com" className="btn btn-primary">www.sudoagile.com</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
