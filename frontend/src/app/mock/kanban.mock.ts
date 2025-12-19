import { UserConfig } from "../entities/user-config";
import { ticketStatus } from "./ticket-status.mock";
import { userList } from "./user.mock";

export let kanbanConfig: UserConfig = {
    user: userList[0],
    kanbanColConfig: [0, 1, 5, 7]
};