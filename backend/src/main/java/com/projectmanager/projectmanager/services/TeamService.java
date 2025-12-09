package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }
}
