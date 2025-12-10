import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, forkJoin, map, Observable, of } from "rxjs";
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

    public getTicketById(id: number): Observable<Ticket> {
        return this.httpClient.get<Ticket>(`${this.API}/tickets/${id}`);
    }

    public getChildTickets(childTicketsId: number[]): Observable<Ticket[]> {
        return forkJoin(
            childTicketsId.map(id => this.getTicketById(id))
        );
    }

    public getTicketByUserId(id: number): Observable<Ticket[]> {
        return this.getTickets().pipe(
            map(ts => ts.filter(
                t => t.createdBy.id === id
            ))
        );
    }
}