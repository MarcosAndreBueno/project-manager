import { Component, OnInit } from '@angular/core';
import { Team } from '../../entities/team';
import { User } from '../../entities/user';
import { teamList } from '../../mock/team.mock';
import { userList } from '../../mock/user.mock';
import { TeamService } from '../../service/team.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  teams?: Team[]
  users?: User[];

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.users = this.userService.getUsers();
  }

  public isTeamWithoutUser(team: Team): boolean {
    return userList.some(u => u.team.id === team.id);
  }
}
