import { TicketStatus } from "./ticket-status";
import { User } from "./user";

export interface UserConfig {
    userId: number;
    kanbanColConfig: number[];
}