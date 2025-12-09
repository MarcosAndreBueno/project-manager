import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../../entities/team';
import { User } from '../../entities/user';
import { userList } from '../../mock/user.mock';
import { TeamService } from '../../service/team.service';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  public teams$: Observable<Team[]> = of([]);
  public users$: Observable<User[]> = of([]);

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.users$ = this.userService.getUsers();
  }

  public isTeamWithoutUser(team: Team): boolean {
    return userList.some(u => u.team.id === team.id);
  }
}
