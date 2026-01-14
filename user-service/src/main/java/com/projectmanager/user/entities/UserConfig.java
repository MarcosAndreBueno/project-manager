package com.projectmanager.user.entities;

import jakarta.persistence.*;

import java.util.Objects;
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

    public Set<Integer> getKanbanColConfig() {
        return kanbanColConfig;
    }

    public void setKanbanColConfig(Set<Integer> kanbanColConfig) {
        this.kanbanColConfig = kanbanColConfig;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        UserConfig that = (UserConfig) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
