import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../entities/ticket";
import { ticketList } from "../mock/tickets-details.mock";

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) {}

    public getTickets(): Observable<Ticket[]> {
        return this.httpClient.get<Ticket[]>(`${this.API}/tickets`);
    }

    public getTicketById(id: number): Ticket | undefined {
        return ticketList.find(t => t.id === id);
    }

    public getChildTickets(childTicketsId: number[]): Ticket[] | undefined {
        return childTicketsId
            .map(id => this.getTicketById(id))
            .filter((ticket): ticket is Ticket => ticket !== undefined);
    }

    public getTicketByUserId(id: number): Ticket[] | undefined {
        return ticketList.filter(t => t.createdBy.id === id);
    }
}