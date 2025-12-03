import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tickets } from '../../../mock/tickets-details.mock';
import { TicketStatusEnums } from '../../../enums/ticket-status';
import { userList } from '../../../mock/user.mock';
import { ModelFormGroup } from '../../../entities/model-form-group';
import { Ticket } from '../../../entities/ticket';
import { Team } from '../../../entities/team';
import { teamList } from '../../../mock/team.mock';

@Component({
  selector: 'app-ticket-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-new.component.html',
  styleUrl: './ticket-new.component.scss'
})
export class TicketNewComponent implements OnInit {
  public id?: number;
  public userList = userList;
  public team_1 = teamList.at(0);
  public today = new Date();
  public formattedDate = this.today.toLocaleDateString("pt-BR");
  
  public form!: ModelFormGroup<Ticket>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = tickets.at(tickets.length - 1)?.id;
    if (id) id++;
    const user = this.userList[0];

    this.form = this.formBuilder.group({
      id: new FormControl<number>(id!),
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
        id: new FormControl<number>(user.id),
        name: new FormControl<string>(user.name),
        team: new FormControl<Team>(this.team_1!),
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
