import { TicketStatus } from "./ticket-status";
import { User } from "./user";

export interface UserConfig {
    user: User;
    kanbanColConfig: TicketStatus[];
}