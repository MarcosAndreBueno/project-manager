import { Injectable } from "@angular/core";
import { User } from "../entities/user";
import { userList } from "../mock/user.mock";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public getUsers(): User[] {
        return userList;
    }

    public getUserById(id: number): User | undefined {
        return userList.find(u => u.id === id);
    }
}