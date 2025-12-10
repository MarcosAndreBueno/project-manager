package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.entities.TicketStatus;
import com.projectmanager.projectmanager.services.TicketStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tickets/status")
@CrossOrigin
public class TicketStatusController {

    @Autowired
    TicketStatusService ticketStatusService;

    @GetMapping
    public List<TicketStatus> getTicketStatus() {
        return ticketStatusService.findAll();
    }

    @GetMapping(value = "/{id}")
    public TicketStatus findById(@PathVariable Integer id) {
        return ticketStatusService.findById(id);
    }
}
