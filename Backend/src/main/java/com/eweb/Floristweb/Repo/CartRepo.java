package com.eweb.Floristweb.Repo;

import com.eweb.Floristweb.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<Cart,Integer> {
}
