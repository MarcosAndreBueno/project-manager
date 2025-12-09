import { TicketStatus } from "./ticket-status";
import { User } from "./user";

export interface Ticket {
    id: number,
    title: string,
    description: string,
    status: TicketStatus,
    createdBy: User,
    createdIn: Date,
    childTicketsId: number[],
};