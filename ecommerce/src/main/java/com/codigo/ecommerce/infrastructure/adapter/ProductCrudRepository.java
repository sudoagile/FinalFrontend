package com.codigo.ecommerce.infrastructure.adapter;

import com.codigo.ecommerce.domain.Product;
import com.codigo.ecommerce.infrastructure.entity.ProductEntity;
import com.codigo.ecommerce.infrastructure.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductCrudRepository  extends CrudRepository<ProductEntity, Integer> {
    Iterable<ProductEntity> findByUserEntity (UserEntity userEntity);
}
