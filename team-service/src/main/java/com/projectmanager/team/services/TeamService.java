package com.projectmanager.team.services;

import com.projectmanager.team.entities.Team;
import com.projectmanager.team.repositories.TeamRepository;
import com.projectmanager.team.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;

    public List<Team> findAll() {
        return teamRepository.findAll();
    }

    public Team findById(Long id) {
        Optional<Team> obj = teamRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
