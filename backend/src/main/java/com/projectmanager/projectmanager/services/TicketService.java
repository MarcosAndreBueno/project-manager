package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.repositories.TicketRepository;
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
        return obj.get();
    }
}
