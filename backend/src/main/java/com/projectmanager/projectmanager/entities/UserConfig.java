package com.projectmanager.projectmanager.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class UserConfig {

    @Id
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    Set<Integer> kanbanColConfig;

    public UserConfig() {
    }

    public UserConfig(User user, Set<Integer> kanbanColConfig) {
        this.user = user;
        this.kanbanColConfig = kanbanColConfig;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Integer> getKanbanColConfig() {
        return kanbanColConfig;
    }

    public void setKanbanColConfig(Set<Integer> kanbanColConfig) {
        this.kanbanColConfig = kanbanColConfig;
    }
}
