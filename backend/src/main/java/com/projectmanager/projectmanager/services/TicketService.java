package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Ticket;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TicketService {

    public Ticket[] getTickets() {
        Ticket ticket1 = new Ticket(1L, "Ticket 1", "Description 1",
                "OPEN", "User 1", new Date(), new Long[0]);
        Ticket ticket2 = new Ticket(2L, "Ticket 2", "Description 2",
                "OPEN", "User 2", new Date(), new Long[0]);

        return new Ticket[]{ticket1, ticket2};
    }
}
