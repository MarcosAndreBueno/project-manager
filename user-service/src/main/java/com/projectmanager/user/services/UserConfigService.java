package com.projectmanager.user.services;

import com.projectmanager.user.entities.UserConfig;
import com.projectmanager.user.repositories.UserConfigRepository;
import com.projectmanager.user.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserConfigService {

    @Autowired
    UserConfigRepository userConfigRepository;

    public UserConfig findById(Long id) {
        Optional<UserConfig> obj = userConfigRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
