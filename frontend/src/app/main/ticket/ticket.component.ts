import { Component } from '@angular/core';
import { tickets } from '../../mock/tickets-details.mock';
import { Ticket } from '../../entities/ticket';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NormalizeStringIfExceeded } from '../utils/filtro.pipe';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

  public ticketList: Ticket[];
  public descriptionLimit: number = 70;
  public titleLimit: number = 50;
  
  constructor() {
    this.ticketList = tickets;
  }

  formatDate(date: Date) {
    return formatDate(date, "yyyy-MM-dd hh:mm:ss z", "en-US");
  }
}
