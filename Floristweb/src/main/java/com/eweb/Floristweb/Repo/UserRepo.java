package com.eweb.Floristweb.Repo;

import com.eweb.Floristweb.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
