package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User[] getUsers() {
        User user1 = new User(1L, "User 1", "Team 1");
        User user2 = new User(2L, "User 2", "Team 2");

        return new User[]{user1, user2};
    }
}
