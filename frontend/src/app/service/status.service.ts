import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TicketStatus } from "../entities/ticket-status";

@Injectable({
    providedIn: 'root'
})
export class StatusService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) { }

    public getStatusEnums(): Observable<TicketStatus[]> {
        return this.httpClient.get<TicketStatus[]>(`${this.API}/tickets/status`);
    }
}