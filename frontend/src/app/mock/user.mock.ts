import { User } from "../entities/user";
import { teamList } from "./team.mock";

export const userList: User[] = [
  { id: 1,  name: "James",     teamId: teamList[0].id },
  { id: 2,  name: "Emma",      teamId: teamList[0].id },
  { id: 3,  name: "Michael",   teamId: teamList[0].id },
  { id: 4,  name: "Olivia",    teamId: teamList[0].id },

  { id: 5,  name: "Liam",      teamId: teamList[1].id },
  { id: 6,  name: "Sophia",    teamId: teamList[1].id },
  { id: 7,  name: "Noah",      teamId: teamList[1].id },
  { id: 8,  name: "Ava",       teamId: teamList[1].id },

  { id: 9,  name: "Ethan",     teamId: teamList[2].id },
  { id: 10, name: "Isabella",  teamId: teamList[2].id },
  { id: 11, name: "Jacob",     teamId: teamList[2].id },
  { id: 12, name: "Mia",       teamId: teamList[2].id },

  { id: 13, name: "William",   teamId: teamList[3].id },
  { id: 14, name: "Charlotte", teamId: teamList[3].id },
  { id: 15, name: "Benjamin",  teamId: teamList[3].id },
  { id: 16, name: "Amelia",    teamId: teamList[3].id },

  { id: 17, name: "Lucas",     teamId: teamList[4].id },
  { id: 18, name: "Harper",    teamId: teamList[4].id },
  { id: 19, name: "Henry",     teamId: teamList[4].id },
  { id: 20, name: "Evelyn",    teamId: teamList[4].id },
];
