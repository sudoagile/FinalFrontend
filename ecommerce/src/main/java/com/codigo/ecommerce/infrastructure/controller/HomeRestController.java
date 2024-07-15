package com.codigo.ecommerce.infrastructure.controller;

import com.codigo.ecommerce.application.service.ProductService;
import com.codigo.ecommerce.application.service.StockService;
import com.codigo.ecommerce.domain.Stock;
import com.codigo.ecommerce.domain.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
public class HomeRestController {

    private final ProductService productService;
    private final StockService stockService;

    public HomeRestController(ProductService productService, StockService stockService) {
        this.productService = productService;
        this.stockService = stockService;
    }

    @GetMapping
    public Map<String, Object> home(HttpSession httpSession) {
        Map<String, Object> response = new HashMap<>();
        response.put("products", productService.getProducts());
        try {
            response.put("id", httpSession.getAttribute("iduser").toString());
        } catch (Exception e) {
            response.put("id", "anonymous");
        }
        return response;
    }

    @GetMapping("/product-detail/{id}")
    public Map<String, Object> productDetail(@PathVariable Integer id, HttpSession httpSession) {
        Map<String, Object> response = new HashMap<>();
        List<Stock> stocks = stockService.getStockByProduct(productService.getProductById(id));
        Integer lastBalance = stocks.isEmpty() ? 0 : stocks.get(stocks.size()-1).getBalance();

        response.put("product", productService.getProductById(id));
        response.put("stock", lastBalance);
        try {
            response.put("id", httpSession.getAttribute("iduser").toString());
        } catch (Exception e) {
            response.put("id", "anonymous");
        }
        return response;
    }
}

