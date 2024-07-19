import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const CreateStock: React.FC = () => {
    const [stock, setStock] = useState({
        id: '',
        name: '',
        description: '',
        price: 0,
        img: null as File | null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStock({
            ...stock,
            [name]: value,
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setStock({
                ...stock,
                img: e.target.files[0],
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', stock.id);
        formData.append('name', stock.name);
        formData.append('description', stock.description);
        formData.append('price', stock.price.toString());
        if (stock.img) {
            formData.append('img', stock.img);
        }

        fetch('/api/admin/stock/save-stock', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-3">
                Spring eCommerce <small>Stock</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                <li className="breadcrumb-item active">Actualizar Stock</li>
            </ol>
            <h2>Actualizar Stock</h2>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={stock.id} />
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="name">Nombre:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Ingrese el nombre del stock"
                            required
                            value={stock.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="description">Descripción:</label>
                    <div className="col-sm-10">
            <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Ingrese la descripcion del stock"
                required
                value={stock.description}
                onChange={handleChange}
            ></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="price">Precio:</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            step="any"
                            id="price"
                            name="price"
                            placeholder="Ingrese el precio del stock"
                            required
                            value={stock.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="img">Imagen:</label>
                    <div className="col-sm-10">
                        <input
                            type="file"
                            className="form-control-file"
                            id="img"
                            name="img"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateStock;
