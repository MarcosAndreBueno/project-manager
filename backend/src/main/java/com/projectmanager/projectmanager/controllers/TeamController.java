package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/teams")
@CrossOrigin
public class TeamController {

    @Autowired
    TeamService teamService;

    @GetMapping
    public ResponseEntity<List<Team>> findAll() {
        List<Team> team = teamService.findAll();
        return ResponseEntity.ok().body(team);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Team> findById(@PathVariable Long id) {
        Team obj = teamService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
}
