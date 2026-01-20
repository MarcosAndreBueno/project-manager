package com.projectmanager.user.controllers;

import com.projectmanager.user.entities.UserConfig;
import com.projectmanager.user.services.UserConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users/config")
public class UserConfigController {

    @Autowired
    UserConfigService userConfigService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserConfig> findById(@PathVariable Long id) {
        UserConfig obj = userConfigService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
}
