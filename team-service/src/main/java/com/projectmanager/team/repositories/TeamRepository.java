package com.projectmanager.team.repositories;

import com.projectmanager.team.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
