package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/tickets")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @GetMapping
    public Ticket[] getTickets() {
        return ticketService.getTickets();
    }
}
