import { Injectable } from "@angular/core";
import { TicketStatusEnums } from "../enums/ticket-status";

@Injectable({
    providedIn: 'root'
})
export class StatusService {

    public getStatusEnums(): TicketStatusEnums[] {
        return Object.values(TicketStatusEnums);
    }
}