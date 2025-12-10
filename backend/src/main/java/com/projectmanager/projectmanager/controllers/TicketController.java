package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tickets")
@CrossOrigin
public class TicketController {

    @Autowired
    TicketService ticketService;

    @GetMapping
    public List<Ticket> getTickets() {
        return ticketService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Ticket findById(@PathVariable Long id) {
        return ticketService.findById(id);
    }
}
