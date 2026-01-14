package com.projectmanager.team.services;

import com.projectmanager.team.entities.Team;
import com.projectmanager.team.repositories.TeamRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
@ActiveProfiles("test")
class TeamServiceTest {

    @Mock
    TeamRepository teamRepository;

    @InjectMocks
    TeamService teamService;

    @Test
    @DisplayName("Should return all Teams sucessfully from DB")
    void shouldCreateUser() {
        Team team1 = new Team(null, "Backend");
        Team team2 = new Team(null, "Frontend");
        List<Team> teams = List.of(team1, team2);

        when(teamRepository.findAll()).thenReturn(teams);

        List<Team> usersResponse = teamService.findAll();
        assertEquals(usersResponse, teams);
    }
}