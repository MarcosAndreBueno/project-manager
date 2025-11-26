import { Component } from '@angular/core';
import { tickets } from '../../mock/tickets-details.mock';
import { Ticket } from '../../entities/ticket';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  ticketList: Ticket[];
  descriptionLimit: number = 50;

  constructor() {
    this.ticketList = tickets;
  }
}
