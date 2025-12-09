package com.projectmanager.projectmanager.data;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.entities.User;
import com.projectmanager.projectmanager.repositories.TeamRepository;
import com.projectmanager.projectmanager.repositories.TicketRepository;
import com.projectmanager.projectmanager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;
import java.util.Date;

@Configuration
@Profile("test")
public class Test implements CommandLineRunner {

    @Autowired
    TicketRepository ticketRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TeamRepository teamRepository;

    @Override
    public void run(String... args) throws Exception {
        Team team1 = new Team(null, "Team 1");
        Team team2 = new Team(null, "Team 2");

        teamRepository.saveAll(Arrays.asList(team1, team2));

        User user1 = new User(null, "User 1", team1);
        User user2 = new User(null, "User 2", team1);

        userRepository.saveAll(Arrays.asList(user1, user2));

        Ticket ticket1 = new Ticket(null, "Ticket 1", "Description 1",
                "OPEN", "User 1", new Date(), new Long[0]);
        Ticket ticket2 = new Ticket(null, "Ticket 2", "Description 2",
                "OPEN", "User 2", new Date(), new Long[0]);

        ticketRepository.saveAll(Arrays.asList(ticket1, ticket2));
    }
}
