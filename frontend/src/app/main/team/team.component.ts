import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Team } from '../../entities/team';
import { User } from '../../entities/user';
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
  public users: User[] = [];
  public filledTeams: Set<number> = new Set();

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.userService.getUsers().subscribe(users => {
      this.users = users,
      this.filledTeams = new Set(users.map(u => u.teamId))
      console.log(this.users)
      console.log(this.filledTeams)
    });
  }

  public isTeamFilled(id: number): boolean {
    return this.filledTeams.has(id);
  }
}
