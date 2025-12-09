package com.projectmanager.projectmanager.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @ManyToOne()
    private TicketStatus status;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User createdBy;

    private Date createdIn;

    private Long[] childTickets;

    public Ticket() {
    }

    public Ticket(Long id, String title, String description, TicketStatus status, User createdBy, Date createdIn, Long[] childTickets) {
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

    public TicketStatus getStatus() {
        return status;
    }

    public void setStatus(TicketStatus status) {
        this.status = status;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
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
