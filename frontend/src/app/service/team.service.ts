import { Injectable } from "@angular/core";
import { teamList } from "../mock/team.mock";
import { Team } from "../entities/team";

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    public getTeams(): Team[] {
        return teamList;
    }
    
    public getTeamsByUser(userTeamId: number): Team | undefined {
        return teamList.find(t => t.id === userTeamId);
    }
}