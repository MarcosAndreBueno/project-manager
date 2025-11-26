import { Component } from '@angular/core';
import { tickets } from '../../mock/tickets-details.mock';
import { Ticket } from '../../entities/ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  ticketList: Ticket[];

  constructor() {
    this.ticketList = tickets;
  }
}
