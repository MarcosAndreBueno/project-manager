package com.projectmanager.user.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tb_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long teamId;

    private Set<Long> ticket;

    public User() {
    }

    public User(Long id, String name, Long teamId) {
        this.id = id;
        this.name = name;
        this.teamId = teamId;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getTeam() {
        return teamId;
    }

    public void setTeam(Long teamId) {
        this.teamId = teamId;
    }

    public Set<Long> getTicket() {
        return ticket;
    }

    public void setTicket(Set<Long> ticket) {
        this.ticket = ticket;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
