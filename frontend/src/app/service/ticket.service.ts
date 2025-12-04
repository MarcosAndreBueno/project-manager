import { Injectable } from "@angular/core";
import { Ticket } from "../entities/ticket";
import { ticketList } from "../mock/tickets-details.mock";

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    public getTickets(): Ticket[] {
        return ticketList;
    }

    public getTicketById(id: number): Ticket | undefined {
        return ticketList.find(t => t.id === id);
    }

    public getChildTickets(childTicketsId: number[]): Ticket[] | undefined {
        const childTickets1 = childTicketsId
            .map(id => this.getTicketById(id))
            .filter((ticket): ticket is Ticket => ticket !== undefined);


        const childTickets: Ticket[] = [];

        const mapped = childTicketsId.map(id => this.getTicketById(id));

        for (const item of mapped) {
            if (item !== undefined) {
                childTickets.push(item);
            }
        }

        if (childTickets === undefined) {
            return undefined;
        } else {
            return childTickets;
        }
    }

    public getTicketByUserId(id: number): Ticket[] | undefined {
        return ticketList.filter(t => t.createdBy.id === id);
    }
}