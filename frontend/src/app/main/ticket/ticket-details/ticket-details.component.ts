import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../entities/ticket';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TicketStatusEnums } from '../../../enums/ticket-status';
import { TicketService } from '../../../service/ticket.service';
import { StatusService } from '../../../service/status.service';

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
  public statusEnums?: TicketStatusEnums[];

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

    this.statusEnums = this.statusService.getStatusEnums();
  }

  public changeStatus(status: TicketStatusEnums): void {
    if (this.tickets) {
      this.tickets.status = status;
    }
  }
}