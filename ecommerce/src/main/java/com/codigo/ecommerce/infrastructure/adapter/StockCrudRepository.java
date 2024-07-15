package com.codigo.ecommerce.infrastructure.adapter;

import com.codigo.ecommerce.infrastructure.entity.ProductEntity;
import com.codigo.ecommerce.infrastructure.entity.StockEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StockCrudRepository extends CrudRepository<StockEntity, Integer> {
    List<StockEntity> findByProductEntity(ProductEntity productEntity);
}
