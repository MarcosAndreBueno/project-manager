import { Kanban } from "../entities/config";
import { TicketStatusEnums } from "../enums/ticket-status";

export let kanbanConfig: Kanban = {
    colConfig: [TicketStatusEnums.OPEN, TicketStatusEnums.IN_PROGRESS, TicketStatusEnums.CANCELED, TicketStatusEnums.DONE]
};