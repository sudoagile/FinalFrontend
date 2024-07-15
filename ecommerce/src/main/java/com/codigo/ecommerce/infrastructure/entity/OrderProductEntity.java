package com.codigo.ecommerce.infrastructure.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ordersproducts")
public class OrderProductEntity {
    @EmbeddedId
    private  OrderProductPK pk;
    private Integer quantity;
 /*   private Boolean isActive = true;*/
}
