import React, { useEffect, useState } from 'react';

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
            <h1>{message}</h1>
        </div>
    );
};

export default Home;
