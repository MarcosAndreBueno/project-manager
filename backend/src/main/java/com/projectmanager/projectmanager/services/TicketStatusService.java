package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.projectmanager.entities.TicketStatus;
import com.projectmanager.projectmanager.repositories.TicketStatusRepository;
import com.projectmanager.projectmanager.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketStatusService {

    @Autowired
    TicketStatusRepository ticketStatusRepository;

    public List<TicketStatus> findAll() {
        return ticketStatusRepository.findAll();
    }

    public TicketStatus findById(Integer id) {
        Optional<TicketStatus> obj = ticketStatusRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
