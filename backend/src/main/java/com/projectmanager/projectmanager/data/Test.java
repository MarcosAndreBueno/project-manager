package com.projectmanager.projectmanager.data;

import com.projectmanager.projectmanager.entities.*;
import com.projectmanager.projectmanager.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Configuration
@Profile("test")
public class Test implements CommandLineRunner {

    @Autowired
    TicketRepository ticketRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    TicketStatusRepository ticketStatusRepository;

    @Autowired
    UserConfigRepository userConfigRepository;

    @Override
    public void run(String... args) throws Exception {
        Team team1 = new Team(null, "Team 1");
        Team team2 = new Team(null, "Team 2");
        teamRepository.saveAll(Arrays.asList(team1, team2));

        User user1 = new User(null, "User 1", team1);
        User user2 = new User(null, "User 2", team1);
        userRepository.saveAll(Arrays.asList(user1, user2));

        UserConfig config1 = new UserConfig(user1, Set.of(1,2));
        UserConfig config2 = new UserConfig(user2, Set.of(1,2));
        userConfigRepository.saveAll(Arrays.asList(config1, config2));

        TicketStatus tickSt1 = new TicketStatus(null, "OPEN");
        TicketStatus tickSt2 = new TicketStatus(null, "IN_PROGRESS");
        TicketStatus tickSt3 = new TicketStatus(null, "WAITING_CLIENT");
        TicketStatus tickSt4 = new TicketStatus(null, "TESTING");
        TicketStatus tickSt5 = new TicketStatus(null, "STAGING");
        TicketStatus tickSt6 = new TicketStatus(null, "CANCELED");
        TicketStatus tickSt7 = new TicketStatus(null, "DONE");
        ticketStatusRepository.saveAll(Arrays.asList(tickSt1, tickSt2, tickSt3, tickSt4, tickSt5, tickSt6, tickSt7));

        Ticket childTicket1 = new Ticket(null, "Child Ticket of 1", "Child Ticket 1 Description",
                tickSt1, user1, new Date(), new Long[0]);
        ticketRepository.saveAll(Arrays.asList(childTicket1));

        Ticket ticket1 = new Ticket(null, "Ticket 1", "Description 1",
                tickSt1, user1, new Date(), new Long[]{childTicket1.getId()});
        Ticket ticket2 = new Ticket(null, "Ticket 2", "Description 2",
                tickSt1, user1, new Date(), new Long[0]);
        ticketRepository.saveAll(Arrays.asList(ticket1, ticket2));


    }
}
