import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/user/ProductDetail';
import ShoppingList from './pages/user/ShoppingList';
import SummaryOrder from './pages/user/SummaryOrder';
import Cart from './pages/user/cart/Cart';
import TemplateAdmin from './pages/admin/TemplateAdmin';
import AdminHome from './pages/admin/Home';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
                <Route path="/summary-order" element={<SummaryOrder />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<TemplateAdmin />}>
                    <Route path="home" element={<AdminHome />} />
                    <Route path="products/create" element={<Create />} />
                    <Route path="products/edit" element={<Edit />} />
                    <Route path="products/show" element={<Show />} />
                    <Route path="stock/create" element={<Create />} />
                    <Route path="stock/show" element={<Show />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
