package com.projectmanager.ticket.services;

//import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.ticket.entities.TicketStatus;
import com.projectmanager.ticket.repositories.TicketStatusRepository;
import com.projectmanager.ticket.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class TicketStatusService {

    @Autowired
    TicketStatusRepository ticketStatusRepository;

    public List<TicketStatus> findAll() {
        List<TicketStatus> ticketStatuses = ticketStatusRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(TicketStatus::getId))
                .toList();
        return ticketStatuses;
    }

    public TicketStatus findById(Integer id) {
        Optional<TicketStatus> obj = ticketStatusRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
