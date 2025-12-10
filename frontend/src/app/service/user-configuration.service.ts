import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserConfig } from "../entities/user-config";

@Injectable({
    providedIn: 'root'
})
export class UserConfigurationService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) {}

    public getUserConfigurations(id: number): Observable<UserConfig> {
        return this.httpClient.get<UserConfig>(`${this.API}/user-config/${id}`);
    }
}