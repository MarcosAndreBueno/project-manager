import { TicketStatusEnums } from "../enums/ticket-status";
import { Ticket } from "../entities/ticket";
import { userList } from "./user.mock";

const ticketDetail_3: Ticket = {
    id: 3,
    title: 'Ticket 1.2',
    description: 'Description of ticket 1.2',
    status: TicketStatusEnums.OPEN,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: [],
};

const ticketDetail_2: Ticket = {
    id: 2,
    title: 'Ticket 1.1',
    description: 'Description of ticket 1.1',
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: [],
};

const ticketDetail_1: Ticket = {
    id: 1,
    title: 'Ticket 1',
    description: 'Description of ticket 1',
    status: TicketStatusEnums.IN_PROGRESS,
    createdBy: userList[0],
    createdIn: new Date(),
    childTicketsId: [2, 3],
};

export const tickets = [ticketDetail_1, ticketDetail_2, ticketDetail_3];