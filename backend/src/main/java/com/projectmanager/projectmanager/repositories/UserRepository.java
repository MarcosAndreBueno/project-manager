package com.projectmanager.projectmanager.repositories;

import com.projectmanager.projectmanager.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
