package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.repositories.TeamRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Stack;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
@ActiveProfiles("test")
class TeamServiceTest {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    EntityManager entityManager;

    @Test
    @DisplayName("Should return all Teams sucessfully from DB")
    void findAll() {
        Team team1 = new Team(null, "Team1");
        Team team2 = new Team(null, "Team2");
        List<Team> teams = List.of(team1, team2);
        teams.forEach(this::createTeam);

        List<Team> teamResponse = this.teamRepository.findAll();

        assertEquals(teams, teamResponse);
    }

    private void createTeam(Team team) {
        entityManager.persist(team);
    }
}