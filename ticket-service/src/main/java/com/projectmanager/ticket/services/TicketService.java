package com.projectmanager.ticket.services;

//import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.ticket.entities.Ticket;
import com.projectmanager.ticket.repositories.TicketRepository;
import com.projectmanager.ticket.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    public Ticket findById(Long id) {
        Optional<Ticket> obj = ticketRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
