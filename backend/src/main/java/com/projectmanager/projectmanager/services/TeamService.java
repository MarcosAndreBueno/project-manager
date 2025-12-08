package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    public Team[] getTeams() {
        Team team1 = new Team(1L, "Team 1");
        Team team2 = new Team(2L, "Team 2");

        //return new Team[]{team1, team2};
        return null;
    }
}
