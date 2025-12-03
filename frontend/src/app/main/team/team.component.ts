import { Component, OnInit } from '@angular/core';
import { Team } from '../../entities/team';
import { User } from '../../entities/user';
import { teamList } from '../../mock/team.mock';
import { userList } from '../../mock/user.mock';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  teamList!: Team[]
  userList!: User[];

  constructor() {}

  ngOnInit() {
    this.teamList = teamList;
    this.userList = userList;
    
  }

  public isTeamWithoutUser(team: Team): boolean {
    return userList.some(u => u.team.id === team.id);
  }
}
