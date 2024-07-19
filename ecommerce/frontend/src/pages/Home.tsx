import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import '../css/Home.css'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [message, setMessage] = useState('Welcome');

    useEffect(() => {
        // Aquí puedes hacer una llamada a la API si es necesario
        fetch('/api/home')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Header />
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">{message}</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                </div>
            </div>
            <div className="container content">
                <div className="banner">
                    <img src="/images/banner.jpg" alt="Banner" />
                </div>
                <div className="info">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Integer eget eros sapien.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
