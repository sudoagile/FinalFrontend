import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes hacer una llamada a la API para autenticar al usuario
        // Ejemplo:
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password: password })
        })
            .then(response => {
                if (response.ok) {
                    navigate('/home');
                } else {
                    console.error('Error al autenticar');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2>Ingresar</h2>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Ingrese su email"
                        required
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-dark">
                            Ingresar
                        </button>
                    </div>
                </div>
            </form>
            <a href="/register" className="card-link">Si aún no tiene cuenta, aquí puede registrarse</a>
        </div>
    );
};

export default Login;
