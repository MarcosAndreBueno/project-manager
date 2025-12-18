import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../entities/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly API = '/api';

    constructor(private httpClient: HttpClient) {}
    
    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.API}/users`);
    }

    public getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.API}/users/${id}`);
    }
}