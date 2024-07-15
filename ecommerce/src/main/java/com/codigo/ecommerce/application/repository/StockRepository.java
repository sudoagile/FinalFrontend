package com.codigo.ecommerce.application.repository;

import com.codigo.ecommerce.domain.Product;
import com.codigo.ecommerce.domain.Stock;

import java.util.List;

public interface StockRepository {
    Stock saveStock(Stock stock);
    List<Stock> getStockByProduct(Product product);
}
