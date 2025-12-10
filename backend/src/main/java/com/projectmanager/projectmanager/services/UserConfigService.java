package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.entities.UserConfig;
import com.projectmanager.projectmanager.repositories.UserConfigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserConfigService {

    @Autowired
    UserConfigRepository userConfigRepository;

    public UserConfig findById(Long id) {
        Optional<UserConfig> obj = userConfigRepository.findById(id);
        return obj.get();
    }
}
