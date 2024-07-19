import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const Edit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: 0,
        img: null as File | null,
    });

    useEffect(() => {
        fetch(`/api/admin/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProduct({
                ...product,
                img: e.target.files[0],
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', product.id);
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price.toString());
        if (product.img) {
            formData.append('img', product.img);
        }

        fetch(`/api/admin/products/update-product`, {
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
                Spring eCommerce <small>Productos</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                <li className="breadcrumb-item active">Actualizar Producto</li>
            </ol>
            <h2>Actualizar Producto</h2>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={product.id} />
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="name">Nombre:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Ingrese el nombre del producto"
                            required
                            value={product.name}
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
                placeholder="Ingrese la descripcion del producto"
                required
                value={product.description}
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
                            placeholder="Ingrese el precio del producto"
                            required
                            value={product.price}
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

export default Edit;
