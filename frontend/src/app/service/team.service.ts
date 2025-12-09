import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "../entities/team";
import { teamList } from "../mock/team.mock";

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) { }

    public getTeams(): Observable<Team[]> {
        return this.httpClient.get<Team[]>(`${this.API}/teams`);
    }

    public getTeamsByUser(userTeamId: number): Team | undefined {
        return teamList.find(t => t.id === userTeamId);
    }
}