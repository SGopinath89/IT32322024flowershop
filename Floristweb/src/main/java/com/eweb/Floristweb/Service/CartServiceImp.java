package com.eweb.Floristweb.Service;

import com.eweb.Floristweb.Model.Cart;
import com.eweb.Floristweb.Repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImp {
    @Autowired
    private CartRepo cartRepo;


    public List<Cart>getAllCart(){
        return cartRepo.findAll();
    }

    public Cart addToCart(Cart cart){
        return cartRepo.save(cart);
    }
}
