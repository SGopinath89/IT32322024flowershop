package com.eweb.Floristweb.Service;


import com.eweb.Floristweb.Model.Category;
import com.eweb.Floristweb.Repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo repo;

    public List<Category> getAllCategory(){
        return repo.findAll();
    }

    public Optional<Category> getCategoryById(int id){
        return repo.findById(id);
    }


}
