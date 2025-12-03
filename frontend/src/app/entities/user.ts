import { Team } from "./team";

export interface User {
    id: number,
    name: string,
    team: Team,
}