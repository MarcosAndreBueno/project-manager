import { UserConfig } from "../entities/user-config";
import { ticketStatus } from "./ticket-status.mock";
import { userList } from "./user.mock";

export let kanbanConfig: UserConfig = {
    userId: userList[0].id,
    kanbanColConfig: [0, 1, 5, 7]
};