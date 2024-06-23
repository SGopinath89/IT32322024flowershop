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


    public List<Cart>getAllPro(){
        return cartRepo.findAll();
    }
}
