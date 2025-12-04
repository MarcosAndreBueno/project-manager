import { TicketStatusEnums } from "../enums/ticket-status";

export interface Kanban {
    colConfig: TicketStatusEnums[];
}