import { Kanban } from "../entities/config";
import { ticketStatus } from "./ticket-status.mock";

export let kanbanConfig: Kanban = {
    colConfig: [ticketStatus[0], ticketStatus[1], ticketStatus[5], ticketStatus[7]]
};