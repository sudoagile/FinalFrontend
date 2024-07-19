import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TemplateAdmin: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default TemplateAdmin;
