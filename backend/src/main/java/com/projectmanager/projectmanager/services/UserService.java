package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.User;
import com.projectmanager.projectmanager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
