package com.codigo.ecommerce.application.service;

import com.codigo.ecommerce.application.repository.OrderProductRepository;
import com.codigo.ecommerce.domain.Order;
import com.codigo.ecommerce.domain.OrderProduct;

import java.util.List;

public class OrderProductService {
    private final OrderProductRepository orderProductRepository;

    public OrderProductService(OrderProductRepository orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    public OrderProduct create(OrderProduct orderProduct){
        return orderProductRepository.create(orderProduct);
    }

    public Iterable<OrderProduct> getOrderProduct(){
        return orderProductRepository.getOrderProducts();
    }

    public List<OrderProduct> getOrderProductsByOrder(Order order){
        return orderProductRepository.getOrdersProductByOrder(order);
    }
}
