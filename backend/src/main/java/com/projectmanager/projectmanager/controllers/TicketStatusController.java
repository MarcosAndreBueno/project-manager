package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.TicketStatus;
import com.projectmanager.projectmanager.services.TicketStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tickets/status")
public class TicketStatusController {

    @Autowired
    TicketStatusService ticketStatusService;

    @GetMapping
    public List<TicketStatus> getTicketStatus() {
        return ticketStatusService.getTicketStatus();
    }
}
