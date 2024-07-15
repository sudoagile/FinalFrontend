package com.codigo.ecommerce.application.repository;

import com.codigo.ecommerce.domain.Product;
import com.codigo.ecommerce.domain.User;

public interface ProductRepository {
    Iterable<Product> getProducts();
    Iterable<Product> getProductsByUser(User user);
    Product getProductById(Integer id);
    Product saveProduct(Product product);
    void deleteProductById(Integer id);
}
