package com.codigo.ecommerce.infrastructure.adapter;

import com.codigo.ecommerce.infrastructure.entity.OrderEntity;
import com.codigo.ecommerce.infrastructure.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface OrderCrudRepository extends CrudRepository<OrderEntity , Integer> {
    public Iterable<OrderEntity> findByUser(UserEntity userEntity);
}
