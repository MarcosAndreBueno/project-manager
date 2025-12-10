package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.UserConfig;
import com.projectmanager.projectmanager.services.UserConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/user-config")
public class UserConfigController {

    @Autowired
    UserConfigService userConfigService;

    @GetMapping(value = "/{id}")
    public Optional<UserConfig> getConfigByUser(@PathVariable Long id) {
        return userConfigService.getConfigByUser(id);
    }
}
