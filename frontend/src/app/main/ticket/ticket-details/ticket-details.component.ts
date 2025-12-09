import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../../entities/ticket';
import { StatusService } from '../../../service/status.service';
import { TicketService } from '../../../service/ticket.service';
import { TicketStatus } from '../../../entities/ticket-status';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent implements OnInit {
  public tickets?: Ticket;
  public childTickets?: Ticket[];
  public statusEnums$: Observable<TicketStatus[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private statusService: StatusService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getTicketDetailsData(id);
    });
  }

  private getTicketDetailsData(id: number): void {
    this.tickets = this.ticketService.getTicketById(id);

    if (this.tickets?.childTicketsId) {
      this.childTickets = this.ticketService.getChildTickets(this.tickets.childTicketsId);
    }

    this.statusEnums$ = this.statusService.getStatusEnums();
  }

  public changeStatus(status: TicketStatus): void {
    if (this.tickets) {
      this.tickets.status.id = status.id;
    }
  }
}