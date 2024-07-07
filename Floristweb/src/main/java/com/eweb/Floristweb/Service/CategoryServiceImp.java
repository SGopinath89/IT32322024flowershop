package com.eweb.Floristweb.Service;

import com.eweb.Floristweb.Model.Category;
import com.eweb.Floristweb.Repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements CategoryService{
    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public List<Category> getAllCategory(){
        return categoryRepo.findAll();
    }

}
