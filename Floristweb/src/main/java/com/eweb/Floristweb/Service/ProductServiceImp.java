package com.eweb.Floristweb.Service;

import com.eweb.Floristweb.Model.Product;
import com.eweb.Floristweb.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImp implements ProductService{

    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<Product> getAllProducts(){

        return productRepo.findAll();
    }
}
