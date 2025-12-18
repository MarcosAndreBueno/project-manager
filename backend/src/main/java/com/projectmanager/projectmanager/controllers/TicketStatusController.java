package com.projectmanager.projectmanager.controllers;

import com.projectmanager.projectmanager.entities.Ticket;
import com.projectmanager.projectmanager.entities.TicketStatus;
import com.projectmanager.projectmanager.services.TicketStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tickets/status")
@CrossOrigin
public class TicketStatusController {

    @Autowired
    TicketStatusService ticketStatusService;

    @GetMapping
    public ResponseEntity<List<TicketStatus>> findAll() {
        List<TicketStatus> ticketsStatus = ticketStatusService.findAll();
        return ResponseEntity.ok().body(ticketsStatus);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TicketStatus> findById(@PathVariable Integer id) {
        TicketStatus obj = ticketStatusService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
}
