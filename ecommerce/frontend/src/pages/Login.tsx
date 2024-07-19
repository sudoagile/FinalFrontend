import React, { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.redirect) {
                    window.location.href = data.redirect;
                } else {
                    alert('Login failed');
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="mt-4 mb-3">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
