package com.projectmanager.ticket.entities;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;

@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @ManyToOne()
    private TicketStatus status;

    @Column(name = "user_id")
    private Long createdBy;

    private Date createdIn;

    private Long[] childTickets;

    public Ticket() {
    }

    public Ticket(Long id, String title, String description, TicketStatus status, Long createdBy, Date createdIn, Long[] childTickets) {
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

    public Long getCreatedBy() {
        return createdBy;
    }

    public Date getCreatedIn() {
        return createdIn;
    }

    public Long[] getChildTickets() {
        return childTickets;
    }

    public void setChildTickets(Long[] childTickets) {
        this.childTickets = childTickets;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Ticket ticket = (Ticket) o;
        return Objects.equals(id, ticket.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
