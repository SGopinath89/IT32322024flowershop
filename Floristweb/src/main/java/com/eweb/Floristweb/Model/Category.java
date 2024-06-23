package com.eweb.Floristweb.Model;

import jakarta.persistence.*;

@Entity

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private int id;

    private String name;
}
