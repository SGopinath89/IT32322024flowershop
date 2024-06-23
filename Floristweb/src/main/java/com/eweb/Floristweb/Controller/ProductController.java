package com.eweb.Floristweb.Controller;

import com.eweb.Floristweb.Model.Product;
import com.eweb.Floristweb.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

}
