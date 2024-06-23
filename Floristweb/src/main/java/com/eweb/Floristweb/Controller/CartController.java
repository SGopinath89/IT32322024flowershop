package com.eweb.Floristweb.Controller;

import com.eweb.Floristweb.Model.Cart;
import com.eweb.Floristweb.Repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin

public class CartController {
    @Autowired
    private CartRepo cartRepo;

    @GetMapping
    public List<Cart>getAllPro(){
        return cartRepo.findAll();
    }
}
