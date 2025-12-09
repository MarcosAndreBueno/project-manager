package com.projectmanager.projectmanager.repositories;

import com.projectmanager.projectmanager.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
