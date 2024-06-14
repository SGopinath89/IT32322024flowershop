package com.eweb.Floristweb.Repo;

import com.eweb.Floristweb.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository <Category,Integer> {
}
