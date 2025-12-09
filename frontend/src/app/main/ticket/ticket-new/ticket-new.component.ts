import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Team } from '../../../entities/team';
import { Ticket } from '../../../entities/ticket';
import { User } from '../../../entities/user';
import { TeamService } from '../../../service/team.service';
import { UserService } from '../../../service/user.service';
import { ModelFormGroup } from '../../../utils/model-form-group';
import { TicketStatus } from '../../../entities/ticket-status';
import { ticketStatus } from '../../../mock/ticket-status.mock';

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
  public today: Date;
  public formattedDate: string;

  public form!: ModelFormGroup<Ticket>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private teamService: TeamService,
  ) { 
    this.today = new Date();
    this.formattedDate = this.today.toLocaleDateString("pt-BR");
  }

  ngOnInit(): void {
    this.id++;
    this.activeUser = this.userService.getUserById(1)!;
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
      status: new FormControl<TicketStatus>(ticketStatus[0]),
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
