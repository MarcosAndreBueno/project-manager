package com.projectmanager.ticket.services;

import com.projectmanager.ticket.entities.Ticket;
import com.projectmanager.ticket.entities.TicketStatus;
import com.projectmanager.ticket.repositories.TicketRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ActiveProfiles;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ActiveProfiles("test")
public class TicketServiceTest {

    @Mock
    TicketRepository ticketRepository;

    @InjectMocks
    TicketService ticketService;

    TicketStatus ticketStatus;

    @BeforeEach
    void setUp() {
        ticketStatus = new TicketStatus(null, "OPEN");
    }

    @Test
    @DisplayName("Should return all Users sucessfully from DB")
    void shouldCreateUser() {
        String title = "Improve authentication module";
        String description = "Epic: Modernize authentication flow and increase security.";
        Long createdBy = 3L;
        Date createdIn = new Date();
        Long[] childTickets = new Long[0];

        Ticket ticket1 = new Ticket(null, title, description, ticketStatus, createdBy, createdIn, childTickets);
        List<Ticket> tickets = List.of(ticket1);

        when(ticketRepository.findAll()).thenReturn(tickets);

        List<Ticket> ticketsResponse = ticketService.findAll();
        assertEquals(ticketsResponse, tickets);
    }
}
