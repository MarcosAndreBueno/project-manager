package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.UserConfig;
import com.projectmanager.projectmanager.repositories.UserConfigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserConfigService {

    @Autowired
    UserConfigRepository userConfigRepository;

    public Optional<UserConfig> getConfigByUser(Long id) {
        return userConfigRepository.findById(id);
    }
}
