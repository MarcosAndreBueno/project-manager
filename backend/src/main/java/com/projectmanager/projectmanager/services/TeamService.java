package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.repositories.TeamRepository;
import com.projectmanager.projectmanager.services.exceptions.ResourceNotFoundException;
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
