package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    public List<Ticket> getTickets() {
        return ticketRepository.findAll();
    }
}
