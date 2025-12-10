import { UserConfig } from "../entities/user-config";
import { ticketStatus } from "./ticket-status.mock";
import { userList } from "./user.mock";

export let kanbanConfig: UserConfig = {
    user: userList[0],
    kanbanColConfig: [ticketStatus[0], ticketStatus[1], ticketStatus[5], ticketStatus[7]]
};