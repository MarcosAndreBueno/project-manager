package com.projectmanager.projectmanager.repositories;

import com.projectmanager.projectmanager.entities.UserConfig;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserConfigRepository extends JpaRepository<UserConfig, Long> {
}
