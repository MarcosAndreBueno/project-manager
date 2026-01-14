package com.projectmanager.user.services;

import com.projectmanager.user.entities.User;
import com.projectmanager.user.repositories.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ActiveProfiles("test")
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @Test
    @DisplayName("Should return all Users sucessfully from DB")
    void shouldCreateUser() {
        User user1 = new User(null, "Carlsen", 3L);
        User user2 = new User(null, "Svidler", 3L);
        List<User> users = List.of(user1, user2);

        when(userRepository.findAll()).thenReturn(users);

        List<User> usersResponse = userService.findAll();
        assertEquals(usersResponse, users);
    }
}
