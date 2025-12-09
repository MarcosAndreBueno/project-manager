package com.projectmanager.projectmanager.repositories;

import com.projectmanager.projectmanager.entities.TicketStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketStatusRepository extends JpaRepository<TicketStatus, Integer> {
}
