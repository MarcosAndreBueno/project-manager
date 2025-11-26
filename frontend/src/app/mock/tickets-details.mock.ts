import { TicketStatusEnums } from "../enums/ticket-status";
import { Ticket } from "../entities/ticket";
import { User_1 } from "./user.mock";
import { formatDate } from "@angular/common";

const ticketDetail_1: Ticket = {
    id: 1,
    title: 'Ticket 1',
    description: 'Description of ticket 1',
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: User_1,
    createdIn: new Date(),
    idChildTicket: 2,
    
};

const ticketDetail_2: Ticket = {
    id: 2,
    title: 'Ticket 1.1',
    description: 'Description of ticket 1.1',
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: User_1,
    createdIn: new Date(),
    idChildTicket: undefined,
};

export const tickets = [ticketDetail_1, ticketDetail_2];