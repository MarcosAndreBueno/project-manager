package com.projectmanager.projectmanager.services;

import com.projectmanager.projectmanager.entities.TicketStatus;
import com.projectmanager.projectmanager.repositories.TicketStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketStatusService {

    @Autowired
    TicketStatusRepository ticketStatusRepository;

    public List<TicketStatus> getTicketStatus() {
        return ticketStatusRepository.findAll();
    }
}
