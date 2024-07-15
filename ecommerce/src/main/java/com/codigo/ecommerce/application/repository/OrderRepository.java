package com.codigo.ecommerce.application.repository;

import com.codigo.ecommerce.domain.Order;
import com.codigo.ecommerce.domain.User;

public interface OrderRepository {
    public Order createOrder(Order order);
    public Iterable<Order> getOrders();
    public Iterable<Order> getOrdersByUser(User user);
}
