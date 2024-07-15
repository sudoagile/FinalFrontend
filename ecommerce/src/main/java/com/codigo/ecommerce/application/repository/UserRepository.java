package com.codigo.ecommerce.application.repository;

import com.codigo.ecommerce.domain.User;

public interface UserRepository {
    public User createUser(User user);
    public User findByEmail(String email);
    public User findById(Integer id);

}
