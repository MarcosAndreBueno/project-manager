import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketStatusEnums } from '../../../enums/ticket-status';
import { userList } from '../../../mock/user.mock';
import { ModelFormGroup } from '../../../utils/model-form-group';
import { Ticket } from '../../../entities/ticket';
import { Team } from '../../../entities/team';
import { teamList } from '../../../mock/team.mock';
import { UserService } from '../../../service/user.service';
import { TeamService } from '../../../service/team.service';
import { User } from '../../../entities/user';

@Component({
  selector: 'app-ticket-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-new.component.html',
  styleUrl: './ticket-new.component.scss'
})
export class TicketNewComponent implements OnInit {
  public id = 50;
  public activeUser?: User;
  public activeUserTeam?: Team;
  public today = new Date();
  public formattedDate = this.today.toLocaleDateString("pt-BR");
  
  public form!: ModelFormGroup<Ticket>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.id++;
    this.activeUser = this.userService.getUserById(0)!;
    this.activeUserTeam = this.teamService.getTeamsByUser(this.activeUser.team.id);

    this.form = this.formBuilder.group({
      id: new FormControl<number>(this.id),
      title: new FormControl<string>(
        '', 
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ),
      description: new FormControl<string>(''),
      status: new FormControl<TicketStatusEnums>(TicketStatusEnums.OPEN),
      createdBy: this.formBuilder.group({
        id: new FormControl<number>(this.activeUser!.id),
        name: new FormControl<string>(this.activeUser!.name),
        team: new FormControl<Team>(this.activeUserTeam!),
      }),
      createdIn: new FormControl<Date>(this.today),
      childTicketsId: new FormControl<number[]>([]),
    })

    console.log(this.form);
  }

  get title() {
    return this.form.get('title');
  }

  onSubmit() {
    this.form.invalid ? 
      console.log("form invalid:", this.form) : 
      console.log("form valid:", this.form);
  }

  close() {

  }
}
