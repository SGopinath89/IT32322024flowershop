package com.eweb.Floristweb.Repo;

import com.eweb.Floristweb.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    @Query("select p from Product p where p.category = ?1")
    public List<Product> getByCategory(String category);
}
