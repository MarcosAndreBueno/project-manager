import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../entities/user";
import { userList } from "../mock/user.mock";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {}
    
    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>("http://localhost:8080/api/users");
    }

    public getUserById(id: number): User | undefined {
        return userList.find(u => u.id === id);
    }
}