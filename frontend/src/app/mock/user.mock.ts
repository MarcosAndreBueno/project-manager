import { User } from "../entities/user";
import { teamList } from "./team.mock";

const User_3: User = {
    id: 3,
    name: "User_3",
    team: teamList[0],
};
const User_2: User = {
    id: 2,
    name: "User_2",
    team: teamList[0],
};
const User_1: User = {
    id: 1,
    name: "User_1",
    team: teamList[0],
};

export const userList = [User_1, User_2, User_3];