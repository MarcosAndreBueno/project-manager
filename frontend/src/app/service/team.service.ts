import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "../entities/team";

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) { }

    public getTeams(): Observable<Team[]> {
        return this.httpClient.get<Team[]>(`${this.API}/teams`);
    }

    public getTeamsById(teamId: number): Observable<Team> {
        return this.httpClient.get<Team>(`${this.API}/teams/${teamId}`);
    }
}

