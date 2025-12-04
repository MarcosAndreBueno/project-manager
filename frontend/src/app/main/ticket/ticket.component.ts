import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../entities/ticket';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NormalizeStringIfExceeded } from '../../utils/filtro.pipe';
import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {

  public tickets?: Ticket[];
  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor(
    private ticketService: TicketService,
  ) { }

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }

  formatDate(date: Date) {
    return formatDate(date, "yyyy-MM-dd hh:mm:ss z", "en-US");
  }
}
