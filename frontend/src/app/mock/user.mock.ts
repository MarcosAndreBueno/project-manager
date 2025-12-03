import { User } from "../entities/user";
import { teamList } from "./team.mock";

export const userList: User[] = [
  { id: 1,  name: "James",     team: teamList[0] },
  { id: 2,  name: "Emma",      team: teamList[0] },
  { id: 3,  name: "Michael",   team: teamList[0] },
  { id: 4,  name: "Olivia",    team: teamList[0] },

  { id: 5,  name: "Liam",      team: teamList[1] },
  { id: 6,  name: "Sophia",    team: teamList[1] },
  { id: 7,  name: "Noah",      team: teamList[1] },
  { id: 8,  name: "Ava",       team: teamList[1] },

  { id: 9,  name: "Ethan",     team: teamList[2] },
  { id: 10, name: "Isabella",  team: teamList[2] },
  { id: 11, name: "Jacob",     team: teamList[2] },
  { id: 12, name: "Mia",       team: teamList[2] },

  { id: 13, name: "William",   team: teamList[3] },
  { id: 14, name: "Charlotte", team: teamList[3] },
  { id: 15, name: "Benjamin",  team: teamList[3] },
  { id: 16, name: "Amelia",    team: teamList[3] },

  { id: 17, name: "Lucas",     team: teamList[4] },
  { id: 18, name: "Harper",    team: teamList[4] },
  { id: 19, name: "Henry",     team: teamList[4] },
  { id: 20, name: "Evelyn",    team: teamList[4] },
];
