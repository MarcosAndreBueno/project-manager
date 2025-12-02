import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TicketForm } from '../../../entities/ticket-form';
import { tickets } from '../../../mock/tickets-details.mock';
import { TicketStatusEnums } from '../../../enums/ticket-status';
import { User } from '../../../entities/user';
import { User_1 } from '../../../mock/user.mock';

@Component({
  selector: 'app-ticket-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-new.component.html',
  styleUrl: './ticket-new.component.scss'
})
export class TicketNewComponent implements OnInit {
  public form!: FormGroup<TicketForm>;
  public id?: number;
  public user = User_1;
  public today = new Date();
  public formattedDate = this.today.toLocaleDateString("pt-BR");
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = tickets.at(tickets.length-1)?.id;
    if (id) id++;

    this.form = this.formBuilder.group({
      id: new FormControl<number | null>(id!),
      title: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      status: new FormControl<TicketStatusEnums | null>(null),
      createdBy: this.formBuilder.group({
        id: new FormControl<number | null>(this.user.id),
        name: new FormControl<string | null>(this.user.name),
      }),
      createdIn: new FormControl<Date | null>(this.today),
      childTicketsId: new FormControl<number[] | null>(null),
    })
  }

  onSubmit() {
    console.log("dentro submit:",this.form);
  }

  close() {
    
  }
}
