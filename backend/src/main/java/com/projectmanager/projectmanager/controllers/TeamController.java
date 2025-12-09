package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/teams")
@CrossOrigin
public class TeamController {

    @Autowired
    TeamService teamService;

    @GetMapping
    public List<Team> getTeams() {
        return teamService.getTeams();
    }
}
