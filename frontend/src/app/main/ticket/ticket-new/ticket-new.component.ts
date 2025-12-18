import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, Observable, switchMap } from 'rxjs';
import { Team } from '../../../entities/team';
import { Ticket } from '../../../entities/ticket';
import { TicketStatus } from '../../../entities/ticket-status';
import { User } from '../../../entities/user';
import { ticketStatus } from '../../../mock/ticket-status.mock';
import { TeamService } from '../../../service/team.service';
import { UserService } from '../../../service/user.service';
import { ModelFormGroup } from '../../../utils/model-form-group';

@Component({
  selector: 'app-ticket-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-new.component.html',
  styleUrl: './ticket-new.component.scss'
})
export class TicketNewComponent implements OnInit {
  public id = 50;
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

    let activeUser$: Observable<User>;
    let activeUserTeam$: Observable<Team>;

    //get user then get team from user.team.id
    activeUser$ = this.userService.getUserById(1);
    activeUserTeam$ = activeUser$.pipe(
      switchMap(user => this.teamService.getTeamsById(user.team.id))
    );

    //update form
    activeUser$.pipe(delay(3000)).subscribe(user => {
      this.form.patchValue({
        createdBy: {
          id: user.id,
          name: user.name,
        }
      });
      console.log(user);
    });

    //update form
    activeUserTeam$.pipe(delay(3000)).subscribe(team => {
      this.form.patchValue({
        createdBy: {
          team: team
        }
      });
      console.log(team);
    });

    //initializing form
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
        id: new FormControl<number>(0),
        name: new FormControl<string>(''),
        team: new FormControl<Team | null>(null),
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


