import { TicketStatusEnums } from "../enums/ticket-status";
import { User } from "./user";

export interface Ticket {
    id: number,
    title: string,
    description: string,
    status: TicketStatusEnums,
    createdBy: User,
    createdIn: Date,
    childTicketsId: number[],
};