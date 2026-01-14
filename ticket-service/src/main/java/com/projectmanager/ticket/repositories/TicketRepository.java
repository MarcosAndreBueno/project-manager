package com.projectmanager.ticket.repositories;

import com.projectmanager.ticket.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
