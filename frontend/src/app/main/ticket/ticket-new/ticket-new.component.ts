import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Team } from '../../../entities/team';
import { Ticket } from '../../../entities/ticket';
import { TicketStatus } from '../../../entities/ticket-status';
import { User } from '../../../entities/user';
import { TeamService } from '../../../service/team.service';
import { UserService } from '../../../service/user.service';
import { ModelFormGroup } from '../../../utils/model-form-group';
import { TicketService } from '../../../service/ticket.service';

@Component({
  selector: 'app-ticket-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-new.component.html',
  styleUrl: './ticket-new.component.scss'
})
export class TicketNewComponent implements OnInit {
  public ticketId = 50;
  public today: Date;
  public formattedDate: string;
  public user!: User;
  public ticketStatus!: TicketStatus;
  public form!: ModelFormGroup<Ticket>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private ticketService: TicketService
  ) {
    this.today = new Date();
    this.formattedDate = this.today.toLocaleDateString("pt-BR");
  }

  ngOnInit(): void {
    this.ticketId++;

    let activeUser: User | null = null;
    let activeUserTeam: Team | null = null;

    // temp
    const fixedUserId = 1;

    //get user
    this.userService.getUserById(fixedUserId).subscribe(u => {
      this.user = u;
      //update user in form
      this.form.patchValue({
        createdBy: u.id
      });
    });

    //temp
    const ticketOpenId = 1;

    //get ticket status
    this.ticketService.getTicketStatusById(ticketOpenId).subscribe(
      t => this.ticketStatus = t
    );

    //initializing form
    this.form = this.formBuilder.group({
      id: new FormControl<number>(this.ticketId),
      title: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ),
      description: new FormControl<string>(''),
      status: new FormControl<TicketStatus | null>(null),
      createdBy: new FormControl<number | null>(null),
      createdIn: new FormControl<Date>(this.today),
      childTickets: new FormControl<number[]>([]),
    });
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


