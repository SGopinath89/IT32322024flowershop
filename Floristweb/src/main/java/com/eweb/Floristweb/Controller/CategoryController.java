package com.eweb.Floristweb.Controller;

import com.eweb.Floristweb.Model.Category;
import com.eweb.Floristweb.Service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private CategoryService service;

    @GetMapping
    public List<Category>getAllCategory(){
        return service.getAllCategory();
    }

    @GetMapping("/{id}")
    public Optional<Category> getCategoryById(@PathVariable int id){
        return service.getCategoryById(id);
    }
}
