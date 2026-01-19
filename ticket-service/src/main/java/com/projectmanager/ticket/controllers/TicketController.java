package com.projectmanager.ticket.controllers;

//import com.projectmanager.projectmanager.entities.Team;
import com.projectmanager.ticket.entities.Ticket;
import com.projectmanager.ticket.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tickets")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @GetMapping
    public ResponseEntity<List<Ticket>> findAll() {
        List<Ticket> ticket = ticketService.findAll();
        return ResponseEntity.ok().body(ticket);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable Long id) {
        Ticket obj = ticketService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
}
