import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../entities/ticket';
import { tickets } from '../../../mock/tickets-details.mock';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TicketStatusEnums } from '../../../enums/ticket-status';

@Component({
  selector: 'app-ticker-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticker-details.component.html',
  styleUrl: './ticker-details.component.scss'
})
export class TickerDetailsComponent implements OnInit {
  public ticket$?: Ticket;
  public childTickets$?: Ticket[];
  public statusEnums?: TicketStatusEnums[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const currentId = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.ticket$ = tickets.find(t => t.id === id)!;

      this.childTickets$ = this.ticket$.childTicketsId
        .map(id => tickets.find(t => t.id === id)!)

    });
    
    this.statusEnums = Object.values(TicketStatusEnums);
    console.log(this.statusEnums)
  }

  public changeStatus(status: TicketStatusEnums): void {
    if (this.ticket$) {
      this.ticket$.status = status;
    }
  }
}