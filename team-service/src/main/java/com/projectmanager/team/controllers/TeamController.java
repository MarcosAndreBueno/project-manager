package com.projectmanager.team.controllers;

import com.projectmanager.team.entities.Team;
import com.projectmanager.team.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/teams")
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
