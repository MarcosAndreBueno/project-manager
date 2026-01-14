package com.projectmanager.user.repositories;

import com.projectmanager.user.entities.UserConfig;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserConfigRepository extends JpaRepository<UserConfig, Long> {
}
