package com.projectmanager.ticket.repositories;

import com.projectmanager.ticket.entities.TicketStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketStatusRepository extends JpaRepository<TicketStatus, Integer> {
}
