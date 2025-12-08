package com.projectmanager.projectmanager.entities;

import java.util.Date;


public class Ticket {

    public Long id;
    public String title;
    public String description;
    public String status;
    public String createdBy;
    public Date createdIn;
    public Long[] childTickets;

    public Ticket(Long id, String title, String description, String status, String createdBy, Date createdIn, Long[] childTickets) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdBy = createdBy;
        this.createdIn = createdIn;
        this.childTickets = childTickets;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedIn() {
        return createdIn;
    }

    public void setCreatedIn(Date createdIn) {
        this.createdIn = createdIn;
    }

    public Long[] getChildTickets() {
        return childTickets;
    }

    public void setChildTickets(Long[] childTickets) {
        this.childTickets = childTickets;
    }
}
